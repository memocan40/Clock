const time=document.querySelector(".time");
const body=document.body;
const timerinput=document.getElementById("timerinput")
const timerbtn=document.getElementById("timerbtn")
const ring=document.querySelector(".ring");


function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


function timer(){
    let d=new Date();
    let h=addZero(d.getHours());
    let m=addZero(d.getMinutes());
    let s=addZero(d.getSeconds());
    time.innerHTML= h+":"+m+":"+s;
setInterval(() => {
    timer()
}, 1000);
    
}
timer();



function timing(){
  let x=timerinput.value+":00";
  let y=time.innerHTML;
  if(x==y){ring.innerHTML="Rrrrrringgg";
            ring.style.color="white";
          setTimeout(() => {
            ring.style.color="black";
          }, 3000);}

  setInterval(() => {
    timing()
  }, 1000);
  
  
}
timerbtn.addEventListener("click",()=>{
  ring.style.color="white";
  if(timerinput.value==""){
    ring.innerHTML="Please input something";
    setTimeout(() => {
      ring.style.color="black";
    }, 2000);
  }
  else{
  ring.innerHTML="Alarm seted";
  setTimeout(() => {
    ring.style.color="black"
  }, 3000);}
})

timing();
