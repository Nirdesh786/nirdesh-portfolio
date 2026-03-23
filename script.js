// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Scroll Effect ---
    const nav = document.querySelector('.glass-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const hamburgerIcon = document.querySelector('.hamburger i');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if(navLinks.classList.contains('active')){
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const faders = document.querySelectorAll('.fade-in, .fade-in-delayed, .stagger-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                if(entry.target.classList.contains('stagger-in')){
                    // Add slight delay based on index for grid elements
                    setTimeout(() => {
                        entry.target.classList.add('appear');
                    }, index * 100);
                } else {
                    entry.target.classList.add('appear');
                }
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        // Initial setup for stagger elements
        if(fader.classList.contains('stagger-in')){
            fader.style.opacity = '0';
            fader.style.transform = 'translateY(30px)';
            fader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        appearOnScroll.observe(fader);
    });
    
    // Add appear class definition dynamically for stagger-in
    const style = document.createElement('style');
    style.innerHTML = `
        .stagger-in.appear {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // --- Active Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // --- Mouse move glow on cards ---
    const cards = document.querySelectorAll('.project-card, .action-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Add radial gradient hover effect via pseudo element
    const cardStyle = document.createElement('style');
    cardStyle.innerHTML = `
        .project-card, .action-card {
            position: relative;
            overflow: hidden;
        }
        .project-card::before, .action-card::before {
            content: "";
            position: absolute;
            top: var(--mouse-y, 0);
            left: var(--mouse-x, 0);
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
            z-index: 0;
        }
        .project-card:hover::before, .action-card:hover::before {
            opacity: 1;
        }
        .project-content, .ac-content, .ac-icon {
            position: relative;
            z-index: 1;
        }
    `;
    document.head.appendChild(cardStyle);
});
