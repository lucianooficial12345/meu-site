
// Mobile menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
if (burger && nav) {
  burger.addEventListener('click', ()=> nav.classList.toggle('open'));
}

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Optional: mark active link based on pathname
const path = location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(a=>{
  if(a.getAttribute('href') === path || (!path && a.getAttribute('href')==='index.html')){
    a.classList.add('active');
  }
});
