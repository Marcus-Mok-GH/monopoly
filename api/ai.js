/**
 * Server-side proxy for Pollinations chat completions.
 *
 * The browser game calls /api/ai so the Pollinations key never has to be
 * shipped to the client. If the deployment has no key configured the route
 * answers 404 and the game quietly falls back to its built-in strategy.
 */

const POLLINATIONS_URL = 'https://gen.pollinations.ai/v1/chat/completions';
const MAX_TOKENS_LIMIT = 4000;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.POLLINATIONS_API_KEY;
  if (!key) {
    return res.status(404).json({ error: 'No Pollinations key is configured for this deployment' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const model = typeof body.model === 'string' ? body.model.trim() : '';
  if (!model) return res.status(400).json({ error: 'No model given' });

  let messages = Array.isArray(body.messages) ? body.messages : null;
  if (!messages || !messages.length) {
    const system = typeof body.system === 'string' ? body.system : 'You are a careful Monopoly player. Reply with JSON only.';
    const prompt = typeof body.prompt === 'string' ? body.prompt : '';
    messages = [
      { role: 'system', content: system },
      { role: 'user', content: prompt },
    ];
  }

  const maxTokens = Math.max(64, Math.min(Number(body.max_tokens) || 1500, MAX_TOKENS_LIMIT));
  const temperature = Math.max(0, Math.min(Number(body.temperature) || 0.2, 2));
  const reasoningEffort = ['low', 'medium', 'high'].includes(body.reasoning_effort) ? body.reasoning_effort : 'low';

  try {
    const upstream = await fetch(POLLINATIONS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({ model, messages, max_tokens: maxTokens, temperature, reasoning_effort: reasoningEffort }),
    });
    const raw = await upstream.text();
    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: `Pollinations error ${upstream.status}`,
        detail: raw.slice(0, 500),
      });
    }
    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      return res.status(502).json({ error: 'Pollinations returned a response we could not read' });
    }
    const content = data && data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : '';
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ content: typeof content === 'string' ? content : '' });
  } catch (err) {
    return res.status(502).json({ error: (err && err.message) || 'Could not reach Pollinations' });
  }
};
