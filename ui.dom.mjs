import {JSDOM} from 'jsdom';import fs from 'node:fs';import assert from 'node:assert/strict';
const dom=new JSDOM(fs.readFileSync(new URL('../index.html',import.meta.url),'utf8'),{url:'https://example.test/Wonq/'}),w=dom.window;
for(const k of ['window','document','location','localStorage','FormData','CustomEvent','Event','AbortController'])Object.defineProperty(globalThis,k,{value:k==='window'?w:w[k],configurable:true});Object.defineProperty(globalThis,'navigator',{value:w.navigator,configurable:true});globalThis.scrollTo=()=>{};globalThis.matchMedia=()=>({matches:true});
w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;queueMicrotask(()=>this.dispatchEvent(new w.Event('close')))};
await import('../app.js');const {get,undoLast,replace,commit,exportState,parseImport}=await import('../storage.js');
const q=s=>document.querySelector(s),tick=()=>new Promise(r=>setImmediate(r));
function dismiss(){document.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));}
async function click(selector){dismiss();const el=q(selector);assert.ok(el,selector);el.click();await tick();}
async function submit(){q('#form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await tick();}
function set(name,value){const el=q(`[name="${name}"]`);assert.ok(el,name);el.value=value;}
await click('[data-do="nav"][data-view="combat"]');assert.match(q('#app').textContent,/Tour 1/);
await click('[data-do="attack"][data-id="staff1"]');set('manual','20');await submit();assert.ok(q('[data-do="confirmHit"]'));await click('[data-do="confirmHit"][data-hit="true"]');assert.equal(get().turn.action,true);assert.match(get().log.at(-1).text,/Critique/);console.log('PASS UI attaque, confirmation, critique et dépense');
await click('[data-do="undo"]');assert.equal(get().turn.action,false);
await click('[data-do="ability"][data-id="draw"]');await click('[data-do="close"]');assert.equal(get().resources.inspiration,5);console.log('PASS UI fermeture sans dépense');
await click('[data-do="ability"][data-id="draw"]');await submit();assert.equal(get().resources.inspiration,4);
await click('[data-do="cancelTurn"]');await submit();assert.equal(get().resources.inspiration,5);console.log('PASS UI annuler tour');
await click('[data-do="health"]');await click('[data-do="digit"][data-id="1"]');await click('[data-do="digit"][data-id="2"]');await submit();assert.equal(get().resources.hp,47);console.log('PASS UI pavé tactile dégâts');
await click('[data-do="nav"][data-view="social"]');assert.equal(document.querySelectorAll('[data-do="skill"]').length,18);
await click('[data-do="socialTab"][data-id="inventory"]');await click('[data-do="item"][data-id="staff"]');await click('[data-do="deleteItem"]');await submit();assert.ok(!get().items.some(i=>i.id==='staff'));await click('[data-do="undo"]');assert.ok(get().items.some(i=>i.id==='staff'));console.log('PASS UI inventaire suppression et restauration');
await click('[data-do="nav"][data-view="journal"]');await click('[data-do="newNote"]');set('title','Le chemin');set('body','Un nom dans la fumée.');q('[name="body"]').dispatchEvent(new w.Event('input',{bubbles:true}));assert.equal(get().notes.at(-1).body,'Un nom dans la fumée.');await click('[data-do="close"]');assert.match(q('#app').textContent,/Le chemin/);console.log('PASS UI journal autosauvegarde');
const raw=exportState(),saved=parseImport(raw);assert.equal(saved.notes.at(-1).title,'Le chemin');assert.equal(saved.resources.hp,47);const before=get().resources.hp;commit({type:'hp',kind:'damage',amount:1},'duplicate');commit({type:'hp',kind:'damage',amount:1},'duplicate');assert.equal(get().resources.hp,before-1);console.log('PASS stockage export/import et identifiant double toucher');
const data=JSON.parse(localStorage.getItem('wonq-gardien-v1:/Wonq/'));assert.equal(data.state.resources.hp,before-1);console.log('PASS sauvegarde persistée');
await click('[data-do="nav"][data-view="combat"]');await click('[data-do="tab"][data-id="spells"]');await click('[data-do="spell"][data-id="word"]');await submit();assert.equal(get().resources.slots[0],3);console.log('PASS UI lancement de sort et emplacement');
await click('[data-do="settings"]');set('profile','dossier');await submit();assert.equal(get().character.profile,'dossier');console.log('PASS UI choix de table des Contes');
dismiss();dom.window.close();
