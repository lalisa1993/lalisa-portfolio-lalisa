/*================ toggle-icon navbar ===========================*/
let menuIcon=document.querySelectorAll('#menu-icon');
let navbar=document.querySelectorAll('.navbar');

menuIcon.onclick = () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
   

};


/*================ Scroll sections avtive link ===========================*/
let sections=document.querySelectorAll('sections');
let navlinks=document.querySelectorAll('header nav a');

Window.onscroll=()=>{
    sections.forEach (sec =>{
        letTop=window.scrollY;
        let offset= sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset &&top<offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id+']').classList.add('active');
            })
        };

    });
      
    /*================  sticky navbar===========================*/
    let header=document.querySelector('header')
    header.classList.toggle('stick',window.scrollY >100);
 
    /*================remove toggle icon and navbar when click navbar link(scroll)===========================*/
 
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
};
/*================ Scroll reveal ===========================*/
ScrollReveal({ 
    //reset: true,
 
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.Home-content','.heading',{ origion:'top' });
ScrollReveal().reveal('.Home-img,.services-container.Portfolio-box,.Contact-form',{ origion:'bottom' });

 
/*================ typed js ===========================*/
const typed=new Typed('.multiple-text',{
    strings:['Developer','Youtuber','Blogger'],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop:true 
});