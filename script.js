// ============================================
// BRYT BARBERSHOP - INTERACTIVE JAVASCRIPT
// ============================================

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');
const navLink = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLink.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// SMOOTH SCROLL ANIMATIONS
// ============================================

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add scroll animation class to sections
const sections = document.querySelectorAll('.barbers-section, .booking-cta, .gallery-section, .about-section, .contact-section');
sections.forEach(section => {
    section.classList.add('scroll-fade');
    observer.observe(section);
});

// ============================================
// GALLERY LIGHTBOX
// ============================================

const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let allImages = [];

// Open lightbox
galleryItems.forEach((item, index) => {
    allImages.push(item.dataset.image);
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightboxImage.src = allImages[currentImageIndex];
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);

// Navigate gallery
lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    openLightbox();
});

lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    openLightbox();
});

// Close lightbox when clicking outside
lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') lightboxPrev.click();
        if (e.key === 'ArrowRight') lightboxNext.click();
        if (e.key === 'Escape') closeLightbox();
    }
});

// ============================================
// PLAY VIDEO BUTTON
// ============================================

const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
    // Create and show a modal with video
    // This is a placeholder - you can integrate with YouTube or Vimeo
    alert('🎬 Video Player\n\nIntegrate with YouTube or Vimeo here.\nReplace this with your video content.');
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SCROLL TO TOP ANIMATION
// ============================================

// Add scroll-to-top button dynamically
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #d4a24c;
    color: #0b0b0b;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseover', () => {
    scrollTopBtn.style.background = '#e8b870';
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseout', () => {
    scrollTopBtn.style.background = '#d4a24c';
    scrollTopBtn.style.transform = 'scale(1)';
});

// ============================================
// PARALLAX EFFECT (Optional Enhancement)
// ============================================

const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
    if (heroImage) {
        const scrollY = window.scrollY;
        heroImage.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLink.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#d4a24c';
        } else {
            link.style.color = 'inherit';
        }
    });
});

// ============================================
// FORM VALIDATION (if needed in future)
// ============================================

// Simple form validation example
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// ============================================
// SERVICE CARD INTERACTION
// ============================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// TOUCH SUPPORT FOR MOBILE
// ============================================

let touchStartX = 0;
let touchEndX = 0;

lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swiped left - show next image
        lightboxNext.click();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swiped right - show previous image
        lightboxPrev.click();
    }
}

// ============================================
// PERFORMANCE: Lazy Loading Images
// ============================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// FOOTER YEAR AUTO UPDATE
// ============================================

const year = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.textContent = `© ${year} BRYT Barbershop. All rights reserved. | Crafted with precision.`;
}

// ============================================
// DEBUGGING / CONSOLE MESSAGES
// ============================================

console.log('%c BRYT BARBERSHOP ', 'background: #d4a24c; color: #0b0b0b; font-weight: bold; font-size: 1.2rem; padding: 10px;');
console.log('%c Premium Cuts. Confident You. ', 'background: #0b0b0b; color: #d4a24c; font-weight: bold; padding: 5px;');
console.log('Website loaded successfully! 💈✨');
