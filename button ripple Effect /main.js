const btn=document.querySelector('.btn');

btn.addEventListener('touchmove',(e)=>{
const touch =e.touches[0] ;
const x=touch.clientX;
const y=touch.clientY;

btn.style.setProperty('--x',x +'px');
btn.style.setProperty('--y',y +'px');


//btn.style.setproperty('--x',x+'px');
//btn.style.setproperty('--y',y+'px');


  })