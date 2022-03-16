
const room  = document.querySelector('.weight');
const btns = document.querySelectorAll('.step'); 

room.addEventListener('click', e => {

 btns.forEach(btn => {

    if(btn.getAttribute('id') === e.target.getAttribute('id'))
      btn.classList.add('active');
    else
      btn.classList.remove('active');
    });
});

function myFuntion(){
    document.getElementById("amit2").style.fontSize = '0.05em';
}
function myFuntion1(){
     document.getElementById("amit2").style.fontSize = '0.7em';
} 
function myFuntion2(){
    document.getElementById("amit2").style.fontSize = '0.9em';
} 
function myFuntion3(){
    document.getElementById("amit2").style.fontSize = '1.0em';
} 
function myFuntion4(){
    document.getElementById("amit2").style.fontSize = '1.2em';
} 