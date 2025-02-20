// We need to have a launching Date
// set diff between launching date and now
// have the day , min , hr ,sec for the launching

const launchingDate = new Date("2025-04-25T00:00:00");

const secSp = document.querySelector(".sec-sp");
const minSp = document.querySelector(".min-sp");
const hrSp = document.querySelector('.hr-sp')
const daySp = document.querySelector(".day-sp");


const calculateDate = ()=>{
  const  now = new Date();
  const diff = launchingDate - now;


  let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((diff % (1000 * 60)) / 1000);
  
  daySp.textContent = day;
  hrSp.textContent = hr ;
  minSp.textContent = min;
  secSp.textContent = sec; 
};

const intevral  = setInterval(calculateDate,1000);

calculateDate();  

