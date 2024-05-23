const btnEl1=document.querySelector('.btn1');
const btnEl2=document.querySelector('.btn2');
const btnEl3=document.querySelector('.btn3');
const cancelBtn=document.querySelector('.cancel')
let minutes2=document.querySelector('#minutes2');
let hrsTimer1=document.querySelector('#hours1');

const hrsTimer2=document.querySelector('#hours2');
let secTimer2=document.querySelector('#seconds2');
const hrsTimer3=document.querySelector('#hours3');

let resetSec;
let resetMin;
let resetHrs;

const scrollTxt =document.querySelector('.scrolltxt');
const startBtn =document.querySelector('#startBtn');

btnEl1.addEventListener('click',()=>{
  minutes2.textContent=20;
  secTimer2.textContent='00';
  startBtn.style.filter='brightness(100%)';
  hrsTimer2.textContent='00';
  clearInterval(resetMin);
  clearInterval(resetSec);
})

btnEl1.addEventListener('dblclick',()=>{
  btnEl1.style.border='none';
  btnEl1.style.background='#3A3B40';
  btnEl1.style.filter='brightness(78%)';
  minutes2.textContent=10;
    startBtn.style.filter='brightness(50%)';
})

btnEl2.addEventListener('click',()=>{
  minutes2.textContent=10;
  secTimer2.textContent='00';

  scrollTxt.style.animation='scroll 2s linear 1.5';
  startBtn.style.filter='brightness(100%)';
  clearInterval(resetMin);
  clearInterval(resetSec); 
 })

btnEl2.addEventListener('dblclick',()=>{
  btnEl2.style.border='none';
  btnEl2.style.background='#3A3B40';
  btnEl2.style.filter='brightness(78%)';
    startBtn.style.filter='brightness(50%)';
})

btnEl3.addEventListener('click', () => {
  minutes2.textContent=10;
    secTimer2.textContent='00';

  startBtn.style.filter='brightness(100%)';
    clearInterval(resetMin);
    clearInterval(resetSec);

})

btnEl3.addEventListener('dblclick', () => {
  btnEl3.style.border = 'none';
  btnEl3.style.background = '#3A3B40';
  btnEl3.style.filter ='brightness(78%)';
  startBtn.style.filter='brightness(50%)';
})
function  updateMin(){
    let min=Number(minutes2.textContent)
        if(min>0){

   secTimer2.textContent=59;
      min=min-1;
    }
    if(min<10){
     return minutes2.textContent='0'+min;
    }
   return minutes2.textContent=min;
 }
 
function updateSec() {
   let sec=Number(secTimer2.textContent);
  // let min=Number(minutes2.textContent)
   if(sec>0){
     
   if(sec<=10){
    // sec-=1;
     return secTimer2.textContent=`0${sec-1}`;
   }
   
   else{
  return secTimer2.textContent=sec-1;
   }
  }
}

hrsTimer2.addEventListener('touchmove',(e)=>{
      const touch=e.touches[0];
      let yPos=touch.clientY;
       let hours=Number(hrsTimer2.textContent);
       hrsTimer1.style.color='#5E5DF0'
    
       hrsTimer2.style.color='#5E5DF0'
       hrsTimer3.style.color='#5E5DF0'
    
      if((yPos<200) && (hours<100)){
        if(hours<9){
        hrsTimer2.textContent=`0${hours+=1}`
        hrsTimer1.textContent=`0${hours-1}:`
        
       hrsTimer3.textContent=`0${hours+1}:`
           } else{
        hrsTimer2.textContent=`${hours+=1}`
       hrsTimer1.textContent=`${hours-1}:`
       hrsTimer3.textContent=`${hours+1}:`
         }
     
      }
      if(hours>99){
        hrsTimer2.textContent='00'
        hrsTimer3.textContent='01'
      }
 
  })
  
hrsTimer2.addEventListener('touchend',()=>{
     hrsTimer2.style.color='white';
     hrsTimer1.style.color='white';
    hrsTimer3.style.color='white';
    hrsTimer1.style.transition='color 1s';
    hrsTimer2.style.transition='color 1s';
    hrsTimer3.style.transition='color 1s';
})
minutes2.addEventListener('touchmove',(e)=>{
 
  const touch=e.touches[0];
  const yPos=touch.clientY;
  const minutes1=document.querySelector('#minutes1');
  const minutes3=document.querySelector('#minutes3')
  if(yPos<200){
    let min=Number(minutes2.textContent);
    if(min<60){

      if(min<=9){
        minutes2.textContent=`0${min+=1}`;
       minutes1.textContent=`0${min-1}:`;
      minutes3.textContent=`0${min+1}:`;
      }
      else{
         minutes2.textContent=min+=1;
 
       minutes1.textContent=`${min-1}:`;
     minutes3.textContent=`${min+1}:`;
         }
      }

    }

      }
     
)
function updatehrs() {
  let hrs=Number(hrsTimer2.textContent);
  let seconds=Number(secTimer2.textContent)
  let min=Number(minutes2.textContent)
       if(hrs>0){
         if(min===0 && seconds===0){
                hrs=hrs-1;
          secTimer2.textContent='59'
           minutes2.textContent='59'

   if(hrs<10){
     return hrsTimer2.textContent='0'+hrs;
       }
  return hrsTimer2.textContent=hrs;
  
    }
  }
}
hrsTimer2.addEventListener('click',()=>{
  hrsTimer2.textContent='01';
  minutes2.textContent='01'
})

startBtn.addEventListener('click',()=>{
 let hrs=Number(hrsTimer2.textContent);
 let min=Number(minutes2.textContent);
 const sec=Number(secTimer2.textContent);
     startBtn.style.filter = 'brightness(120%)'
 
 if(hrs>=0){
   
  if(min<=0) {
    if(hrs>0){
   hrsTimer2.textContent=`0${hrs-1}`;
    }
  }
  if(min>0){
    if(min<=10){
   minutes2.textContent=`0${min-1}`;
    }else{
      minutes2.textContent=min-1;

    }
   secTimer2.textContent='59';
   }else{
   secTimer2.textContent='59';
   minutes2.textContent='59';
  }
  
    resetSec = setInterval(updateSec, 1000)
    resetMin = setInterval(updateMin, 60 * 1000);

  resetHrs=setInterval(updatehrs,60*1000);
  startBtn.disabled=true;
  startBtn.style.visibility='hidden';
  cancelBtn.style.visibility='visible';
 }

})
cancelBtn.addEventListener('click',()=>{
startBtn.disabled=false;
startBtn.style.visibility='visible'
hrsTimer2.textContent='00';
minutes2.textContent='00';
secTimer2.textContent='00';
  cancelBtn.style.visibility='hidden';

})





  







