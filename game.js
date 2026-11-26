const COL = {
  brown:'#7a4a25', lightblue:'#a6dcef', pink:'#d661a6', orange:'#f4902c',
  red:'#e03636', yellow:'#f2d02c', green:'#2fa85a', blue:'#3a5ec4'
};
const T = [
  {name:'GO',short:'GO',type:'go'},
  {name:'Mediterranean Avenue',short:'Mediterranean\nAve',type:'prop',price:60,group:'brown',rents:[2,10,30,90,160,250],house:50},
  {name:'Community Chest',short:'Community\nChest',type:'chest'},
  {name:'Baltic Avenue',short:'Baltic\nAve',type:'prop',price:60,group:'brown',rents:[4,20,60,180,320,450],house:50},
  {name:'Income Tax',short:'Income Tax',type:'tax'},
  {name:'Reading Railroad',short:'Reading\nRailroad',type:'rail',price:200},
  {name:'Oriental Avenue',short:'Oriental\nAve',type:'prop',price:100,group:'lightblue',rents:[6,30,90,270,400,550],house:50},
  {name:'Chance',short:'Chance',type:'chance'},
  {name:'Vermont Avenue',short:'Vermont\nAve',type:'prop',price:100,group:'lightblue',rents:[6,30,90,270,400,550],house:50},
  {name:'Connecticut Avenue',short:'Connecticut\nAve',type:'prop',price:120,group:'lightblue',rents:[8,40,100,300,450,600],house:50},
  {name:'Jail / Just Visiting',short:'In Jail /\nJust Visiting',type:'jail'},
  {name:'St. Charles Place',short:'St. Charles\nPlace',type:'prop',price:140,group:'pink',rents:[10,50,150,450,625,750],house:100},
  {name:'Electric Company',short:'Electric\nCompany',type:'util',price:150},
  {name:'States Avenue',short:'States\nAve',type:'prop',price:140,group:'pink',rents:[10,50,150,450,625,750],house:100},
  {name:'Virginia Avenue',short:'Virginia\nAve',type:'prop',price:160,group:'pink',rents:[12,60,180,500,700,900],house:100},
  {name:'Pennsylvania Railroad',short:'Pennsylvania\nRailroad',type:'rail',price:200},
  {name:'St. James Place',short:'St. James\nPlace',type:'prop',price:180,group:'orange',rents:[14,70,200,550,750,950],house:100},
  {name:'Community Chest',short:'Community\nChest',type:'chest'},
  {name:'Tennessee Avenue',short:'Tennessee\nAve',type:'prop',price:180,group:'orange',rents:[14,70,200,550,750,950],house:100},
  {name:'New York Avenue',short:'New York\nAve',type:'prop',price:200,group:'orange',rents:[16,80,220,600,800,1000],house:100},
  {name:'Free Parking',short:'Free\nParking',type:'free'},
  {name:'Kentucky Avenue',short:'Kentucky\nAve',type:'prop',price:220,group:'red',rents:[18,90,250,700,875,1050],house:150},
  {name:'Chance',short:'Chance',type:'chance'},
  {name:'Indiana Avenue',short:'Indiana\nAve',type:'prop',price:220,group:'red',rents:[18,90,250,700,875,1050],house:150},
  {name:'Illinois Avenue',short:'Illinois\nAve',type:'prop',price:240,group:'red',rents:[20,100,300,750,925,1100],house:150},
  {name:'B&O Railroad',short:'B & O\nRailroad',type:'rail',price:200},
  {name:'Atlantic Avenue',short:'Atlantic\nAve',type:'prop',price:260,group:'yellow',rents:[22,110,330,800,975,1150],house:150},
  {name:'Ventnor Avenue',short:'Ventnor\nAve',type:'prop',price:260,group:'yellow',rents:[22,110,330,800,975,1150],house:150},
  {name:'Water Works',short:'Water\nWorks',type:'util',price:150},
  {name:'Marvin Gardens',short:'Marvin\nGardens',type:'prop',price:280,group:'yellow',rents:[24,120,360,850,1025,1200],house:150},
  {name:'Go To Jail',short:'GO TO\nJAIL',type:'gtj'},
  {name:'Pacific Avenue',short:'Pacific\nAve',type:'prop',price:300,group:'green',rents:[26,130,390,900,1100,1275],house:200},
  {name:'North Carolina Avenue',short:'N. Carolina\nAve',type:'prop',price:300,group:'green',rents:[26,130,390,900,1100,1275],house:200},
  {name:'Community Chest',short:'Community\nChest',type:'chest'},
  {name:'Pennsylvania Avenue',short:'Pennsylvania\nAve',type:'prop',price:320,group:'green',rents:[28,150,450,1000,1200,1400],house:200},
  {name:'Short Line',short:'Short\nLine',type:'rail',price:200},
  {name:'Chance',short:'Chance',type:'chance'},
  {name:'Park Place',short:'Park\nPlace',type:'prop',price:350,group:'blue',rents:[35,175,500,1100,1300,1500],house:200},
  {name:'Luxury Tax',short:'Luxury Tax\n$75',type:'tax'},
  {name:'Boardwalk',short:'Boardwalk',type:'prop',price:400,group:'blue',rents:[50,200,600,1400,1700,2000],house:200}
];
const TOKENS = ['🚢','💣','🚗','🐕','🎩','⚙️','👟','🧷'];
const PCOL = ['#e04b4b','#4b8ce0','#e0b54b','#b96ee0','#4ed0a0','#e8834b','#e0e0e0','#8be04b'];
const CHANCE = [
  {t:'Advance to Boardwalk.',a:'goto',to:39},
  {t:'Advance to GO. Collect $200.',a:'goto',to:0},
  {t:'Advance to Illinois Avenue. If you pass GO, collect $200.',a:'goto',to:24},
  {t:'Advance to St. Charles Place. If you pass GO, collect $200.',a:'goto',to:11},
  {t:'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay the owner twice the usual rent.',a:'nearrail'},
  {t:'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay the owner twice the usual rent.',a:'nearrail'},
  {t:'Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, pay ten times the dice total.',a:'nearutil'},
  {t:'Bank pays you a dividend of $50.',a:'get',v:50},
  {t:'Get Out of Jail Free. This card may be kept until needed or sold.',a:'jailcard'},
  {t:'Go back three spaces.',a:'back3'},
  {t:'GO TO JAIL. Go directly to jail. Do not pass GO. Do not collect $200.',a:'jail'},
  {t:'Make general repairs on all your property: $25 per house, $100 per hotel.',a:'repairs',h:25,hot:100},
  {t:'Speeding fine — pay $15.',a:'paybank',v:15},
  {t:'Take a trip to Reading Railroad. If you pass GO, collect $200.',a:'goto',to:5},
  {t:'You have been elected Chairman of the Board. Pay each player $50.',a:'payeach',v:50},
  {t:'Your building loan matures. Collect $150.',a:'get',v:150}
];
const CHEST = [
  {t:'Advance to GO. Collect $200.',a:'goto',to:0},
  {t:'Bank error in your favour. Collect $200.',a:'get',v:200},
  {t:"Doctor's fee. Pay $50.",a:'paybank',v:50},
  {t:'From the sale of stock you get $50.',a:'get',v:50},
  {t:'Get Out of Jail Free. This card may be kept until needed or sold.',a:'jailcard'},
  {t:'GO TO JAIL. Go directly to jail. Do not pass GO. Do not collect $200.',a:'jail'},
  {t:'Holiday fund matures. Receive $100.',a:'get',v:100},
  {t:'Income tax refund. Collect $20.',a:'get',v:20},
  {t:'It is your birthday. Collect $10 from every player.',a:'geteach',v:10},
  {t:'Life insurance matures. Collect $100.',a:'get',v:100},
  {t:'Pay hospital fees of $100.',a:'paybank',v:100},
  {t:'Pay school fees of $50.',a:'paybank',v:50},
  {t:'Receive $25 consultancy fee.',a:'get',v:25},
  {t:'You are assessed for street repairs: $40 per house, $115 per hotel.',a:'repairs',h:40,hot:115},
  {t:'You have won second prize in a beauty contest. Collect $10.',a:'get',v:10},
  {t:'You inherit $100.',a:'get',v:100}
];

const $ = s => document.querySelector(s);
/* Model output is shown to the player as text — never as markup. */
function esc(s){
  return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
let resumeWaiters = [];
async function sleep(ms){
  let left = ms;
  while(left > 0){
    if(S && S.paused){ await new Promise(r => resumeWaiters.push(r)); continue }
    const step = Math.min(left, 60);
    await new Promise(r => setTimeout(r, step));
    if(!S || !S.paused) left -= step;
  }
}
let S = null;
let diceTotal = 7;
function setPaused(v){
  if(!S || S.gameover)return;
  S.paused=v;
  $('#pauseOverlay').classList.toggle('show',v);
  $('#pauseBtn').textContent=v?'▶ Resume':'⏸ Pause';
  $('#pauseBtn').setAttribute('aria-pressed',String(v));
  if(!v){resumeWaiters.splice(0).forEach(r=>r())}
}
function initPause(){
  $('#pauseBtn').onclick=()=>{if(S&&!S.gameover)setPaused(!S.paused)};
  $('#pauseResumeBtn').onclick=()=>setPaused(false);
  $('#pauseRestartBtn').onclick=()=>location.reload();
  $('#helpBtn').onclick=()=>{if(S&&!S.gameover){setPaused(true);$('#rulesBox').open=true}};
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&S&&!S.gameover)setPaused(!S.paused)});
}
/* A line of table talk on demand — the player can ask for one even on
   their own turn, and the game carries on while the bot thinks it up. */
function initTalk(){
  const btn=$('#talkBtn');
  if(btn)btn.onclick=()=>manualChat();
}

/* `chat` marks a line of table talk so it can be styled apart from the
   game log. */
function log(msg, hi, chat){
  S.log.push({msg,hi:!!hi,chat:!!chat});
  if(S.log.length>120) S.log.shift();
  const el=$('#log');
  el.innerHTML=S.log.slice(-40).map(x=>`<div class="${x.hi?'hi':''}${x.chat?' chat':''}">${esc(x.msg)}</div>`).join('');
  el.scrollTop=el.scrollHeight;
}
function money(n){return '$'+n.toLocaleString('en-US')}function saleValue(i){return S.props[i].level===5?2*T[i].house:Math.floor(T[i].house/2)}
function posName(i){return T[i].name}
function activePlayers(){return S.players.filter(p=>!p.bankrupt)}

function buildBoard(){
  const board=$('#board');
  board.innerHTML='';
  T.forEach((t,i)=>{
    const d=document.createElement('div');
    d.className='tile';
    d.dataset.i=i;
    let r,c,bar;
    if(i===0){r=11;c=11;bar='bottom'}
    else if(i<11){r=11;c=11-i;bar='bottom'}
    else if(i<21){r=21-i;c=1;bar='left'}
    else if(i<31){r=1;c=i-19;bar='top'}
    else {r=i-29;c=11;bar='right'}
    d.style.gridRow=r;d.style.gridColumn=c;
    if(['go','jail','free','gtj'].includes(t.type)) d.classList.add('corner');
    if(['prop','rail','util'].includes(t.type)){
      d.classList.add('bar-'+bar);
      const col=t.group?COL[t.group]:(t.type==='rail'?'#333':'#7d9fb8');
      d.innerHTML=`<div class="bar" style="background:${col}"></div><div class="nm">${t.short.replace('\n','<br>')}</div><div class="pr">${t.price?money(t.price):''}</div>`;
    } else if(t.type==='chest'||t.type==='chance'){
      d.innerHTML=`<div class="icon">${t.type==='chest'?'🧰':'❓'}</div><div class="nm">${t.short.replace('\n','<br>')}</div>`;
    } else if(t.type==='tax'){
      d.innerHTML=`<div class="nm">${t.short.replace('\n','<br>')}</div><div class="sub">${i===4?'10% or $200':'Pay $75'}</div>`;
    } else {
      d.innerHTML=`<div class="nm">${t.short.replace('\n','<br>')}</div>${i===0?'<div class="arrow">➜</div>':''}${i===10?'<div class="icon">👮</div>':''}${i===30?'<div class="icon">🚔</div>':''}${i===20?'<div class="icon">🅿️</div>':''}`;
    }
    const tok=document.createElement('div');tok.className='tokens';d.appendChild(tok);
    board.appendChild(d);
  });
  const c=document.createElement('div');
  c.className='center';
  c.innerHTML=`<div class="logo">MONOPOLY<small>ATLANTIC CITY</small></div><div class="msg" id="centerMsg">Roll the dice to begin</div><div class="dice" id="dice"><span>⚀</span><span>⚀</span></div><div class="dice-info" id="diceInfo"></div><div class="turn" id="centerTurn"></div><div class="hint" id="hint"></div>`;
  board.appendChild(c);
}
function renderBoard(){
  document.querySelectorAll('.tile').forEach(d=>{
    const i=+d.dataset.i, t=T[i], prop=S.props[i];
    const old=d.querySelector('.houses'); if(old) old.remove();
    const dot=d.querySelector('.owner-dot'); if(dot) dot.remove();
    d.classList.toggle('mortgaged',!!prop.mortgaged);
    if(prop.owner!==null && prop.owner!==undefined){
      const o=document.createElement('div');o.className='owner-dot';
      o.style.background=PCOL[prop.owner];d.appendChild(o);
    }
    if(prop.level>0){
      const h=document.createElement('div');h.className='houses';
      const n=prop.level===5?1:prop.level;
      for(let k=0;k<n;k++){const e=document.createElement('div');e.className='house'+(prop.level===5?' hotel':'');h.appendChild(e)}
      d.appendChild(h);
    } else if(['prop','rail','util'].includes(t.type) && prop.owner!==null && prop.owner!==undefined){
      const h=document.createElement('div');h.className='houses';
      const e=document.createElement('div');e.className='house';e.style.background=PCOL[prop.owner];e.style.borderColor='#0008';e.title='owned';h.appendChild(e);d.appendChild(h);
    }
  });
  renderTokens();
}
function renderTokens(){
  document.querySelectorAll('.tile .tokens').forEach(e=>e.innerHTML='');
  S.players.forEach(p=>{
    if(p.bankrupt) return;
    const tile=document.querySelector(`.tile[data-i="${p.pos}"] .tokens`);
    if(!tile) return;
    const s=document.createElement('span');s.className='tok';s.textContent=TOKENS[p.id];
    s.style.filter=`drop-shadow(0 0 2px ${PCOL[p.id]}) drop-shadow(0 1px 1px #0008)`;
    tile.appendChild(s);
  });
}
function renderPlayers(){
  $('#players').innerHTML=S.players.map(p=>{
    const n=activePlayers().filter(o=>o.props().length).length;
    return `<div class="p-row ${p.id===S.current?'active':''} ${p.bankrupt?'bankrupt':''}">
      <span class="tk">${TOKENS[p.id]}</span>
      <span class="info"><span class="nm">${p.name}${p.type==='ai'?' <span class="cpu">(CPU'+botBrainLabel(p)+')</span>':''}</span>
      <span class="meta">${posName(p.pos)}${p.jailed?' · in jail':''} · ${p.props().length} properties${p.cards.cc+p.cards.chance?' · '+JAILFREE(p)+' out':''}</span></span>
      <span class="cash">${p.bankrupt?'—':money(p.cash)}</span></div>`;
  }).join('');
}
function JAILFREE(p){return p.cards.cc+p.cards.chance}
function renderControls(hint){
  $('#centerTurn').textContent=S.players[S.current].name+"'s turn";
  if(hint!==undefined) $('#hint').textContent=hint;
}
function setMsg(s){const e=$('#centerMsg');if(e)e.textContent=s}
function showDice(a,b,mode){
  const d=$('#dice');if(!d)return;
  const faces=['⚀','⚁','⚂','⚃','⚄','⚅'];
  const cls=mode==='rolling'?'rolling':mode==='reveal'?'revealed':'';
  d.innerHTML=`<span class="${cls}">${faces[(a||1)-1]}</span><span class="${cls}">${faces[(b||1)-1]}</span>`;
  const info=$('#diceInfo');
  if(info) info.textContent = mode==='rolling' ? 'Rolling…' : (a&&b ? `${a} + ${b} = ${a+b}` : '');
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

/* ------------------------------------------------------------------
   AI brain — computer players can be driven by a language model.
   The model answers with a small JSON object; every decision falls back
   to the built-in strategy when no model is configured or the call fails.
------------------------------------------------------------------ */
const AI_MODELS=[
  {id:'local',label:'Built-in strategy (no API)'},
  {id:'mixed',label:'Mixed — one model per bot'},
  {id:'z-ai/glm-5.3-flash',label:'GLM 5.3 Flash'},
  {id:'deepseek/deepseek-v4.1-flash',label:'DeepSeek V4.1 Flash'},
  {id:'community/scriptsnsenses-sys/gpt-6-luna:free',label:'GPT-6 Luna (free)'}
];
/* The models a bot can be assigned when the player picks "Mixed". */
const AI_LLM_MODELS=[
  'z-ai/glm-5.3-flash',
  'deepseek/deepseek-v4.1-flash',
  'community/scriptsnsenses-sys/gpt-6-luna:free'
];
/* One hosted provider runs a privacy filter that refuses any prompt
   mentioning another player — even "one other player has $900". Bots running
   on it play without sight of the opposition, and without style text that
   talks about opponents either. */
const NO_RIVALS_MODELS=new Set(['community/scriptsnsenses-sys/gpt-6-luna:free']);
function rivalsAllowed(model){return !NO_RIVALS_MODELS.has(model)}
const AI_STYLES=[
  {key:'aggressive',text:'You are an aggressive monopolist. You buy almost anything that blocks a colour set, you build aggressively, and you never pass up a bargain.'},
  {key:'cautious',text:'You are a cautious banker. You keep a fat cash reserve, you only buy when the numbers clearly work, and you build slowly.'},
  {key:'collector',text:'You are a devoted collector. You buy to complete colour sets and snap up railroads, and you hate leaving a monopoly unfinished.'},
  {key:'opportunist',text:'You are an opportunist. You pounce on cheap property, hoard cash for the right deal, and you trade when it pays.'},
  {key:'saboteur',text:'You are a saboteur. Your first priority is to block the best properties on the board.'}
];
const AI_SETTINGS_KEY='monopoly.ai.settings';
function aiModelLabel(id){
  const m=AI_MODELS.find(x=>x.id===id);
  return m?m.label:'Built-in strategy';
}/* What a given bot is thinking with, as shown next to its name. */
function botBrainLabel(p){
  if(!p||p.type!=='ai')return '';
  const id=p.botModel||(S&&S.aiModel)||'local';
  if(id==='local'||id==='mixed')return '';
  return ' · '+aiModelLabel(id);
}
function loadAiSettings(){
  try{return JSON.parse(localStorage.getItem(AI_SETTINGS_KEY))||{}}catch(e){return {}}
}
function saveAiSettings(s){
  try{localStorage.setItem(AI_SETTINGS_KEY,JSON.stringify(s))}catch(e){}
}
function aiConfig(p){
  const model=(p&&p.botModel)||(S&&S.aiModel?S.aiModel:'local');
  if(model==='local'||model==='mixed'||(S&&S.aiProxyDead))return null;
  const key=((S&&S.aiKey)||'').trim();
  return {model,key,endpoint:key?'https://gen.pollinations.ai/v1/chat/completions':'/api/ai'};
}
function parseJsonLoose(text){
  if(typeof text!=='string')return null;
  let s=text
    .replace(/<think>[\s\S]*?<\/think>/gi,'')
    .replace(/<think>[\s\S]*$/i,'')
    .replace(/```json|```/gi,'')
    .trim();
  const a=s.indexOf('{'),b=s.lastIndexOf('}');
  if(a>-1&&b>a)s=s.slice(a,b+1);
  try{return JSON.parse(s)}catch(e){}
  try{return JSON.parse(s.replace(/,\s*([}\]])/g,'$1'))}catch(e){return null}
}
async function llmRaw(p,system,prompt,maxTokens=4000,timeoutMs=40000,temperature=0.2){
  const cfg=aiConfig(p);
  if(!cfg)return {text:'',err:'no model'};
  const headers={'Content-Type':'application/json'};
  if(cfg.key)headers.Authorization='Bearer '+cfg.key;
  const ctrl=new AbortController();
  const timer=setTimeout(()=>ctrl.abort(),timeoutMs);
  let status=0;
  try{
    const messages=[{role:'system',content:system},{role:'user',content:prompt}];
    /* Asking for no visible reasoning is what keeps the small hosted models
       from writing a page of notes before they answer. */
    const body={model:cfg.model,messages,max_tokens:maxTokens,temperature,reasoning_effort:'none'};
    let res=await fetch(cfg.endpoint,{method:'POST',headers,body:JSON.stringify(body),signal:ctrl.signal});
    status=res.status;
    if(!res.ok){
      const detail=await res.text().catch(()=>'');
      if(/reasoning_effort/i.test(detail)){
        /* the provider does not know that field — ask again without it */
        delete body.reasoning_effort;
        res=await fetch(cfg.endpoint,{method:'POST',headers,body:JSON.stringify(body),signal:ctrl.signal});
        status=res.status;
      }
    }
    if(!res.ok){
      const detail=await res.text().catch(()=>'');
      if(/content_blocked|safety filter|refused/i.test(detail))throw new Error('the provider refused this prompt');
      throw new Error('HTTP '+res.status);
    }
    const data=await res.json();
    const text=(data&&data.content)||(data&&data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content)||'';
    return {text:typeof text==='string'?text:'',err:null};
  }catch(err){
    const aborted=err&&err.name==='AbortError';
    const why=aborted?'timed out':(err&&err.message)||'failed';
    if(!cfg.key&&status===404){
      S.aiProxyDead=true;S.aiModel='local';
      if(S.players)S.players.forEach(pl=>{if(pl.type==='ai')pl.botModel='local'});
      log('This deployment has no AI proxy — bots are using the built-in strategy. Paste a Pollinations key in "New game" to switch them to a language model.');
      return {text:'',err:'no proxy'};
    }
    return {text:'',err:why};
  }finally{clearTimeout(timer)}
}
function cleanWhy(s){
  if(typeof s!=='string')return '';
  const t=s.replace(/\s+/g,' ').trim();
  if(t.length<=110)return t;
  const cut=t.slice(0,110);
  const at=cut.lastIndexOf(' ');
  return (at>60?cut.slice(0,at):cut)+'…';
}
/* Some models answer in plain prose instead of JSON. Read the closing lines of
   the answer and pick the decision out of them. */
const BUY_GROUPS=[
  {key:false,words:['decline','do not buy','don\'t buy','won\'t buy','will not buy','not buy','no purchase','skip','auction','keep your cash','hold off','let it go','pass on','reject','avoid','no,']},
  {key:true,words:['buy','purchase','acquire','yes','take it','snap up']}
];
const BUILD_GROUPS=[
  {key:false,words:['do not build','don\'t build','won\'t build','not build','no house','no hotel','skip building','instead of building','keep your cash','hold off','wait','decline','not yet','save up']},
  {key:true,words:['build','house','hotel','construct','develop']}
];
const JAIL_GROUPS=[
  {key:'card',words:['get out of jail','jail free card','use my card','use the card','card']},
  {key:'pay',words:['pay','fifty','$50','fee']},
  {key:'roll',words:['roll','doubles','dice','chance']}
];
function proseDecision(text,kind){
  if(typeof text!=='string')return null;
  const body=text.replace(/<think>[\s\S]*?<\/think>/gi,'').replace(/<think>[\s\S]*$/i,'').trim();
  if(!body)return null;
  const sentences=body.split(/[\n.!?]+/).map(s=>s.trim()).filter(s=>s.length>1);
  if(!sentences.length)return null;
  const tail=sentences.slice(-4);
  const lastHit=(groups)=>{
    for(let i=tail.length-1;i>=0;i--){
      const s=tail[i].toLowerCase();
      for(const g of groups){
        if(g.words.some(w=>s.includes(w)))return g.key;
      }
    }
    return null;
  };
  // The reason is the fullest closing line that is not the decision itself:
  // "Neither scarcity nor cash concerns apply — buy it" should read as the
  // first half, not the trailing "buy it".
  const whyFor=(groups)=>{
    const triggers=new Set(groups.flatMap(g=>g.words));
    const reasons=tail.filter(s=>{
      const l=s.toLowerCase();
      return ![...triggers].some(w=>l.includes(w));
    });
    const best=(reasons.length?reasons:tail).slice().sort((a,b)=>b.length-a.length)[0]||'';
    return cleanWhy(best);
  };
  if(kind==='buy'){
    const hit=lastHit(BUY_GROUPS);
    return hit===null?null:{buy:hit,why:whyFor(BUY_GROUPS),text:body};
  }
  if(kind==='build'){
    const hit=lastHit(BUILD_GROUPS);
    return hit===null?null:{build:hit,property:'',why:whyFor(BUILD_GROUPS),text:body};
  }
  if(kind==='jail'){
    const hit=lastHit(JAIL_GROUPS);
    if(hit==='card'&&/no card|without a card|don'?t use/.test(body))return null;
    return hit===null?null:{action:hit,why:whyFor(JAIL_GROUPS),text:body};
  }
  if(kind==='bid'){
    // the number we want is the one in the closing lines, not the one quoted earlier
    const scan=s=>[...s.matchAll(/\$\s?([\d,]+)/g)].map(m=>Number(m[1].replace(/,/g,''))).filter(n=>Number.isFinite(n));
    let amounts=scan(tail.slice(-2).join(' '));
    if(!amounts.length)amounts=scan(body);
    if(!amounts.length)return null;
    // the reason is the closing line that actually explains the number
    const reasons=tail.filter(s=>/[a-z]/i.test(s)&&!scan(s).length);
    const best=(reasons.length?reasons:tail).slice().sort((a,b)=>b.length-a.length)[0]||'';
    return {maxBid:amounts[amounts.length-1],why:cleanWhy(best),text:body};
  }
  return null;
}
async function llmDecision(p,kind,system,prompt,alt,maxTokens=4000){
  /* Pull the decision out of a reply: JSON if the model gave us any, and the
     closing sentences if it answered in prose instead. */
  const read=(t)=>{
    if(!t)return null;
    let o=parseJsonLoose(t);
    if(!o||typeof o!=='object')o=proseDecision(t,kind);
    return (o&&typeof o==='object')?o:null;
  };
  let r=await llmRaw(p,system,prompt,maxTokens,40000);
  let text=r.text,err=r.err;
  let obj=read(text);
  /* A model that thinks out loud can spend the whole answer on its own
     reasoning and never reach the decision, and some hosts refuse the full
     prompt outright. Either way, ask again with the plain version. */
  if(!obj&&alt){
    await sleep(600);
    const r2=await llmRaw(p,alt.system,alt.prompt,maxTokens,25000);
    const obj2=read(r2.text);
    if(obj2){obj=obj2;text=r2.text;err=r2.err;}
    else if(!text){text=r2.text;err=r2.err;}
  }
  if(!obj){
    if(!text)log(`AI unavailable (${err||'failed'}) — using the built-in strategy.`);
    else log('AI gave an unusable answer — using the built-in strategy.');
    return null;
  }
  const whyOf=()=>cleanWhy(obj.why||obj.reason||obj.explanation||obj.rationale||obj.note||'');
  if(kind==='buy'){
    let buy=obj.buy;
    if(typeof buy!=='boolean'&&typeof obj.purchase==='boolean')buy=obj.purchase;
    if(typeof buy!=='boolean'){
      const v=String(obj.decision||obj.action||obj.choice||obj.answer||'').toLowerCase().trim();
      if(['buy','purchase','acquire','yes','take it','take the property'].includes(v))buy=true;
      else if(['decline','pass','skip','no','reject','let it go','auction'].includes(v))buy=false;
    }
    if(typeof buy!=='boolean')return null;
    return {buy,why:whyOf(),text};
  }
  if(kind==='build'){
    let build=obj.build;
    if(build==='true')build=true;
    if(build==='false')build=false;
    if(typeof build!=='boolean'){
      const v=String(obj.decision||obj.action||obj.choice||'').toLowerCase().trim();
      if(['build','yes','construct','develop','put up a house'].includes(v))build=true;
      else if(['skip','no','wait','hold','save','do not build',"don't build"].includes(v))build=false;
    }
    if(typeof build!=='boolean')return null;
    return {build,property:String(obj.property||obj.target||obj.name||obj.boardNumber||obj.board_number||obj.number||'').trim(),why:whyOf(),text};
  }
  if(kind==='jail'){
    const a=String(obj.action||obj.choice||obj.decision||'').toLowerCase().trim();
    if(!['card','pay','roll'].includes(a))return null;
    return {action:a,why:cleanWhy(obj.why||obj.reason||''),text};
  }
  if(kind==='bid'){
    const raw=obj.maxBid!==undefined?obj.maxBid:(obj.bid!==undefined?obj.bid:(obj.amount!==undefined?obj.amount:obj.price));
    const n=Number(raw);
    if(!Number.isFinite(n))return null;
    return {maxBid:Math.max(0,Math.floor(n)),why:whyOf(),text};
  }
  return null;
}
/* Opponents are described by seat letter rather than by their token names:
   some hosted models refuse prompts that name the other players. */
function seatLabel(i){return 'Player '+String.fromCharCode(65+i)}
/* The board spaces are named after real streets, and some hosted models run a
   privacy filter that refuses any prompt containing one of those names.
   Bots are therefore told which colour group a property belongs to and its
   board number instead — the same information, minus the street names. */
const GROUP_LABEL={brown:'brown',lightblue:'light blue',pink:'pink',orange:'orange',red:'red',yellow:'yellow',green:'green',blue:'dark blue'};
function groupLabel(g){return GROUP_LABEL[g]||g||'other'}
/* How a property is described to a bot. */
function propTag(i){return '#'+i}
function propLabel(i){
  const t=T[i];
  if(!t)return 'a board space';
  if(t.type==='prop')return propTag(i)+' ('+groupLabel(t.group)+' group)';
  if(t.type==='rail')return 'a railroad';
  if(t.type==='util')return 'a utility';
  if(t.type==='go')return 'the start';
  return 'a board space';
}
/* Find which property the bot meant: the board number it quoted, the colour
   group it named, or — if it echoed the street name anyway — the name itself. */
function matchProp(answer,options){
  const s=String(answer||'').trim();
  if(!s||!options.length)return null;
  const low=s.toLowerCase();
  const tagged=low.match(/#\s*(\d{1,2})/);
  if(tagged&&options.includes(Number(tagged[1])))return Number(tagged[1]);
  const bare=s.replace('#','').trim();
  if(/^\d{1,2}$/.test(bare)&&options.includes(Number(bare)))return Number(bare);
  const byGroup=options.filter(i=>low.includes(groupLabel(T[i].group)));
  if(byGroup.length===1)return byGroup[0];
  const byName=options.find(i=>low.includes(T[i].name.toLowerCase()));
  if(byName!==undefined)return byName;
  return null;
}
/* `rivals` is off for decisions that do not depend on the other players —
   a shorter prompt answers faster and dodges the models that refuse to be
   asked about named opponents. */
/* Owned spaces, grouped by colour. A bot cares far more about "I own the
   orange group" than about the board number of each one — and a short board
   is answered far faster by the smaller models. */
function ownSummary(p){
  const groups={};
  p.props().forEach(i=>{
    const g=T[i].group||'other';
    (groups[g]=groups[g]||[]).push(i);
  });
  const keys=Object.keys(groups);
  if(!keys.length)return 'nothing';
  return keys.map(g=>{
    const built=groups[g].filter(i=>S.props[i].level>0).length;
    return groupLabel(g)+' group ×'+groups[g].length+(built?' ('+built+' built)':'');
  }).join(', ');
}
function rivalSummary(p){
  return activePlayers().filter(o=>o!==p).map(o=>{
    const groups=[...new Set(o.props().map(i=>T[i].group))].map(groupLabel);
    return seatLabel(o.id)+' '+money(o.cash)+(groups.length?' ('+groups.join(', ')+')':'');
  }).join('; ');
}
function aiStateSummary(p,withRivals=true){
  const lines=[
    `Cash: ${money(p.cash)}`,
    `You own: ${ownSummary(p)}`,
    `You are on: ${propLabel(p.pos)}`
  ];
  if(withRivals&&rivalsAllowed(p.botModel||(S&&S.aiModel))){
    const r=rivalSummary(p);
    if(r)lines.push(`Rivals: ${r}`);
  }
  return lines.join('\n');
}
/* The smaller hosted models answer fastest when the question carries the
   shape of the answer and the system prompt stays out of the way. */
function aiSystem(p){return `${p.aiStyle.text}\nYou are a Monopoly bot. Output only a JSON object. No explanation.`}
const WHY_FIELD='"why":"ten words or fewer"';
function thinking(p){
  setMsg(`${p.name} is thinking…`);
  panelHTML(`<div class="panel-title thinking">${p.name} is thinking…</div><div class="panel-msg">${aiModelLabel(p.botModel||S.aiModel)} is reading the board. This can take a few seconds.</div>`);
}
function thinkingDone(){panelIdle('Resolving the move…')}
async function aiBuyDecision(p,i,localBuy){
  const t=T[i],price=t.price;
  if(!aiConfig(p))return {buy:localBuy(),why:''};
  thinking(p);
  const system=aiSystem(p);
  const d=await llmDecision(
    p,
    'buy',
    system,
    `Unowned: ${propLabel(i)} — ${money(price)}.\n${aiStateSummary(p)}\nBuy it for ${money(price)}, or decline and let it go to auction?\nJSON: {"buy":true or false,${WHY_FIELD}}`,
    {system,prompt:`Unowned ${propLabel(i)}, price ${money(price)}. You have ${money(p.cash)}.\nBuy it? JSON: {"buy":true or false,${WHY_FIELD}}`}
  );
  thinkingDone();
  if(!d||typeof d.buy!=='boolean')return {buy:localBuy(),why:''};
  return {buy:d.buy,why:String(d.why||'').trim().slice(0,110)};
}
function aiSay(p,why){
  if(why)log(`${p.name}: ${why}`);
}
async function aiBuildDecision(p){
  const options=p.props().filter(i=>canBuild(p,i)&&p.cash>=T[i].house);
  if(!options.length)return null;
  if(!aiConfig(p))return null;
  thinking(p);
  const system=aiSystem(p);
  const canList=options.map(i=>`${propLabel(i)} (house ${money(T[i].house)} → rent ${money(T[i].rents[1])})`).join('; ');
  const d=await llmDecision(
    p,
    'build',
    system,
    `Your turn is ending.\nYou can build on: ${canList}.\n${aiStateSummary(p,false)}\nBuild now?\nJSON: {"build":true or false,"property":"the board number of the property",${WHY_FIELD}}`,
    {system,prompt:`Your turn is ending. You can build on: ${canList}.\nBuild now? JSON: {"build":true or false,"property":"the board number of the property",${WHY_FIELD}}`}
  );
  thinkingDone();
  if(!d)return null;
  if(d.build!==true)return {action:'skip',why:String(d.why||'').trim().slice(0,110)};
  let pick=matchProp(d.property,options);
  if(pick===null&&d.text)pick=matchProp(d.text,options);
  /* Only one property can be built on, so the choice is made for it. */
  if(pick===null&&options.length===1)pick=options[0];
  if(pick===null)return null;
  return {action:'build',index:pick,why:String(d.why||'').trim().slice(0,110)};
}
async function aiJailDecision(p){
  const local=()=>{
    const useCard=p.cards.cc+p.cards.chance>0&&p.jailTurns<2;
    const pay=!useCard&&(p.jailTurns>=2||p.cash>200);
    return {action:useCard?'card':pay?'pay':'roll'};
  };
  if(!aiConfig(p))return local();
  thinking(p);
  const system=aiSystem(p);
  const d=await llmDecision(
    p,
    'jail',
    system,
    `You are in jail (attempt ${p.jailTurns+1} of 3).\n${aiStateSummary(p,false)}\nCards held: ${p.cards.cc+p.cards.chance}. Pay $50 to leave now, or roll for doubles (free, but you stay in jail without doubles).\nChoose "card", "pay" or "roll".\nJSON: {"action":"card" or "pay" or "roll",${WHY_FIELD}}`,
    {system,prompt:`You are in jail (attempt ${p.jailTurns+1} of 3). Cards held: ${p.cards.cc+p.cards.chance}. Cash: ${money(p.cash)}.\nPay $50 to leave now, or roll for doubles (free, but you stay in jail without doubles).\nChoose "card", "pay" or "roll". JSON: {"action":"card" or "pay" or "roll",${WHY_FIELD}}`}
  );
  thinkingDone();
  const action=d&&['card','pay','roll'].includes(String(d.action))?String(d.action):null;
  if(!action)return local();
  if(action==='card'&&p.cards.cc+p.cards.chance===0)return local();
  if(action==='pay'&&p.cash<50)return local();
  return {action,why:String(d.why||'').trim().slice(0,110)};
}
async function aiBidCap(p,t,i,key){
  if(!aiConfig(p))return null;
  if(!S.bidCaps)S.bidCaps={};
  if(S.bidCaps[key]!==undefined)return S.bidCaps[key];
  thinking(p);
  const system=aiSystem(p);
  const d=await llmDecision(
    p,
    'bid',
    system,
    `Auction: ${propLabel(i)}, worth about ${money(t.price)}.\n${aiStateSummary(p)}\nMax bid in dollars?\nJSON: {"maxBid":number,${WHY_FIELD}}`,
    {system,prompt:`${propLabel(i)} is being auctioned, worth about ${money(t.price)}. You have ${money(p.cash)}.\nMax bid in dollars? JSON: {"maxBid":number,${WHY_FIELD}}`}
  );
  thinkingDone();
  const n=d&&Number(d.maxBid);
  const cap=Number.isFinite(n)?Math.max(0,Math.min(Math.floor(n),p.cash)):null;
  S.bidCaps[key]=cap;
  return cap;
}

/* ------------------------------------------------------------------
   Chat turns — the second kind of turn. Between the game turns the bots
   talk the board over: each speaker is shown the state of the game, what
   just happened and what the other bots have already said, and answers
   with a single line of table talk.
------------------------------------------------------------------ */
const CHAT_LINES=[
  'This board is slow going.',
  'Somebody at this table is about to lose it.',
  'I can smell a monopoly forming.',
  'Mind that cash pile.',
  'Nice move — genuinely.',
  'This is turning into a bloodbath.',
  'Rents are about to hurt somebody.',
  'Do not pass GO just yet.',
  'I am watching all of you.',
  'Trust nobody at this table.',
  'Someone will pay for this.',
  'The money always runs out.'
];
/* The colour group a player has all of, if any. */
function monopolyGroup(o){
  const groups=[...new Set(o.props().map(i=>T[i].group))].filter(Boolean);
  for(const g of groups){
    const all=[];
    T.forEach((t,i)=>{if(t.group===g)all.push(i)});
    if(all.length&&all.every(i=>S.props[i].owner===o.id))return g;
  }
  return null;
}
/* A bot with no language model still has something to say. */
function cannedLine(){
  const lines=CHAT_LINES.slice();
  const owner=S.players.find(o=>!o.bankrupt&&monopolyGroup(o));
  if(owner)lines.push(`${owner.name} has a monopoly and knows it.`);
  const broke=S.players.filter(o=>!o.bankrupt).sort((a,b)=>a.cash-b.cash)[0];
  if(broke&&broke.cash<200)lines.push(`${broke.name} is running on empty.`);
  return lines[Math.floor(Math.random()*lines.length)];
}
/* Street names become board numbers and colour groups; player names become
   seat letters for the one model that refuses to be asked about named
   opponents. */
function sanitiseLine(line,keepNames){
  let out=String(line==null?'':line);
  T.forEach((t,i)=>{
    if(!t.name||!['prop','rail','util'].includes(t.type))return;
    if(out.includes(t.name))out=out.split(t.name).join(propLabel(i));
  });
  if(!keepNames)S.players.forEach(p=>{
    if(!p.name||p.name==='You'||!out.includes(p.name))return;
    out=out.split(p.name).join(seatLabel(p.id));
  });
  return out;
}
/* The last few things that happened, cleaned up for the model. */
function gameEvents(keepNames){
  const raw=S.log.filter(l=>!l.chat).slice(-4).map(l=>l.msg);
  if(!raw.length)return '';
  return raw.map(l=>sanitiseLine(l,keepNames)).join('\n');
}
function escapeRegExp(s){return String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
/* The model may answer with JSON, with prose, or with a line in quotes —
   take whatever it gave us and tidy it into one short line. */
function extractSay(text,p){
  if(typeof text!=='string')return '';
  let s=text
    .replace(/<think>[\s\S]*?<\/think>/gi,'')
    .replace(/<think>[\s\S]*$/i,'')
    .replace(/```json|```/gi,'')
    .trim();
  if(!s)return '';
  const o=parseJsonLoose(s);
  if(o&&typeof o==='object'){
    const cand=o.say||o.line||o.message||o.text||o.talk||o.comment;
    if(typeof cand==='string'&&cand.trim())s=cand;
  }
  s=String(s).trim();
  if(p&&p.name)s=s.replace(new RegExp('^'+escapeRegExp(p.name)+'\\s*:\\s*','i'),'');
  s=s.replace(/^Player\s+[A-H]\s*:\s*/i,'');
  s=s.replace(/^(bot|ai|answer|reply|say|line|message|comment)\s*:\s*/i,'');
  s=s.replace(/^[“”"'`]+/,'').replace(/[“”"'`]+$/,'').trim();
  s=(s.split('\n').find(x=>x.trim())||'').replace(/\s+/g,' ').trim();
  if(!s)return '';
  if(s.length>220)s=s.slice(0,220).trim()+'…';
  return s;
}
async function aiChatLine(p,said,opts){
  opts=opts||{};
  if(!aiConfig(p))return cannedLine();
  const keepNames=rivalsAllowed(p.botModel||(S&&S.aiModel)||'local');
  const system=`${p.aiStyle.text}\nYou are one of the Monopoly players sitting at a table with the others. Say ONE line of table talk (under 25 words) about the game as it stands, in your style. React to what just happened. Reply with JSON only: {"say":"your line"}`;
  const state=aiStateSummary(p,keepNames);
  const events=gameEvents(keepNames);
  /* The seat letters the state block uses are spelled out for the models
     that are allowed to know who is sitting where. */
  const names=keepNames
    ? 'Who is sitting where: '+activePlayers().map(o=>`${seatLabel(o.id)} is ${o.name}`).join(', ')+'.\n'
    : '';
  const convo=said.length
    ? 'Already said at the table:\n'+said.map(s=>keepNames?`${s.name}: ${s.text}`:`${seatLabel(s.id)}: ${s.text}`).join('\n')+'\n'
    : '';
  const earlier=S.log.filter(l=>l.chat).slice(-3).map(l=>sanitiseLine(l.msg.replace(/^💬\s*/,''),keepNames)).join('\n');
  const head=opts.ambient?'Table talk while the game is still going.':'Table talk after play.';
  const prompt=`${head}\n${state}\n${names}${events?'What just happened:\n'+events+'\n':''}${earlier?'Earlier at the table:\n'+earlier+'\n':''}${convo}Say your line now. JSON: {"say":"one short line"}`;
  const alt=`${opts.ambient?'Chatter at the table while the game goes on.':'Table talk between turns.'}\n${state}\nSay one short line (under 25 words) about the game. JSON: {"say":"your line"}`;
  /* The small hosted models think out loud before they answer, so they need
     room for the thinking as well as for the line itself. */
  const r=await llmRaw(p,system,prompt,4000,25000,0.85);
  const line=extractSay(r.text,p);
  if(line)return line;
  const r2=await llmRaw(p,system,alt,4000,20000,0.85);
  return extractSay(r2.text,p)||cannedLine();
}
/* The bots take the table in seat order: once the last one has had their
   say, the talk goes back round to the first. */
function chatBots(){return S.players.filter(p=>p.type==='ai'&&!p.bankrupt)}
function nextChatSpeaker(){
  const bots=chatBots();
  if(!bots.length)return null;
  const i=S.chatRotation%bots.length;
  S.chatRotation=(i+1)%bots.length;
  return bots[i];
}
/* One bot says one line of table talk. */
async function speakChat(p,said,opts){
  opts=opts||{};
  if(!p)return '';
  const line=await aiChatLine(p,said||[],opts);
  if(!line||!S)return '';
  log(`💬 ${p.name}: ${line}`,false,true);
  const brief=line.length>90?line.slice(0,90)+'…':line;
  setMsg(`💬 ${p.name}: ${brief}`);
  /* The action panel belongs to the player while a decision is waiting, so
     table talk goes to the log and the message line instead. */
  if(opts.panel&&!S.promptPending){
    panelHTML(`<div class="panel-title">Table talk</div><div class="panel-msg"><b>${esc(p.name)}</b>: ${esc(line)}</div>`);
  }
  return line;
}
/* The chat turn: a few bots weigh in, one after the other, and the game
   waits for them. */
async function runChatTurn(){
  if(!S||S.gameover||S.chatRunning)return;
  const bots=chatBots();
  if(!bots.length)return;
  const cap=S.chatMode==='turn'?2:3;
  S.chatRunning=true;
  S.chatPhase=true;
  S.chatPending=false;
  $('#centerTurn').textContent='Table talk';
  setMsg('The table is talking…');
  const said=[];
  try{
    for(let k=0;k<cap;k++){
      if(!S||S.gameover)break;
      const p=nextChatSpeaker();
      if(!p)break;
      const line=await speakChat(p,said,{panel:true});
      if(line)said.push({id:p.id,name:p.name,text:line});
      await sleep(900);
    }
  }finally{
    S.chatPhase=false;
    S.chatRunning=false;
  }
  if(S&&!S.gameover&&!S.promptPending)panelIdle('The table settles. Play continues.');
}
/* The table never stops talking: in "always" mode the bots keep chatting
   through the game — including while you are deciding your move. */
async function chatAutoLoop(){
  while(S&&!S.gameover&&S.chatMode==='always'){
    await sleep(3200+Math.random()*3800);
    if(!S||S.gameover)break;
    if(S.chatRunning)continue;
    const p=nextChatSpeaker();
    if(!p)break;
    S.chatRunning=true;
    try{await speakChat(p,[],{ambient:true,panel:false})}finally{S.chatRunning=false}
  }
}
/* The player can ask for a line of table talk at any time, even on their
   own turn. */
async function manualChat(){
  if(!S||S.gameover||S.chatRunning)return;
  const p=nextChatSpeaker();
  if(!p){panelIdle('There is nobody left to talk.');return}
  S.chatRunning=true;
  try{await speakChat(p,[],{ambient:true,panel:!S.promptPending})}finally{S.chatRunning=false}
}
/* Is a chat turn due? After every turn, or once the round is complete. */
function chatDue(){
  if(!S||S.chatMode==='off')return false;
  if(S.chatMode==='always')return false;   /* the table talks on its own clock instead */
  if(!chatBots().length)return false;
  if(S.chatMode==='turn')return true;
  return !!S.chatPending;
}
/* Called when a player has finished their game turn. */
function endTurn(){
  S.turnJustEnded=true;
  if(S.chatMode!=='round')return;
  S.roundSeen++;
  if(S.roundSeen>=S.roundSize){
    S.roundSeen=0;
    S.chatPending=true;
    S.roundSize=Math.max(1,activePlayers().length);
  }
}

function setup(){
  const saved=loadAiSettings();
  const modelOpts=AI_MODELS.map(m=>`<option value="${m.id}" ${m.id===saved.model?'selected':''}>${m.label}</option>`).join('');
  const chatOpts=[['off','Off'],['round','After each round'],['turn','After every turn'],['always','Always — even on your turn']]
    .map(([v,l])=>`<option value="${v}" ${v===(saved.chatMode||'round')?'selected':''}>${l}</option>`).join('');
  $('#setup').innerHTML=`<h2>New game</h2><p>The classic 1935 Atlantic City board: 40 spaces, 22 streets, 4 railways, 2 utilities. Free Parking pays nothing. Income Tax is $200 or 10% of your worth. Pause any time with the button at the top right.</p>
  <div class="opts"><label>Players <select id="numPlayers"><option>2</option><option>3</option><option selected>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></label>
  <label>Human players <select id="numHumans"><option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></label>
  <label>Bot brains <select id="aiModel">${modelOpts}</select></label>
  <label>Chat turns <select id="chatMode">${chatOpts}</select></label>
  <label>Pollinations key <input id="aiKey" type="password" placeholder="Optional — use the server key" value="${saved.key||''}" autocomplete="off"></label></div>
  <p style="font-size:11px;line-height:1.4;color:#5b6a55">Bots need a language model to think with. Leave the key blank on the Vercel build and the server's own key is used; on GitHub Pages, paste your Pollinations key so the browser can call the API directly.</p>
  <p style="font-size:11px;line-height:1.4;color:#5b6a55">Chat turns are the second kind of turn: between the game turns the bots talk the board over, one line each, reacting to the position, what just happened and what the other bots said. Pick “Always” and the table never stops talking — the bots keep chatting through the game, even while you are deciding your move — and the 💬 Table talk button asks for a line whenever you fancy one.</p>
  <button class="primary" id="startBtn">Start game</button>`;
  $('#startBtn').onclick=()=>{
    const n=+$('#numPlayers').value, h=Math.min(n,+$('#numHumans').value);
    const model=$('#aiModel').value, key=$('#aiKey').value.trim(), chatMode=$('#chatMode').value;
    saveAiSettings({model,key,chatMode});
    newGame(n,h,model,key,chatMode);
  };
}
function newGame(n,h,model,key,chatMode){
  S={players:[],props:Array.from({length:40},()=>({owner:null,level:0,mortgaged:false})),current:0,log:[],gameover:false,paused:false,
     chance:shuffle([...CHANCE.keys()]),chest:shuffle([...CHEST.keys()]),
     aiModel:model||'local',aiKey:key||'',aiProxyDead:false,
     chatMode:chatMode||'off',chatPending:false,chatRotation:0,chatPhase:false,
     chatRunning:false,promptPending:false,
     roundSeen:0,roundSize:n,turnJustEnded:false};
  const names=['You','Mr. Monopoly','The Top Hat','The Shoe','The Car','The Dog','The Iron','The Ship'];
  for(let i=0;i<n;i++){
    const p={
      id:i,name:i<h?`Player ${i+1}`:names[i%names.length],type:i<h?'human':'ai',token:TOKENS[i],
      cash:1500,pos:0,jailed:false,jailTurns:0,cards:{cc:0,chance:0},bankrupt:false,
      aiStyle:AI_STYLES[(i-h)%AI_STYLES.length],
      botModel:model==='mixed'?AI_LLM_MODELS[(i-h)%AI_LLM_MODELS.length]:(model&&model!=='local'?model:null),
      props(){return Object.keys(S.props).map(Number).filter(k=>S.props[k].owner===this.id)}
    };
    S.players.push(p);
  }
  $('#setup').style.display='none';
  ['#gameCards','#playersCard','#logCard'].forEach(s=>$(s).style.display='block');
  buildBoard();renderBoard();renderPlayers();renderControls('Waiting for roll');
  $('#pauseBtn').style.display='inline-block';
  initPause();
  $('#talkBtn').style.display='inline-block';
  initTalk();
  log('Game started — '+n+' players, '+h+' human.',true);
  if(S.aiModel==='mixed')log('Bots are thinking with a mix of models: '+AI_LLM_MODELS.map(aiModelLabel).join(', ')+'.',true);
  else if(S.aiModel!=='local')log('Bots are thinking with '+aiModelLabel(S.aiModel)+'.',true);
  if(S.chatMode==='round')log('The table talks over each round.',true);
  else if(S.chatMode==='turn')log('The table talks after every turn.',true);
  else if(S.chatMode==='always')log('The table never stops talking — even while you are deciding your move.',true);
  setMsg('Let the games begin!');
  setTimeout(playTurn,600);
  /* In "always" mode the bots talk through the game on their own clock —
     they do not wait for a turn to end, and they never hold the game up. */
  if(S.chatMode==='always')chatAutoLoop();
}
async function nextPlayer(){
  if(!S||S.gameover)return;
  if(S.paused){setTimeout(nextPlayer,250);return}
  /* A chat turn sits between the game turns — the bots talk, then play on. */
  if(S.turnJustEnded){
    S.turnJustEnded=false;
    if(chatDue()){
      await runChatTurn();
      if(!S||S.gameover)return;
    }
  }
  advancePlayer();
}
function advancePlayer(){
  if(!S||S.gameover)return;
  let i=S.current;
  do{i=(i+1)%S.players.length}while(S.players[i].bankrupt&&i!==S.current);
  S.current=i;renderPlayers();renderControls(`${S.players[i].name}'s turn — roll when ready`);
  setTimeout(playTurn,500);
}

let panelSeq=0;
function panelHTML(html){
  panelSeq++;
  const el=$('#panel');if(!el)return;
  el.innerHTML=html;el.classList.add('show');
}
function panelIdle(text){
  panelHTML(`<div class="panel-idle">${text||'Waiting for the next action…'}</div>`);
}
function ask({title,msg,buttons,idle}){
  return new Promise(resolve=>{
    /* While a decision is waiting the action panel belongs to the player —
       table talk must not paint over it. */
    if(S)S.promptPending=true;
    panelHTML(`<div class="panel-title">${title}</div><div class="panel-msg">${msg}</div><div class="btns">${buttons.map((b,i)=>`<button class="${b.cls||''}" data-i="${i}" ${b.disabled?'disabled':''}>${b.label}</button>`).join('')}</div>`);
    const seq=panelSeq;
    const el=$('#panel');
    el.querySelectorAll('button[data-i]').forEach(btn=>btn.onclick=()=>{
      if(seq!==panelSeq)return;
      const v=buttons[+btn.dataset.i].value;
      panelIdle(idle||'Resolving the move…');
      if(S)S.promptPending=false;
      resolve(v);
    });
  });
}
async function message(title,msg){
  panelHTML(`<div class="panel-title">${title}</div><div class="panel-msg">${msg}</div>`);
  const seq=panelSeq;
  setMsg(title);
  log(`${title}: ${msg}`);
  await sleep(S && S.players[S.current].type==='human' ? 1500 : 750);
  if(seq===panelSeq) panelIdle('Read the log for details.');
}
async function rollAnimated(p){
  const a=1+Math.floor(Math.random()*6),b=1+Math.floor(Math.random()*6);
  const frames=p.type==='human'?11:7;
  for(let i=0;i<frames;i++){
    showDice(1+Math.floor(Math.random()*6),1+Math.floor(Math.random()*6),'rolling');
    await sleep(75);
  }
  showDice(a,b,'reveal');diceTotal=a+b;
  setMsg(`${p.name} rolled ${a} + ${b} = ${diceTotal}`);
  panelIdle(`${p.name} rolled ${a} + ${b} = ${diceTotal}`);
  await sleep(p.type==='human'?2800:1300);
  return [a,b];
}
async function rollFor(p){
  if(p.type==='human') await ask({title:`${p.name} — roll the dice`,msg:'Click to roll. Doubles earn another roll; three doubles in a row sends you straight to Jail.',buttons:[{label:'🎲 Roll dice',value:'roll',cls:'primary'}],idle:'Rolling the dice…'});
  else await sleep(500);
  return rollAnimated(p);
}
async function moveSteps(p,steps){
  for(let k=0;k<steps;k++){
    if(p.pos===39){p.cash+=200;log(`${p.name} passes GO and collects $200.`,true);}
    p.pos=(p.pos+1)%40;renderTokens();renderPlayers();
    if(k<steps-1) await sleep(115);
  }
  renderPlayers();
}
async function goto(p,dest,collect=true){
  if(collect&&dest<p.pos){p.cash+=200;log(`${p.name} passes GO and collects $200.`,true)}
  p.pos=dest;renderTokens();renderPlayers();await sleep(220);
}
function ownsGroup(p,g){return T.every((t,i)=>t.group!==g||(S.props[i]&&S.props[i].owner===p.id))}
function railCount(p){return [5,15,25,35].filter(i=>S.props[i].owner===p.id).length}
function utilCount(p){return [12,28].filter(i=>S.props[i].owner===p.id).length}
function rentDue(i,payer){
  const t=T[i],pr=S.props[i],owner=S.players[pr.owner];
  if(pr.mortgaged||!owner||owner===payer)return 0;
  if(t.type==='rail')return [0,25,50,100,200][railCount(owner)];
  if(t.type==='util')return diceTotal*(utilCount(owner)===2?10:4);
  let r=t.rents[pr.level];
  if(pr.level===0&&ownsGroup(owner,t.group))r*=2;
  return r;
}
function boardValue(p){return p.props().reduce((s,i)=>s+T[i].price+S.props[i].level*T[i].house,0)}

async function raiseCash(p,need){
  while(p.cash<need&&!p.bankrupt){
    const opts=[];
    p.props().forEach(i=>{
      const pr=S.props[i];
      if(pr.level>0)opts.push({label:`Sell a house on ${T[i].name} (+${money(saleValue(i))})`,value:{k:'sell',i}});
      else if(!pr.mortgaged)opts.push({label:`Mortgage ${T[i].name} (+${money(Math.floor(T[i].price/2))})`,value:{k:'mort',i}});
    });
    if(!opts.length)return false;
    let choice;
    if(p.type==='human') choice=await ask({title:'You need '+money(need-p.cash)+' more',msg:'Raise cash by selling houses or mortgaging property, otherwise you go bankrupt.',buttons:[...opts.map(o=>({label:o.label,value:o.value})),{label:'I cannot pay — declare bankruptcy',value:{k:'bank'},cls:'danger'}]});
    else choice=opts[0].value;
    if(choice.k==='bank')return false;
    if(choice.k==='sell'){
      const pr=S.props[choice.i];pr.level--;p.cash+=saleValue(choice.i);
      log(`${p.name} sells a house on ${T[choice.i].name}.`);
    } else {
      const pr=S.props[choice.i];pr.mortgaged=true;p.cash+=Math.floor(T[choice.i].price/2);
      log(`${p.name} mortgages ${T[choice.i].name}.`);
    }
    renderBoard();renderPlayers();
  }
  return p.cash>=need;
}
async function charge(p,amount,creditor,reason){
  if(amount<=0)return true;
  if(p.cash<amount){
    const ok=await raiseCash(p,amount);
    if(!ok){declareBankrupt(p,creditor||null);return false}
  }
  p.cash-=amount;
  if(creditor)creditor.cash+=amount;
  log(`${p.name} pays ${money(amount)} ${reason}${creditor?' to '+creditor.name:''}.`);
  renderPlayers();return true;
}
function declareBankrupt(p,creditor){
  p.bankrupt=true;p.cash=0;
  /* A player who drops out no longer takes a turn in this round. */
  if(S){S.roundSize=Math.max(1,S.roundSize-1);S.roundSeen=Math.min(S.roundSeen,S.roundSize)}
  p.props().forEach(i=>{
    const pr=S.props[i];
    if(creditor){pr.owner=creditor.id;creditor.cards.cc+=p.cards.cc;creditor.cards.chance+=p.cards.chance}
    else {pr.owner=null;pr.level=0;pr.mortgaged=false}
  });
  p.cards={cc:0,chance:0};
  log(`${p.name} is bankrupt!`,true);
  renderBoard();renderPlayers();
  const left=activePlayers();
  if(left.length===1){
    S.gameover=true;
    const w=left[0];
    $('#pauseBtn').style.display='none';
    panelHTML(`<div class="panel-title">Game over</div><div class="panel-msg">${w.name} wins with ${money(w.cash)} in cash and ${w.props().length} properties.</div><div class="btns"><button class="primary" onclick="location.reload()">Play again</button></div>`);
    setMsg(`${w.name} wins!`);
    log(`${w.name} wins the game!`,true);
  }
}
async function offerBuy(p,i){
  const t=T[i],price=t.price;
  let buy;
  if(p.type==='human') buy=(await ask({title:'Unowned property',msg:`${t.name} is for sale at ${money(price)}. Your cash: ${money(p.cash)}. If you decline it goes to auction.`,buttons:[
    {label:`Buy for ${money(price)}`,value:true,cls:'primary'},{label:'Auction it',value:false}]}))===true;
  else{
    const d=await aiBuyDecision(p,i,()=>p.cash>=price+Math.min(180,price*.25)&&(p.props().length<3||Math.random()<.72));
    buy=d.buy;
    aiSay(p,d.why);
  }
  if(buy){
    if(p.cash<price){const ok=await raiseCash(p,price);if(!ok){declareBankrupt(p,null);return}}
    p.cash-=price;S.props[i].owner=p.id;
    log(`${p.name} buys ${t.name} for ${money(price)}.`,true);
    renderBoard();renderPlayers();
  } else await auction(p,i);
}
async function auction(starter,i){
  const t=T[i];
  log(`${t.name} goes to auction.`);
  let high=0,winner=null;
  const order=S.players.map((_,k)=>(S.current+k)%S.players.length).filter(id=>!S.players[id].bankrupt);
  let active=order.slice();
  let round=0;
  while(active.length>1&&round<20){
    round++;
    for(const id of [...active]){
      const p=S.players[id];
      if(p.bankrupt){active=active.filter(x=>x!==id);continue}
      const min=high+10;
      let bid;
      if(p.type==='human') bid=await ask({title:'Auction — '+t.name,msg:`Current bid: ${money(high)} by ${winner?winner.name:'no one'}. Your cash: ${money(p.cash)}.`,buttons:[
        {label:`Bid ${money(min)}`,value:min,cls:'primary',disabled:min>p.cash},{label:'Pass',value:0}]});
      else {
        const localCap=Math.min(p.cash,Math.floor(t.price*(t.group?1.25:1.1)));
        const llmCap=await aiBidCap(p,t,i,`${p.id}:${i}`);
        const cap=llmCap===null?localCap:Math.min(llmCap,p.cash,Math.floor(t.price*2));
        bid=min<=cap&&Math.random()<.75?min:0;
      }
      if(bid>high){high=bid;winner=p}else{active=active.filter(x=>x!==id)}
    }
  }
  if(winner&&high>0){
    winner.cash-=high;S.props[i].owner=winner.id;
    log(`${winner.name} wins ${t.name} at auction for ${money(high)}.`,true);
    renderBoard();renderPlayers();
  } else log(`Nobody bid on ${t.name}.`);
}
async function land(p){
  const i=p.pos,t=T[i],pr=S.props[i];
  setMsg(`${p.name} lands on ${t.name}`);
  if(t.type==='go'||t.type==='free'||t.type==='jail')return;
  if(t.type==='gtj'){goToJail(p);return}
  if(['prop','rail','util'].includes(t.type)){
    if(pr.owner===null){
      if(p.type==='human') await offerBuy(p,i);
      else {
        const price=t.price;
        const d=await aiBuyDecision(p,i,()=>p.cash>=price+80&&(railCount(p)<4||utilCount(p)<2||Math.random()<.6));
        if(d.buy&&p.cash>=price){
          p.cash-=price;pr.owner=p.id;
          log(`${p.name} buys ${t.name} for ${money(price)}.`,true);
          aiSay(p,d.why);
          renderBoard();renderPlayers();
        } else {
          aiSay(p,d.why);
          await auction(p,i);
        }
      }
    } else if(pr.owner!==p.id){
      const r=rentDue(i,p);
      const owner=S.players[pr.owner];
      setMsg(`${p.name} owes ${money(r)} rent to ${owner.name}`);
      await sleep(350);
      await charge(p,r,owner,`rent on ${t.name}`);
    } else setMsg(`${p.name} owns ${t.name}`);
    return;
  }
  if(t.type==='tax'){
    let amt=75;
    if(i===4){
      const worth=p.cash+boardValue(p);
      if(p.type==='human'){
        const c=await ask({title:'Income Tax',msg:`Your total worth is ${money(worth)}. Pay $200 flat or 10% (${money(Math.ceil(worth*.1))}).`,buttons:[
          {label:'Pay $200',value:200,cls:'primary'},{label:`Pay 10% — ${money(Math.ceil(worth*.1))}`,value:Math.ceil(worth*.1)}]});
        amt=c;
      } else amt=Math.min(200,Math.ceil(worth*.1));
    }
    await charge(p,amt,null,i===4?'income tax':'luxury tax');
    return;
  }
  if(t.type==='chance'||t.type==='chest'){
    const deck=t.type==='chance'?S.chance:S.chest;
    const cards=t.type==='chance'?CHANCE:CHEST;
    const id=deck.shift();deck.push(id);
    const card=cards[id];
    log(`${p.name} draws ${t.type==='chance'?'Chance':'Community Chest'}: ${card.t}`,true);
    await message(t.type==='chance'?'Chance':'Community Chest',card.t);
    await applyCard(p,card,t.type);
  }
}
async function applyCard(p,card,deck){
  switch(card.a){
    case 'goto': await goto(p,card.to,true); await land(p); break;
    case 'nearrail': {
      const dest=[5,15,25,35].find(i=>i>p.pos)??5;
      await goto(p,dest,true);
      const pr=S.props[dest];
      if(pr.owner===null) await offerBuy(p,dest);
      else if(pr.owner!==p.id) await charge(p,rentDue(dest,p)*2,S.players[pr.owner],'double railroad rent');
      break;
    }
    case 'nearutil': {
      const dest=[12,28].find(i=>i>p.pos)??12;
      await goto(p,dest,true);
      const pr=S.props[dest];
      if(pr.owner===null) await offerBuy(p,dest);
      else if(pr.owner!==p.id) await charge(p,diceTotal*10,S.players[pr.owner],'utility rent');
      break;
    }
    case 'back3': {const dest=Math.max(0,p.pos-3);await goto(p,dest,false);await land(p);break}
    case 'jail': goToJail(p);break;
    case 'jailcard': p.cards[deck==='chest'?'cc':'chance']++;renderPlayers();break;
    case 'repairs': {
      let amt=0;
      p.props().forEach(i=>{const l=S.props[i].level;if(l===5)amt+=card.hot;else amt+=l*card.h});
      if(amt) await charge(p,amt,null,'property repairs');
      break;
    }
    case 'paybank': await charge(p,card.v,null,'a fine');break;
    case 'get': p.cash+=card.v;log(`${p.name} collects ${money(card.v)}.`);renderPlayers();break;
    case 'payeach': for(const o of activePlayers())if(o!==p){if(!await charge(p,card.v,o,'to '+o.name))break}break;
    case 'geteach': for(const o of activePlayers())if(o!==p){await charge(o,card.v,p,'to '+p.name)}break;
  }
}
function goToJail(p){
  p.pos=10;p.jailed=true;p.jailTurns=0;renderTokens();renderPlayers();
  log(`${p.name} goes to jail. Do not pass GO. Do not collect $200.`,true);
  setMsg(`${p.name} is in jail`);
}
function useJailCard(p){
  const deck=p.cards.cc>0?'cc':'chance';
  p.cards[deck]--;
  (deck==='cc'?S.chest:S.chance).push(deck==='cc'?CHEST.findIndex(c=>c.a==='jailcard'):CHANCE.findIndex(c=>c.a==='jailcard'));
  p.jailed=false;renderPlayers();
  log(`${p.name} uses a Get Out of Jail Free card.`);
}
async function handleJail(p){
  let pay=false,useCard=false;
  if(p.type==='human'){
    const has=p.cards.cc+p.cards.chance>0;
    const buttons=[];
    if(has)buttons.push({label:'Use Get Out of Jail Free',value:'card',cls:'primary'});
    buttons.push({label:'Pay $50 and roll',value:'pay',cls:has?'':'primary'},{label:'Roll for doubles',value:'roll'});
    const c=await ask({title:`${p.name} is in jail`,msg:`Turn ${p.jailTurns+1} of 3. Pay $50, roll for doubles, or use a card.`,buttons});
    pay=c==='pay';useCard=c==='card';
  } else {
    const d=await aiJailDecision(p);
    useCard=d.action==='card';
    pay=d.action==='pay';
    aiSay(p,d.why);
  }
  if(useCard)useJailCard(p);
  if(p.jailed&&pay){
    if(await charge(p,50,null,'a $50 jail fee')){
      p.jailed=false;renderPlayers();log(`${p.name} pays $50 to leave jail.`);
    }
  }
  if(!p.jailed&&!p.bankrupt){
    const [a,b]=await rollFor(p);
    diceTotal=a+b;showDice(a,b);
    await moveSteps(p,a+b);
    return true;
  }
  const [a,b]=await rollFor(p);
  diceTotal=a+b;showDice(a,b);
  if(a===b){p.jailed=false;p.jailTurns=0;log(`${p.name} rolls doubles and leaves jail!`,true);await moveSteps(p,a+b);return true}
  p.jailTurns++;
  log(`${p.name} fails to roll doubles (${p.jailTurns}/3).`);
  if(p.jailTurns>=3&&!p.bankrupt){
    if(await charge(p,50,null,'a jail fine')){
      p.jailed=false;p.jailTurns=0;
      log(`${p.name} pays $50 after three turns in jail.`);
      await moveSteps(p,a+b);
      return true;
    }
  }
  return false;
}
async function manage(p){
  if(p.type==='human') await manageModal(p);
  else await aiBuild(p);
}
function canBuild(p,i){
  const t=T[i],pr=S.props[i];
  if(t.type!=='prop'||pr.owner!==p.id||pr.mortgaged||pr.level>=5)return false;
  if(!ownsGroup(p,t.group))return false;
  const min=Math.min(...T.map((x,j)=>x.group===t.group&&S.props[j].owner===p.id?S.props[j].level:99));
  return pr.level<=min;
}
async function aiBuild(p){
  if(aiConfig(p)){
    const d=await aiBuildDecision(p);
    if(d&&d.action==='build'){
      const i=d.index,pr=S.props[i],cost=T[i].house;
      p.cash-=cost;pr.level++;
      log(`${p.name} builds ${pr.level===5?'a hotel on':'a house on'} ${T[i].name}.`,true);
      aiSay(p,d.why);
      renderBoard();renderPlayers();
      return;
    }
    if(d){if(d.why)aiSay(p,d.why);return}
    // the model could not be reached — fall through to the built-in strategy
  }
  let guard=0;
  while(guard++<20){
    const options=p.props().filter(i=>canBuild(p,i)&&p.cash>=T[i].house+250);
    if(!options.length)break;
    options.sort((a,b)=>T[b].rents[1]-T[a].rents[1]);
    const i=options[0],pr=S.props[i];
    if(Math.random()>.78)break;
    p.cash-=T[i].house;pr.level++;log(`${p.name} builds ${pr.level===5?'a hotel on':'a house on'} ${T[i].name}.`);renderBoard();renderPlayers();
  }
}
function manageModal(p){
  return new Promise(resolve=>{
    const el=$('#panel');
    const draw=()=>{
      const owned=p.props();
      const buildOpts=owned.filter(i=>canBuild(p,i));
      const sellOpts=owned.filter(i=>S.props[i].level>0);
      const mortOpts=owned.filter(i=>S.props[i].level===0&&!S.props[i].mortgaged);
      const unmortOpts=owned.filter(i=>S.props[i].mortgaged&&p.cash>=Math.ceil(T[i].price/2*1.1));
      const opt=(list)=>list.length?list.map(i=>`<option value="${i}">${T[i].name}</option>`).join(''):'<option value="">— none available —</option>';
      el.classList.add('show');
      el.innerHTML=`<div class="panel-title">${p.name} — manage your turn</div>
      <div class="panel-msg">Cash: <b>${money(p.cash)}</b> · Properties: ${owned.length}</div>
      <div class="grid2">
      <label>Build a house or hotel<select id="buildSel">${opt(buildOpts)}</select></label>
      <label>Sell a house<select id="sellSel">${opt(sellOpts)}</select></label>
      <label>Mortgage a property<select id="mortSel">${opt(mortOpts)}</select></label>
      <label>Unmortgage a property<select id="unmortSel">${opt(unmortOpts)}</select></label>
      </div>
      <div class="btns">
      <button data-a="build" ${buildOpts.length?'':'disabled'}>Build (${buildOpts.length?money(T[buildOpts[0]].house):'—'})</button>
      <button data-a="sell" ${sellOpts.length?'':'disabled'}>Sell house</button>
      <button data-a="mort" ${mortOpts.length?'':'disabled'}>Mortgage</button>
      <button data-a="unmort" ${unmortOpts.length?'':'disabled'}>Unmortgage</button>
      <button data-a="trade">Trade…</button>
      <button class="primary" data-a="done">End turn ✔</button>
      </div>`;
      el.querySelectorAll('button[data-a]').forEach(b=>b.onclick=async()=>{
        const a=b.dataset.a;
        const val=id=>+(el.querySelector(id)||{}).value||0;
        if(a==='build'){const i=val('#buildSel');if(i){const c=T[i].house;if(p.cash>=c){p.cash-=c;S.props[i].level++;log(`${p.name} builds on ${T[i].name}.`);renderBoard();renderPlayers()}}}
        if(a==='sell'){const i=val('#sellSel');if(i){S.props[i].level--;p.cash+=saleValue(i);log(`${p.name} sells a house on ${T[i].name}.`);renderBoard();renderPlayers()}}
        if(a==='mort'){const i=val('#mortSel');if(i){S.props[i].mortgaged=true;p.cash+=Math.floor(T[i].price/2);log(`${p.name} mortgages ${T[i].name}.`);renderBoard();renderPlayers()}}
        if(a==='unmort'){const i=val('#unmortSel');if(i){const c=Math.ceil(T[i].price/2*1.1);if(p.cash>=c){p.cash-=c;S.props[i].mortgaged=false;log(`${p.name} unmortgages ${T[i].name}.`);renderBoard();renderPlayers()}}}
        if(a==='trade'){await tradeModal(p)}
        if(a==='done'){panelIdle('Turn complete. Roll when ready.');log(`${p.name} ends their turn.`,true);resolve();return}
        draw();
      });
    };
    draw();
  });
}
function tradeModal(p){
  return new Promise(resolve=>{
    const el=$('#panel');
    const others=activePlayers().filter(o=>o!==p);
    const draw=()=>{
      if(!others.length){panelIdle('No other active players to trade with.');resolve();return}
      const props=i=>i.props().map(k=>`<option value="${k}">${T[k].name}${S.props[k].level?' ('+S.props[k].level+' houses)':''}</option>`).join('');
      const who=+(el.querySelector('#who')?.value??others[0].id);
      const other=S.players[who]||others[0];
      el.classList.add('show');
      el.innerHTML=`<div class="panel-title">Propose a trade</div>
      <div class="panel-msg">Offer ${other.name} a deal. They will accept if it is fair to them.</div>
      <div class="grid2">
      <label>Trade with<select id="who">${others.map(o=>`<option value="${o.id}" ${o===other?'selected':''}>${o.name}</option>`).join('')}</select></label>
      <label></label>
      <label>You give property<select id="giveProp"><option value="">— none —</option>${props(p)}</select></label>
      <label>You give cash<input id="giveCash" type="number" min="0" max="${p.cash}" value="0"></label>
      <label>You receive property<select id="getProp"><option value="">— none —</option>${props(other)}</select></label>
      <label>You receive cash<input id="getCash" type="number" min="0" max="${other.cash}" value="0"></label>
      </div><div class="btns"><button data-a="send" class="primary">Send offer</button><button data-a="cancel">Cancel</button></div>`;
      el.querySelectorAll('button[data-a]').forEach(b=>b.onclick=async()=>{
        if(b.dataset.a==='cancel'){panelIdle('Trade cancelled.');resolve();return}
        const giveP=+(el.querySelector('#giveProp').value||0), getP=+(el.querySelector('#getProp').value||0);
        const giveC=Math.max(0,Math.min(p.cash,+(el.querySelector('#giveCash').value||0)));
        const getC=Math.max(0,Math.min(other.cash,+(el.querySelector('#getCash').value||0)));
        const v=(i)=>i?T[i].price+S.props[i].level*T[i].house:0;
        const giveVal=v(giveP)+giveC, getVal=v(getP)+getC;
        let accepted=true;
        if(other.type==='ai') accepted=getVal>=giveVal*.92 && other.cash>=getC && p.cash>=giveC;
        else accepted=await ask({title:`Trade from ${p.name}`,msg:`Offers ${giveP?T[giveP].name:'nothing'} + ${money(giveC)} for ${getP?T[getP].name:'nothing'} + ${money(getC)}. Accept?`,buttons:[{label:'Accept',value:true,cls:'primary'},{label:'Decline',value:false}]});
        if(accepted){
          if(giveP)S.props[giveP].owner=other.id;
          if(getP)S.props[getP].owner=p.id;
          p.cash+=getC-giveC;other.cash+=giveC-getC;
          log(`${p.name} and ${other.name} complete a trade.`,true);
          renderBoard();renderPlayers();
          await message('Trade accepted',`${other.name} accepted your trade.`);
        } else {log(`${other.name} declines ${p.name}'s trade.`);await message('Trade declined',`${other.name} declined the trade.`)}
        panelIdle('Back to your turn.');
        resolve();
      });
      el.querySelector('#who').onchange=draw;
    };
    draw();
  });
}
async function playTurn(){
  if(!S||S.gameover)return;
  if(S.paused) await new Promise(r=>resumeWaiters.push(r));
  if(S.gameover)return;
  const p=S.players[S.current];
  if(p.bankrupt){nextPlayer();return}
  renderPlayers();renderControls();setMsg(`${p.name}'s turn`);
  if(p.jailed){
    const moved=await handleJail(p);
    if(!moved||S.gameover){if(!S.gameover)nextPlayer();return}
    await land(p);
    if(S.gameover||p.bankrupt){if(!S.gameover)nextPlayer();return}
    await manage(p);endTurn();nextPlayer();return;
  }
  let doubles=0;
  while(true){
    const [a,b]=await rollFor(p);
    if(a===b){doubles++;if(doubles===3){log(`${p.name} rolled three doubles — straight to jail!`,true);goToJail(p);break}}
    await moveSteps(p,a+b);
    await land(p);
    if(S.gameover||p.bankrupt)break;
    if(a===b&&doubles<3){log(`${p.name} rolls doubles — roll again!`);continue}
    break;
  }
  if(S.gameover)return;
  if(p.bankrupt){nextPlayer();return}
  await manage(p);
  endTurn();
  nextPlayer();
}
setup();
