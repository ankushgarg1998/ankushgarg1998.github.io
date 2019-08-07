// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const smallHeading = document.querySelector('.sm-heading');
// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
// setInterval(populateSmallHeading, 500);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        // Set Menu State
        showMenu = false;
    }
}

function populateSmallHeading() {
    let textArr = [
        `cout<<"Hello World!;`,
        `printf("Hello World!");`,
        `console.log("Hello World!")`,
        `System.out.println("Hello World!");`,
        `echo 'Hello World!'`
    ];
    smallHeading.innerHTML = textArr[parseInt((Math.random()*10)/2)];
}