/*=========================== Toggle Icon Navbar ==================*/

let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('header .navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*=========================== Scroll section active link ==================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector(`header .navbar a[href*='${id}']`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    /*=========================== Sticky Navbar ==================*/
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 200);
    }

    /*=========================== Remove toggle icon and navbar ==================*/
    if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
    }
    if (navbar) {
        navbar.classList.remove('active');
    }
};
 /*=========================== Scroll Reveal ==================*/

 ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills__container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


