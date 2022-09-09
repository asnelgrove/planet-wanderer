const btn = document.getElementById('menu-btn');
const mobmenu = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    mobmenu.classList.toggle('flex')
    mobmenu.classList.toggle('hidden')
})