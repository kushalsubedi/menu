
//navigation 
const menu = document.querySelector('#mobile-menu');  //-> query selector ssarch for id with mobile view from html
const menuLinks =document.querySelector('.nav-menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active'); 

    menuLinks.classList.toggle('active');
    
})
 
//landing page 

//thumbnail
function imgSlider(anything){
    document.querySelector('.food').src=anything;
}




