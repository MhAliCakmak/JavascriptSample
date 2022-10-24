
let myname=document.getElementById('myName');




function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("myClock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
currentTime();

let increase=document.getElementById('increase');
let decrease=document.getElementById('decrease');
let reset=document.getElementById('reset');
let count=localStorage.getItem('counter');

let counter=localStorage.getItem('counter')?Number(localStorage.getItem('counter')):0;
document.getElementById('count').innerHTML=count;

increase.addEventListener('click',()=>{
    count++;
    document.getElementById('count').innerHTML=count;
    localStorage.setItem('counter',count);
})

decrease.addEventListener('click',()=>{
    count--;
    document.getElementById('count').innerHTML=count;
    localStorage.setItem('counter',count);
})

reset.addEventListener('click',()=>{
    count=0;
    document.getElementById('count').innerHTML=count;
    localStorage.setItem('counter',count);
})

let  email=document.getElementById('form');

email.addEventListener("submit",(event)=>
{
    event.preventDefault()
    console.log("event happened")
})