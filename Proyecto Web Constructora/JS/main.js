//hamburguer menu
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

hamburguer.addEventListener('click', ()=>{
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
})

//function to scroll button
let btnScrolltop = document.getElementById('btnScrolltop');

btnScrolltop.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})

window.onscroll=()=>{
    // console.log(scrollY);
    if (window.scrollY > 100){
        document.getElementById("btnScrolltop").style.display="block";
    }else{
        document.getElementById("btnScrolltop").style.display="none";
    }
}


//functions to mision animation
window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('mision-img');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });

  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('animacion');
    let screenSize = window.innerHeight;
    
      for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });