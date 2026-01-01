
// Current language
let currentLang = 'uk';

// Language data for founders modal
const foundersData = {
    1: {
        name: { uk: 'Дмитро Паустовський', en: 'Dmytro Paustovskyi' },
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        bio: {
            uk: 'Ветеран АТО/ООС, інвалід війни. Співзасновник організації "Легіон Титанів". Займається координацією діяльності організації, розвитком партнерських відносин з державними та міжнародними структурами. Має досвід у соціальній роботі з 2018 року.',
            en: 'ATO/JFO veteran, war disabled. Co-founder of the "Legion of Titans" organization. Engaged in coordinating the organization\'s activities, developing partnerships with government and international structures. Has experience in social work since 2018.'
        },
        contacts: '<p><i class="fas fa-phone"></i> +38 (067) 111-11-11</p><p><i class="fab fa-telegram"></i> @paustovskyi_dmytro</p><p><i class="fas fa-envelope"></i> dmytro.p@legion-titaniv.org.ua</p>'
    },
    2: {
        name: { uk: 'Сергій Саліхов', en: 'Serhii Salikhov' },
        img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
        bio: {
            uk: 'Ветеран АТО/ООС та повномасштабного вторгнення, має інвалідність пов\'язану з захистом Батьківщини, 2 група, підполковник запасу. Співзасновник організації "Легіон Титанів". Координатор проектів з реабілітації та навчання. Організував понад 50 заходів для ветеранів з 2020 року. Має вищу освіту в галузі програмування.',
            en: 'Veteran of ATO/JFO and the full-scale invasion, has a disability related to the defense of the Motherland, 2nd group, lieutenant colonel in reserve. Co-founder of the "Legion of Titans" organization. Coordinator of rehabilitation and training projects. Organized over 50 events for veterans since 2020. Has a higher education in programming.'
        },
        contacts: '<p><i class="fas fa-phone"></i> +38 (050) 222-22-22</p><p><i class="fab fa-telegram"></i> @salikhov_serhii</p><p><i class="fas fa-envelope"></i> serhii.s@legion-titaniv.org.ua</p>'
    },
    3: {
        name: { uk: 'Андрій Мельник', en: 'Andrii Melnyk' },
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80',
        bio: {
            uk: 'Співзасновник, відповідальний за юридичну підтримку. Допомагає ветеранам у вирішенні правових питань та оформленні документів. Має багаторічний досвід у юридичній практиці та волонтерській діяльності.',
            en: 'Co-founder, responsible for legal support. Helps veterans in resolving legal issues and processing documents. Has many years of experience in legal practice and volunteering.'
        },
        contacts: '<p><i class="fas fa-phone"></i> +38 (063) 333-33-33</p><p><i class="fab fa-telegram"></i> @melnyk_andrii</p><p><i class="fas fa-envelope"></i> andrii.m@legion-titaniv.org.ua</p>'
    }
};

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-uk]').forEach(element => {
        const key = lang === 'en' ? 'en' : 'uk';
        if (element.dataset[key]) {
             // For elements that have children, we might not want to change the textContent directly
            if (element.children.length > 0 && !element.classList.contains('logo-text') && !element.classList.contains('report-title') && !element.classList.contains('story-quote') && !element.classList.contains('founder-info') && !element.classList.contains('specialist-info')) {
                 // Get the text node to update, ignoring child elements
                const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
                if (textNode) {
                    textNode.textContent = element.dataset[key];
                }
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = element.dataset[key];
            } else {
                element.textContent = element.dataset[key];
            }
        }
    });
    
    // Update document title
    document.title = lang === 'uk' 
        ? 'ГО "Легіон Титанів" | Бучанський район' 
        : 'GO "Legion of Titans" | Bucha District';
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLang', lang);
}

// Language switcher functionality
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        changeLanguage(lang);
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Do not close menu if it's the dropdown toggle on mobile
        const isDropdownToggle = e.currentTarget.classList.contains('dropdown-toggle');
        const isMobileView = window.innerWidth <= 768;

        if (isDropdownToggle && isMobileView) {
            // This event is handled by the dropdown listener below, so we do nothing here.
            return;
        }
        
        // For all other links, close the main mobile menu if it is active
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Mobile dropdown functionality
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = toggle.closest('.dropdown');
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
        }
    });
});

// Founder modal functionality
const founderCards = document.querySelectorAll('.founder-card');
const founderModal = document.getElementById('founderModal');
const modalClose = document.getElementById('modalClose');

if (founderModal && modalClose) {
    // Add click event to founder cards
    founderCards.forEach(card => {
        card.addEventListener('click', () => {
            const founderId = card.getAttribute('data-founder');
            const founder = foundersData[founderId];
            
            const modalFounderName = document.getElementById('modalFounderName');
            const modalFounderImg = document.getElementById('modalFounderImg');
            const modalFounderBio = document.getElementById('modalFounderBio');
            const modalFounderContacts = document.getElementById('modalFounderContacts');

            if (founder && modalFounderName && modalFounderImg && modalFounderBio && modalFounderContacts) {
                modalFounderName.textContent = founder.name[currentLang];
                modalFounderImg.style.display = 'none'; // We hide the image as per the new design
                modalFounderBio.textContent = founder.bio[currentLang];
                modalFounderContacts.innerHTML = founder.contacts;
                
                founderModal.style.display = 'flex';
            }
        });
    });

    // Close modal when clicking X or outside
    modalClose.addEventListener('click', () => {
        founderModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === founderModal) {
            founderModal.style.display = 'none';
        }
    });
}


// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = currentLang === 'uk' 
            ? 'Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.'
            : 'Thank you for your message! We will contact you soon.';
        alert(message);
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        
        const targetId = this.getAttribute('href');
        if (targetId === '#' || this.classList.contains('dropdown-toggle')) {
            e.preventDefault();
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 90, // Adjust for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Fixed action buttons functionality
const helpBtn = document.querySelector('.help-btn');
const joinBtn = document.querySelector('.join-btn');

if (helpBtn) {
    helpBtn.addEventListener('click', () => {
        const message = currentLang === 'uk' 
            ? 'Дякуємо за бажання допомогти! Для отримання детальної інформації про способи допомоги, зв\'яжіться з нами через форму контактів.'
            : 'Thank you for wanting to help! For detailed information on ways to help, please contact us through the contact form.';
        alert(message);
    });
}

if (joinBtn) {
    joinBtn.addEventListener('click', () => {
        const message = currentLang === 'uk' 
            ? 'Для приєднання до нашої організації, будь ласка, заповніть контактну форму або зателефонуйте нам за вказаними номерами.'
            : 'To join our organization, please fill out the contact form or call us at the numbers provided.';
        alert(message);
    });
}


// Initialize language from localStorage or default to Ukrainian
const savedLang = localStorage.getItem('preferredLang') || 'uk';
changeLanguage(savedLang);

// Initialize form placeholders
document.querySelectorAll('input[data-uk], textarea[data-uk]').forEach(element => {
    element.placeholder = element.dataset[currentLang];
});

// Scroll animation
try {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.activity-card, .report-card, .story-card, .news-card, .hero-visual').forEach(el => {
        observer.observe(el);
    });
} catch (e) {
    console.error("Intersection Observer not supported or failed to initialize.");
}


// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});
