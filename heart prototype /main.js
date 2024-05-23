const bodyEl=document.querySelector('body');
bodyEl.addEventListener('touchmove',(event)=>{
  
  const touch=event.touches[0];
  const xAxis=touch.clientX;
  const yAxis =touch.clientY;
  
  const spanEl=document.createElement('span');
  spanEl.style.left=xAxis + 'px';
  spanEl.style.top=yAxis + 'px';
  const heartSize =(Math.random()*(100+1));
  
    spanEl.style.width=heartSize + 'px';

  spanEl.style.height=heartSize + 'px';
  
  bodyEl.appendChild(spanEl);
  
  setTimeout(()=>{
    spanEl.remove();
  },4000)

  
  
  
  
  
})