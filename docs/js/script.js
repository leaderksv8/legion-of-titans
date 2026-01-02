
// Current language
let currentLang = 'uk';

// Founder biography data
const founderBios = {
    'paustovskyi': {
        name_uk: "Дмитро Паустовський",
        name_en: "Dmytro Paustovskyi",
        bio_uk: "Детальна біографія Дмитра Паустовського буде додана найближчим часом. Дмитро є головою організації та відповідає за стратегічний розвиток та партнерства.",
        bio_en: "A detailed biography of Dmytro Paustovskyi will be added shortly. Dmytro is the head of the organization and is responsible for strategic development and partnerships.",
        phone: "+38 (067) 123-45-67",
        telegram: "paustovskyi_dmytro",
        email: "dmytro.p@legion-titaniv.org.ua"
    },
    'salikhov': {
        name_uk: "Сергій Саліхов",
        name_en: "Serhii Salikhov",
        bio_uk: "Ветеран АТО/ООС та повномасштабного вторгнення, має інвалідність пов’язану з захистом батьківщини, підполковник запасу. Співзасновник організації “Легіон-Титанів”. Координатор проектів з реабілітації та навчання. Організував понад 50 заходів для ветеранів з 2020 року. Має вищу освіту в галузі програмування.",
        bio_en: "ATO/JFO and full-scale invasion veteran, has a disability related to the defense of the motherland, 2nd group, lieutenant colonel in reserve. Co-founder of the 'Legion of Titans' organization. Coordinator of rehabilitation and training projects. Organized over 50 events for veterans since 2020. Has a higher education in programming.",
        phone: "+38 (050) 222-22-22",
        telegram: "salikhov_serhii",
        email: "serhii.s@legion-titaniv.org.ua"
    },
    'founder3': {
        name_uk: "Співзасновник 3",
        name_en: "Co-founder 3",
        bio_uk: "Біографія співзасновника 3.",
        bio_en: "Biography of Co-founder 3.",
        phone: "+38 (000) 000-00-00",
        telegram: "founder3",
        email: "founder3@legion-titaniv.org.ua"
    },
    'founder4': {
        name_uk: "Співзасновник 4",
        name_en: "Co-founder 4",
        bio_uk: "Біографія співзасновника 4.",
        bio_en: "Biography of Co-founder 4.",
        phone: "+38 (000) 000-00-00",
        telegram: "founder4",
        email: "founder4@legion-titaniv.org.ua"
    },
    'founder5': {
        name_uk: "Співзасновник 5",
        name_en: "Co-founder 5",
        bio_uk: "Біографія співзасновника 5.",
        bio_en: "Biography of Co-founder 5.",
        phone: "+38 (000) 000-00-00",
        telegram: "founder5",
        email: "founder5@legion-titaniv.org.ua"
    }
};

// Fetch and render data function
function fetchDataAndRender(endpoint, containerId, renderer, shouldRenderAll = true) {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(containerId) || document.querySelector(containerId);
            if (container) {
                renderer(container, data);
                if (shouldRenderAll) {
                    changeLanguage(currentLang, false); // Re-apply language to new elements
                }
            }
        })
        .catch(error => console.error(`Error fetching ${endpoint}:`, error));
}

// Renderers
const renderers = {
    hero: (container, data) => {
        const langKey = `title_${currentLang}`;
        const titles = data[langKey];
        container.innerHTML = `
            <h1>
                <span class="main-line" data-uk="${data.title_uk[0]}" data-en="${data.title_en[0]}">${titles[0]}</span>
                <span class="main-line" data-uk="${data.title_uk[1]}" data-en="${data.title_en[1]}">${titles[1]}</span>
                <span class="main-line" data-uk="${data.title_uk[2]}" data-en="${data.title_en[2]}">${titles[2]}</span>
                <span class="titans-line" data-uk="${data.title_uk[3]}" data-en="${data.title_en[3]}">${titles[3]}</span>
            </h1>`;
    },
    activities: (container, data) => {
        container.innerHTML = data.map(item => `
            <div class="activity-card animate-on-scroll">
                <div class="activity-icon"><i class="${item.icon}"></i></div>
                <h3 data-uk="${item.title_uk}" data-en="${item.title_en}">${item['title_' + currentLang]}</h3>
                <p data-uk="${item.text_uk}" data-en="${item.text_en}">${item['text_' + currentLang]}</p>
            </div>`).join('');
    },
    reports: (container, data) => {
        container.innerHTML = data.map(item => `
            <div class="report-card animate-on-scroll">
                <div class="report-number">${item.number}</div>
                <div class="report-title" data-uk="${item.title_uk}" data-en="${item.title_en}">${item['title_' + currentLang]}</div>
            </div>`).join('');
    },
    partners: (container, data) => {
        container.innerHTML = data.map(item => `
            <div class="partner-logo" data-uk="${item.name_uk}" data-en="${item.name_en}">${item['name_' + currentLang]}</div>`).join('');
    },
    news: (container, data) => {
        container.innerHTML = data.map(newsItem => `
            <div class="news-card">
                <div class="news-card-header">
                    <span class="news-date"><i class="${newsItem.icon}"></i> ${newsItem.date}</span>
                </div>
                <div class="news-card-body">
                    <h3 class="news-title" data-uk="${newsItem.title_uk}" data-en="${newsItem.title_en}">${newsItem['title_' + currentLang]}</h3>
                    <p class="news-text" data-uk="${newsItem.text_uk}" data-en="${newsItem.text_en}">${newsItem['text_' + currentLang]}</p>
                </div>
                <div class="news-card-footer">
                    <a href="${newsItem.link}" class="news-link" data-uk="Дізнатися більше" data-en="Learn more">Дізнатися більше <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>`).join('');
    },
    stories: (container, data) => {
        container.innerHTML = data.map(storyItem => `
            <div class="story-card animate-on-scroll">
                <div class="story-image"><i class="${storyItem.icon}"></i></div>
                <div class="story-content">
                    <h3 data-uk="${storyItem.title_uk}" data-en="${storyItem.title_en}">${storyItem['title_' + currentLang]}</h3>
                    <p data-uk="${storyItem.text_uk}" data-en="${storyItem.text_en}">${storyItem['text_' + currentLang]}</p>
                    <div class="story-quote" data-uk="${storyItem.quote_uk}" data-en="${storyItem.quote_en}">${storyItem['quote_' + currentLang]}</div>
                </div>
            </div>`).join('');
    }
};

// Function to change language
function changeLanguage(lang, shouldRenderAll = true) {
    currentLang = lang;

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all elements with data attributes
    document.querySelectorAll('[data-uk]').forEach(element => {
        const key = lang === 'en' ? 'en' : 'uk';
        if (element.dataset[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = element.dataset[key];
            } else {
                // This is a more robust way to handle elements with children
                const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
                if(textNode) textNode.textContent = element.dataset[key]; else element.textContent = element.dataset[key];
            }
        }
    });

    // Update document title
    document.title = lang === 'uk' ? 'ГО "Легіон Титанів" | Бучанський район' : 'GO "Legion of Titans" | Bucha District';
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLang', lang);

    if (shouldRenderAll) {
        renderAllSections();
    }
}

// Render all sections
function renderAllSections() {
    fetchDataAndRender('js/hero-data.json', '.hero-container', renderers.hero);
    fetchDataAndRender('js/activities-data.json', '.activities-grid', renderers.activities);
    fetchDataAndRender('js/reports-data.json', '.report-cards', renderers.reports);
    fetchDataAndRender('js/partners-data.json', '.partners-logos', renderers.partners);
    fetchDataAndRender('js/news-data.json', '#newsContainer', renderers.news);
    fetchDataAndRender('js/stories-data.json', '#storiesContainer', renderers.stories);
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'uk';
    changeLanguage(savedLang);

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // Desktop burger menu
    const desktopBurgerBtn = document.getElementById('desktopBurgerBtn');
    const desktopBurgerDropdown = document.getElementById('desktopBurgerDropdown');

    if (desktopBurgerBtn && desktopBurgerDropdown) {
        desktopBurgerBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            desktopBurgerDropdown.classList.toggle('active');
        });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        // Mobile
        if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
        // Desktop
        if (desktopBurgerDropdown && desktopBurgerDropdown.classList.contains('active') && !desktopBurgerDropdown.contains(e.target) && !desktopBurgerBtn.contains(e.target)) {
            desktopBurgerDropdown.classList.remove('active');
        }
    });

    // Founder Bio Modal Logic
    const bioModal = document.getElementById('bioModal');
    const modalName = document.getElementById('modalName');
    const modalBio = document.getElementById('modalBio');
    const modalContacts = document.getElementById('modalContacts');
    const closeModal = bioModal.querySelector('.modal-close');

    document.querySelectorAll('.founder-card').forEach(card => {
        card.addEventListener('click', () => {
            const founderId = card.getAttribute('data-founder-id');
            const bioData = founderBios[founderId];

            if (bioData) {
                modalName.textContent = bioData['name_' + currentLang];
                modalBio.textContent = bioData['bio_' + currentLang];
                modalContacts.innerHTML = `
                    <p><i class="fas fa-phone"></i> ${bioData.phone}</p>
                    <p><i class="fab fa-telegram"></i> <a href="https://t.me/${bioData.telegram}" target="_blank">@${bioData.telegram}</a></p>
                    <p><i class="fas fa-envelope"></i> <a href="mailto:${bioData.email}">${bioData.email}</a></p>
                `;
                bioModal.style.display = 'flex';
            }
        });
    });

    const closeBioModal = () => {
        bioModal.style.display = 'none';
    };

    closeModal.addEventListener('click', closeBioModal);
    bioModal.addEventListener('click', (e) => {
        if (e.target === bioModal) {
            closeBioModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bioModal.style.display === 'flex') {
            closeBioModal();
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            const status = document.createElement('div');
            status.className = 'form-status';
            form.appendChild(status);
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = currentLang === 'uk' ? "Дякуємо! Ваше повідомлення надіслано." : "Thanks! Your message has been sent.";
                    form.reset();
                } else {
                    const responseData = await response.json();
                    status.innerHTML = responseData.errors.map(error => error.message).join(", ");
                }
            } catch (error) {
                status.innerHTML = currentLang === 'uk' ? "Сталася помилка. Спробуйте ще раз." : "An error occurred. Please try again.";
            }
            setTimeout(() => status.remove(), 5000);
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });
});
