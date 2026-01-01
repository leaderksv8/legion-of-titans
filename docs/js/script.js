document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu --- //
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav-controls nav');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling up to the document
            nav.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    if (navMenu) {
        navMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && !e.target.closest('.dropdown-toggle')) {
                nav.classList.remove('active');
            }
        });
    }

    // Close menu when clicking outside of it on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 && nav && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && e.target !== mobileMenuBtn) {
                nav.classList.remove('active');
            }
        }
    });

    // --- Mobile Dropdown --- //
    const dropdowns = document.querySelectorAll('.dropdown');
    if (dropdowns.length > 0) {
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    // Only activate this behavior on mobile
                    if (window.innerWidth <= 992) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                });
            }
        });
    }

    // --- Language Switcher (kept from original) --- //
    let currentLang = localStorage.getItem('preferredLang') || 'uk';
    
    function changeLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.querySelectorAll('[data-uk]').forEach(element => {
            const text = element.dataset[lang] || element.dataset['uk'];
            if (element.placeholder !== undefined) {
                element.placeholder = text;
            } else {
                element.innerHTML = text; // Use innerHTML to render icons inside links
            }
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });

    // Initialize language on page load
    changeLanguage(currentLang);

    // --- Smooth Scrolling --- //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for sticky header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
