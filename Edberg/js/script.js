const menuBtn = document.getElementById('menu-btn');
const navLink = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLink.style.display = navLink.style.display === 'none' ? 'flex' : 'none';
});

//dummy change