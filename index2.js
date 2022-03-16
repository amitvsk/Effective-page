const progressBar = document.getElementById("weight");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const steps = document.querySelectorAll(".step");

function myFuntion(){
    document.getElementById("a2").style.backgroundColor = "#ecdada";
    document.getElementById("5s").style.backgroundColor = "#ecdada";
}
function myFuntion1(){
     document.getElementById("a3").style.backgroundColor = "#ecdada";
} 
function myFuntion2(){
    document.getElementById("a4").style.backgroundColor = "#ecdada";
} 
function myFuntion3(){
    document.getElementById("a5").style.backgroundColor = "#ecdada";
} 
const room  = document.querySelector('.wn');
const btns = document.querySelectorAll('.step'); 

room.addEventListener('click', e => {

 btns.forEach(btn => {

    if(btn.getAttribute('id') === e.target.getAttribute('id'))
      btn.classList.add('active');
    else
      btn.classList.remove('active');
    });
});
