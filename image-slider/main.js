let nextBtn=document.querySelector('#next');
let prevBtn=document.querySelector('#prev');
let carouselItem=document.querySelector('.carousel')
let carouselList=document.querySelector('.carousel .list');

let carouselThumbnails=document.querySelector('.carousel .thumbnails');
let runTimeout;
let autorun;



nextBtn.onclick=function (){
  nextImage('nextPic')
}

function nextImage(type) {
let itemSlider=document.querySelectorAll('.carousel .list .item');
 
 let thumbnailsItem=document.querySelectorAll('.carousel .thumbnails .item')
   if(type=='nextPic'){

carouselList.appendChild(itemSlider[0]);
carouselThumbnails.appendChild(thumbnailsItem[0])
carouselItem.classList.add('next')

}

}
clearTimeout(runTimeout)

runTimeout=setTimeout(()=>{
  carouselItem.classList.remove('next');
 carouselItem.classList.remove('prev');

},3000)

prevBtn.addEventListener('click',()=>{
  const itemSlider=document.querySelectorAll('.carousel .list .item')
  let lastItem=itemSlider.length-1;
  
  carouselList.prepend(itemSlider[lastItem]);

  thumbnailsItem.prepend(itemSlider[lastItem])
   carouselItem.classList.add('prev');

})
// autorun = setInterval(() => {
//   nextBtn.click();
// }, 7000)




 


