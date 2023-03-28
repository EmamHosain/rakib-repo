const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');


const nav_link = document.querySelectorAll('.link');
const active_link = document.querySelector('.link_active')
 
const current_location = location.href;

for(let i = 0;i < nav_link.length;i++){
   if(nav_link[i].href == current_location){
    nav_link[i].classList.add('nav_link-style');
    active_link.classList.remove('link_active');
   }
}

hamburger.addEventListener('click',function(){
 navbar.classList.toggle('navbar_open');
})