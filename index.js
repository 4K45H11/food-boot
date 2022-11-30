const navEl=document.querySelector('nav');
window.addEventListener('scroll',function(){
    if(window.pageYOffset>100){
        navEl.classList.add('sticky','text-dark');
    }
    else{
        navEl.classList.remove('sticky','text-dark');
    }
});
