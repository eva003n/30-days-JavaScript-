const body=document.querySelector('body');
const heart = document.querySelector('span');

body.addEventListener('touchmove',(event)=>{
  const touch=event.touches[0];
  const xPos=touch.clientX;
  const yPos=touch.clientY;
  const spanEl=document.createElement('span')
  
  spanEl.style.left=xPos + 'px';
  spanEl.style.top=yPos + 'px';
  
  const size =Math.floor(Math.random()*(100+1));
  spanEl.style.width=size +'px'
    spanEl.style.height=size +'px'

  

  body.appendChild(spanEl)
  setTimeout(()=>{
    spanEl.remove()
  },4000)
  
})
