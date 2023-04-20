const btn = document.getElementById('menu-btn');
const mobmenu = document.getElementById('menu');
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    mobmenu.classList.toggle('flex')
    mobmenu.classList.toggle('hidden')
})