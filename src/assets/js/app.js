const navItems = document.querySelectorAll('[data-scroll]');
const body = document.body;
const nav = document.getElementById('nav');
const burger = document.getElementById('burger')


// скролл до нужного места
navItems.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let targetId = $this.getAttribute('data-scroll');
        topOffset = nav.offsetHeight;
        let scrollTarget = document.getElementById(targetId);
        let targetPosition = scrollTarget.getBoundingClientRect().top;
        window.scrollBy({
            top: targetPosition-topOffset ,
            behavior: 'smooth'
        });
        body.classList.remove('show-sidebar');
    });
});

//нажатие на бургер
burger.addEventListener('click', event =>{
    body.classList.toggle('show-sidebar');
})