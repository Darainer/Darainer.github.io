(()=>{
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const nav=document.querySelector('.nav'),progress=document.querySelector('.reading-progress span'),scope=document.querySelector('.scope');
 const scene=document.querySelector('.fly-scene'),stages=[...document.querySelectorAll('.fly-stage')],nodes=[...document.querySelectorAll('[data-node]')];
 const count=document.querySelector('.wheel-count'),name=document.querySelector('.wheel-name');
 const labels=['Acquire & curate','Label & check','Train & validate','Release & learn'];
 let frame=0,active=-1;
 const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
 function update(){
  frame=0;
  const y=window.scrollY||0,total=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.transform='scaleX('+(total>0?clamp(y/total,0,1):0)+')';
  nav.classList.toggle('scrolled',y>20);
  document.documentElement.style.setProperty('--nav-offset',Math.ceil(nav.getBoundingClientRect().height+24)+'px');
  scope.style.transform=(!reduce.matches&&window.innerWidth>750)?'translateY('+clamp(y*.06,0,22)+'px)':'';
  const rects=stages.map(e=>e.getBoundingClientRect());
  const line=window.innerHeight*.55;
  let next=0;rects.forEach((r,i)=>{if(r.top<line)next=i});
  if(next!==active){active=next;count.textContent=String(next+1).padStart(2,'0');name.textContent=labels[next];nodes.forEach((n,i)=>{if(i===next)n.setAttribute('aria-current','step');else n.removeAttribute('aria-current')});stages.forEach((e,i)=>e.classList.toggle('is-active',i===next));}
  const first=rects[0],last=rects[rects.length-1],span=last.bottom-first.top;
  const phase=span>0?clamp((line-first.top)/span,0,1):0;
  scene.style.setProperty('--phase-progress',String(phase));
  scene.style.setProperty('--orbit-turn',reduce.matches?'0deg':(phase*300)+'deg');
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(update)}
 window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});
 reduce.addEventListener('change',()=>{if(reduce.matches)document.querySelectorAll('.reveal-pending').forEach(e=>e.classList.add('is-visible'));schedule()});
 if(!reduce.matches&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.07,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.sectiontop,.sensorstep,.feature>div,.inset,.engineeringgrid article,.buildgrid article,.testrow,.principles article,.bioinline').forEach((el,i)=>{el.style.setProperty('--reveal-delay',((i%3)*65)+'ms');el.classList.add('reveal-pending');observer.observe(el)});
  window.addEventListener('beforeprint',()=>document.querySelectorAll('.reveal-pending').forEach(e=>e.classList.add('is-visible')));
 }
 update();
})();