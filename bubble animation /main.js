const bodyEl=document.querySelector('body');

bodyEl.addEventListener('touchmove',(event)=>{
  const touch=event.touches[0];
  const xPos=touch.clientX;
  const yPos=touch.clientY;
  
  const spanEl=document.createElement('span');
  spanEl.style.left=xPos + 'px';
  spanEl.style.top=yPos + 'px';
  const bubbleSize=(Math.random()*(70 +1));
  spanEl.style.width=bubbleSize+'px';
 spanEl.style.height=bubbleSize+'px';
  bodyEl.appendChild(spanEl);
  setTimeout(()=>{
    spanEl.remove();
  },3000)
  
})

