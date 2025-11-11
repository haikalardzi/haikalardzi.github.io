const loadingScreen = document.getElementById('loading-screen');
const loaderLogo = document.querySelector('.loader-logo');
const loaderText = document.querySelector('.loader-text');
const loaderBarContainer = document.querySelector('.loader-bar-container');
const loaderBar = document.querySelector('.loader-bar');
const loadingParticlesContainer = document.querySelector('.loading-particles');

function createLoadingParticles() {
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'loading-particle';
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    loadingParticlesContainer.appendChild(particle);
    anime({
            targets: particle,
            translateY: [0, -100 - Math.random() * 100],
            translateX: [-30 + Math.random() * 60, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            duration: 2000 + Math.random() * 2000,
            loop: true,
            easing: 'easeInOutQuad',
            delay: Math.random() * 1000
        });
    }
}

createLoadingParticles();

const loadingTimeline = anime.timeline({
    easing: 'easeOutExpo'
});

loadingTimeline
    .add({
        targets: loaderLogo,
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 800
    })
    .add({
        targets: loaderText,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600
    }, '-=400')
    .add({
        targets: loaderBarContainer,
        opacity: [0, 1],
        scaleX: [0, 1],
        duration: 600
    }, '-=300');
anime({
    targets: loaderBar,
    width: '100%',
    duration: 2500,
    easing: 'easeInOutQuart',
    complete: function() {
        // Exit animation
        setTimeout(() => {
            const exitTimeline = anime.timeline({
                easing: 'easeInExpo'
            });
            exitTimeline
                .add({
                    targets: loaderBar,
                    opacity: [1, 0],
                    duration: 300
                })
                .add({
                    targets: [loaderLogo, loaderText, loaderBarContainer],
                    opacity: [1, 0],
                    translateY: [0, -50],
                    duration: 600
                }, '-=200')
                .add({
                    targets: loadingScreen,
                    opacity: [1, 0],
                    duration: 800,
                    complete: function() {
                        loadingScreen.style.display = 'none';
                    }
                }, '-=400');
        }, 500);
    }
});
function revealPage() {
    const animatedBg = document.getElementById('animated-bg');
    const sidebarNav = document.getElementById('sidebarNav');
    const mainContainer = document.querySelector('.main-container');
    const menuToggle = document.getElementById('menuToggle');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    // Fade in background
    anime({
        targets: animatedBg,
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad'
    });

    anime({
        targets: sidebarNav,
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 800,
        delay: 200,
        easing: 'easeOutExpo'
    });

    if (window.innerWidth <= 968) {
        anime({
            targets: menuToggle,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 600,
            delay: 300,
            easing: 'easeOutExpo'
        });
    }

    anime({
        targets: mainContainer,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: 400,
        easing: 'easeOutExpo'
    });

    anime({
        targets: sections,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        delay: anime.stagger(100, {start: 600}),
        easing: 'easeOutExpo'
    });

    createParticles();
}

const mainContent = document.getElementById("main-content");
const navList = document.getElementById("content-nav-list");

function getTechStackLogo(idTechStack) {
    return document.getElementById(idTechStack).cloneNode(true);
}

for (let i = 1; i < mainContent.children.length; i++) {
    const li = document.createElement("li");
    const hrefButton = document.createElement("a");
    hrefButton.href = `#${mainContent.children[i].id}`;
    hrefButton.textContent = mainContent.children[i].getAttribute("name");
    li.appendChild(hrefButton);
    navList.appendChild(li);
}

const navLinks = document.querySelectorAll('#content-nav-list a');
const sections = document.querySelectorAll('section[id]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu if open
        if (window.innerWidth <= 968) {
        sidebarNav.classList.remove('open');
        menuToggle.classList.remove('open');
        overlay.classList.remove('show');
        }
    });
});

    // Highlight active section on scroll
function highlightActiveSection() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
           link.classList.add('active');
        }
    });
}

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial call

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebarNav = document.getElementById('sidebarNav');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', () => {
        sidebarNav.classList.toggle('open');
        menuToggle.classList.toggle('open');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        sidebarNav.classList.remove('open');
        menuToggle.classList.remove('open');
        overlay.classList.remove('show');
    });

currentExperience();
// currentCertifications();
currentProjects();
currentCourseWork();