const imageContainer=document.querySelector('.image-container')
const btn=document.querySelector('button') 
const bodyEl =document.querySelector('body')
btn.addEventListener('click',()=>{
  const imageNo=15;
    let imgEl;

  for(let i=0;i<imageNo;i++){
  imgEl=document.createElement('img');
  imgEl.src=`https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`;
  
  imageContainer.appendChild(imgEl)
}
})