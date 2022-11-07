let hours = document.getElementById("hours");
let minutes= document.getElementById("minutes");
let seconds= document.getElementById("seconds");
 let ampmEl= document.getElementById("ampm")
 function updateClock(){
    let h = new Date().getHours();
    let m =  new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    if (h>12){
        h = h - 12 ;
        ampm = "PM"
    }
    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampmEl.innerText = ampm ;
    setTimeout (()=>{
        updateClock();
    })
 }
 updateClock()