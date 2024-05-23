const career=document.querySelector('span');
const careers=['Student','Webdeveloper','Software engineer','Game developer'];
let careerIndex=0;
  let charIndex=0;

update()
function update () {
      charIndex++;

career.textContent=careers[careerIndex].slice(0,charIndex);
   if(charIndex===careers[careerIndex].length){
    careerIndex++;
    charIndex=0;
    
      }
      if(careerIndex===careers.length){
        careerIndex=0;
      }
      
    setTimeout(update,400);

  
}


