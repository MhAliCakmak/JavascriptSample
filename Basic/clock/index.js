
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

let  form=document.getElementById('form');
let list=document.getElementById('list');

form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    console.log("event happened")
    let score=document.getElementById('score').value;
    let email=document.getElementById('email').value;
    console.log(email)
    localStorage.setItem('email',email);
    localStorage.setItem('score',score);
    if(email && score)
    {
        addItem(email,score);
        form.reset();
    }else{
        warning();
    }


})
{/* <div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div> */}

const addItem=(email,score)=>
{
    let li=document.createElement('li');
    li.innerHTML=` 
    ${email}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `;
    li.className= `list-group-item text-dark d-flex justify-content-between align-items-center`
   
   
    list.appendChild(li);
}

const warning=()=>
{
    let div=document.createElement('div');
    div.className=`alert alert-warning alert-dismissible fade show`;
    div.innerHTML=` <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    
    list.appendChild(div);
}