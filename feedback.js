// Notifications de résultat : présentation uniquement.
export function createResultNotice(element,root,{schedule=setTimeout,cancel=clearTimeout}={}){
 let timer=null,open=false,consumeClick=false;
 function hide(){if(timer!==null)cancel(timer);timer=null;open=false;element.classList.remove('show');if(typeof element.hidePopover==='function')try{element.hidePopover()}catch{}}
 function show(message,kind='neutral'){
  hide();element.textContent=message;element.dataset.noticeKind=kind||'neutral';open=true;
  if(typeof element.showPopover==='function')try{element.showPopover()}catch{}
  element.classList.add('show');timer=schedule(hide,5000);
 }
 root.addEventListener('pointerdown',e=>{
  consumeClick=false;
  if(!open)return;
  hide();consumeClick=true;e.preventDefault();e.stopImmediatePropagation();
 },{capture:true});
 root.addEventListener('click',e=>{
  if(!open&&!consumeClick)return;
  hide();consumeClick=false;e.preventDefault();e.stopImmediatePropagation();
 },{capture:true});
 root.addEventListener('keydown',e=>{if(open&&e.key==='Escape'){hide();e.preventDefault();e.stopImmediatePropagation();}},{capture:true});
 return {show,hide};
}
