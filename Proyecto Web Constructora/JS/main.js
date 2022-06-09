var btnScrolltop = document.getElementById('btnScrolltop');

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