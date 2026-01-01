// Current language
let currentLang = 'uk';

// Language data for founders modal
const foundersData = {
    1: {
        name: { uk: 'Іван Петренко', en: 'Ivan Petrenko' },
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        bio: {
            uk: 'Ветеран АТО/ООС, інвалід війни. Співзасновник організації "Легіон Титанів". Займається координацією діяльності організації, розвитком партнерських відносин з державними та міжнародними структурами. Має досвід у соціальній роботі з 2018 року.',
            en: 'ATO/JFO veteran, war disabled. Co-founder of the "Legion of Titans" organization. Engaged in coordinating the organization\'s activities, developing partnerships with government and international structures. Has experience in social work since 2018.'
        },
        contacts: '<p><i class="fas fa-phone"></i> +38 (067) 123-45-67</p><p><i class="fab fa-telegram"></i> @ivan_petrenko</p><p><i class="fas fa-envelope"></i> ivan@legion-titaniv.org.ua</p>'
    },
    2: {
        name: { uk: 'Олександр Коваленко', en: 'Oleksandr Kovalenko' },
        img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
        bio: {
            uk: 'Ветеран АТО, капітан запасу. Співзасновник організації "Легіон Титанів". Координатор проектів з реабілітації та навчання. Організував понад 50 заходів для ветеранів з 2020 року. Має вищу освіту в галузі психології.',
            en: 'ATO veteran, captain in reserve. Co-founder of the "Legion of Titans" organization. Coordinator of rehabilitation and training projects. Organized over 50 events for veterans since 2020. Has higher education in psychology.'
        },
        contacts: '<p><i class="fas fa-phone"></i> +38 (050) 987-65-43</p><p><i class="fab fa-telegram"></i> @olexander_kovalenko</p><p><i class="fas fa-envelope"></i> olexander@legion-titaniv.org.ua</p>'
    },
    3: {
        name: { uk: 'Марія Шевченко', en: 'Maria Shevchenko' },
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80',
        bio: {
            uk: 'Ветеран медичної служби, учасниця АТО. Співзасновниця організації "Легіон Титанів". Керівник реабілітаційних програм. Має 15-річний досвід роботи в медичній сфері. Організувала реабілітаційні курси для понад 200 ветеранів.',
            en: 'Medical service veteran, ATO participant. Co-founder of the "Legion of Titans" organization. Head of rehabilitation programs. Has 15 years of experience in the medical field. Organized rehabilitation courses for over 200 veterans.'
        },
        contacts: '<p><i class="fas fa-phone"></i> +38 (063) 456-78-90</p><p><i class="fab fa-telegram"></i> @maria_shevchenko</p><p><i class="fas fa-envelope"></i> maria@legion-titaniv.org.ua</p>'
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
        if (element.dataset[lang]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = element.dataset[lang];
            } else {
                element.textContent = element.dataset[lang];
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

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Mobile dropdown functionality
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = toggle.closest('.dropdown');
            dropdown.classList.toggle('active');
        }
    });
});

// Founder modal functionality
const founderCards = document.querySelectorAll('.founder-card');
const founderModal = document.getElementById('founderModal');
const modalClose = document.getElementById('modalClose');
const modalFounderName = document.getElementById('modalFounderName');
const modalFounderImg = document.getElementById('modalFounderImg');
const modalFounderBio = document.getElementById('modalFounderBio');
const modalFounderContacts = document.getElementById('modalFounderContacts');

// Add click event to founder cards
founderCards.forEach(card => {
    card.addEventListener('click', () => {
        const founderId = card.getAttribute('data-founder');
        const founder = foundersData[founderId];
        
        modalFounderName.textContent = founder.name[currentLang];
        modalFounderImg.src = founder.img;
        modalFounderImg.alt = founder.name[currentLang];
        modalFounderBio.textContent = founder.bio[currentLang];
        modalFounderContacts.innerHTML = founder.contacts;
        
        founderModal.style.display = 'flex';
    });
});

// Close modal when clicking X
modalClose.addEventListener('click', () => {
    founderModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === founderModal) {
        founderModal.style.display = 'none';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = currentLang === 'uk' 
        ? 'Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.'
        : 'Thank you for your message! We will contact you soon.';
    alert(message);
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});

// Fixed action buttons functionality
const helpBtn = document.querySelector('.help-btn');
const joinBtn = document.querySelector('.join-btn');

helpBtn.addEventListener('click', () => {
    const message = currentLang === 'uk' 
        ? 'Дякуємо за бажання допомогти! Для отримання детальної інформації про способи допомоги, зв\'яжіться з нами через форму контактів.'
        : 'Thank you for wanting to help! For detailed information on ways to help, please contact us through the contact form.';
    alert(message);
});

joinBtn.addEventListener('click', () => {
    const message = currentLang === 'uk' 
        ? 'Для приєднання до нашої організації, будь ласка, заповніть контактну форму або зателефонуйте нам за вказаними номерами.'
        : 'To join our organization, please fill out the contact form or call us at the numbers provided.';
    alert(message);
});

// Initialize language from localStorage or default to Ukrainian
const savedLang = localStorage.getItem('preferredLang') || 'uk';
changeLanguage(savedLang);

// Initialize form placeholders
document.querySelectorAll('input[data-uk], textarea[data-uk]').forEach(element => {
    element.placeholder = element.dataset[currentLang];
});

// Scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});