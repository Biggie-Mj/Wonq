import {initial,apply,clone,validate} from './engine.js';
export const KEY='wonq-gardien-v1:'+location.pathname.replace(/index\.html$/,'');
let state=initial(),undo=[],blocked=false;const seen=new Set();
try{const raw=localStorage.getItem(KEY);if(raw){const x=JSON.parse(raw);validate(x.state);state=x.state;undo=Array.isArray(x.undo)?x.undo.slice(-30):[];undo.forEach(validate);}}catch(e){blocked=true;window.setTimeout(()=>window.dispatchEvent(new CustomEvent('storage-error',{detail:'Sauvegarde illisible : rien ne sera écrasé. Exportez les données brutes depuis Réglages, puis importez une sauvegarde valide.'})),0);}
export const get=()=>state;
function persist(next,history){if(blocked)throw Error('Sauvegarde protégée : importez une sauvegarde valide avant de jouer.');validate(next);localStorage.setItem(KEY,JSON.stringify({state:next,undo:history.slice(-30)}));state=next;undo=history.slice(-30);}
export function commit(event,id=crypto.randomUUID()){if(seen.has(id))return state;const next=apply(state,event);const personal=['note','categories','registerEntry'].includes(event.type);persist(next,personal?undo:[...undo,clone(state)]);seen.add(id);if(seen.size>300)seen.delete(seen.values().next().value);return state;}
export function undoLast(){if(!undo.length)throw Error('Aucune opération à annuler.');const next=clone(undo.at(-1));for(const k of ['notes','categories','registerEntries','settings'])next[k]=clone(state[k]);persist(next,undo.slice(0,-1));return state;}
export function exportState(){return JSON.stringify({app:'Wonq-Gardien',schema:1,exportedAt:new Date().toISOString(),state},null,2);}
export function parseImport(raw){if(raw.length>15000000)throw Error('Fichier trop volumineux.');const x=JSON.parse(raw);if(x.app!=='Wonq-Gardien'||x.schema!==1)throw Error('Ce fichier n’est pas une sauvegarde Wonq compatible.');validate(x.state);return x.state;}
export function replace(next){validate(next);localStorage.setItem(KEY+':previous',localStorage.getItem(KEY)||'');blocked=false;persist(clone(next),[]);seen.clear();}
export function restorePrevious(){const raw=localStorage.getItem(KEY+':previous');if(!raw)throw Error('Aucune sauvegarde précédente.');const x=JSON.parse(raw);validate(x.state);replace(x.state);}
export function rawState(){return localStorage.getItem(KEY)||'';}
