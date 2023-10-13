let naruto= document.getElementById('dubaitext');
let burjkhalifa= document.getElementById('burjkhalifa');
let stars= document.getElementById('stars');
let kakashi=document.getElementById('kakashi');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    naruto.style.top =value * -2 + 'px';
    // burjkhalifa.style.top =value * 1 + 'px';
    building.style.top =value * 1 + 'px';
    stars.style.top =value * 1 + 'px';
    kakashi.style.top =value * 1 + 'px';
})