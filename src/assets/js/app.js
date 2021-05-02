
$(function(){
const navItems = document.querySelectorAll('[data-scroll]');
const body = document.body;
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const fig = document.getElementsByClassName('fig');


// скролл до нужного места
// navItems.forEach(item => {
//     item.addEventListener('click', event => {
//         // let $this = event.currentTarget;
//         // let targetId = $this.getAttribute('data-scroll');
//         // body.classList.remove('show-sidebar');
//         // let topOffset = nav.offsetHeight;
//         // let scrollTarget = document.getElementById(targetId);
//         // let targetPosition = scrollTarget.getBoundingClientRect().top;
//         // window.scrollBy({
//         //     top: targetPosition-topOffset ,
//         //     behavior: 'smooth'
//         // });      
//     });
// });
$("[data-scroll]").on("click", function(event) {
    event.preventDefault(); 
    body.classList.remove('show-sidebar');
    let topOffset = nav.offsetHeight;
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    $("html, body").animate({
        scrollTop: elementOffset - topOffset
    }, 500);
    setTimeout(function(){
        $('.fig').toggleClass('rotate')
    }, 100)
});

$('.mask').on("click", function(event) {
body.classList.remove('show-sidebar');
});
//нажатие на бургер
burger.addEventListener('click', event =>{
    body.classList.toggle('show-sidebar');
});


})