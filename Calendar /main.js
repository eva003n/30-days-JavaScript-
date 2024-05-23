const year=document.querySelector('#currentYear');
const month=document.querySelector('#currentMonth');
const day=document.querySelector('#currentDay');
const dateNo=document.querySelector('#currentDate');

const date=new Date ();
month.textContent=date.toLocaleString('en',{month:'long'})

day.textContent=date.toLocaleString('en',{weekday:'long'});

dateNo.textContent=date.getDate();

year.textContent=date.getFullYear();
