
const navItems = document.querySelectorAll('[data-scroll]');
const body = document.body;
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const fig = document.getElementById('fig');


// скролл до нужного места
navItems.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let targetId = $this.getAttribute('data-scroll');
        let topOffset = nav.offsetHeight;
        let scrollTarget = document.getElementById(targetId);
        let targetPosition = scrollTarget.getBoundingClientRect().top;
        // window.scrollBy({
        //     top: targetPosition-topOffset ,
        //     behavior: 'smooth'
        // });
        SmoothVerticalScrolling(targetPosition-topOffset, 300, 'top')
        body.classList.remove('show-sidebar');
      //  fig.style.transform = 'rotate(-210deg)';
        
    });
});

//нажатие на бургер
burger.addEventListener('click', event =>{
    body.classList.toggle('show-sidebar');
})






//scroll функции
function SmoothVerticalScrolling(pos, time, where) {
    let eAmt = pos / 100;
    let curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}
function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

