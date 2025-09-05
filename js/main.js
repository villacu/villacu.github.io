// Website configuration
const config = {
    profile: {
        name: "Emilio Villa-Cueva",
        image: "images/me.png",
        title: "PhD Student at MBZUAI"
    },
    tabs: [
        {
            id: "about",
            title: "About",
            content: {
                type: "text",
                body: "I'm a PhD student at MBZUAI, supervised by <a href='https://lit.eecs.umich.edu/' class='bio-link'>Thamar Solorio</a> (<a href='https://ritual-mbzuai.github.io/web/' class='bio-link'>RiTUAL Lab</a>). My research focuses on building/evaluating AI that can understand human social interactions in multimodal settings, with a special focus on multimodal signals influence communication and social understanding . </p><p>I'm also interested in multilingual NLP, language adaptation of LLMs, and few-shot learning. Before this, I earned a master's degree in Computer Science from CIMAT and did a bachelors in Engineering Physics. <br><br> This semester, I am doing a research stay at <a href='https://ritual-mbzuai.github.io/web/' class='bio-link'>LIT Lab</a> at the University of Michigan.",
                
                buttons: [
                    {
                        text: "Download CV",
                        icon: '<i class="fas fa-file-download"></i>',
                        link: "documents/cv.pdf",
                        class: "cv-button"
                    },
                    {
                        text: "Google Scholar",
                        icon: '<i class="fas fa-graduation-cap"></i>',
                        link: "https://scholar.google.com/citations?user=uYz6zaIAAAAJ",
                        class: "scholar-button"
                    }
                ]
            }
        },
        {
            id: "research",
            title: "Research",
            content: {
                type: "research",
                interests: "Multimodal Social Intelligence, Theory of Mind, Multilinguality",
                publications: [
                    {
                        title: "MOMENTS: A Comprehensive Multimodal Benchmark for Theory of Mind",
                        authors: "Emilio Villa-Cueva, SM Ahmed, Rendi Chevi, Jan Christian Blaise Cruz, Kareem Elzeky, Fermin Cristobal, Alham Fikri Aji, Skyler Wang, Rada Mihalcea, Thamar Solorio",
                        conference: "EMNLP 2025 (Findings)",
                        venue: "Empirical Methods on Natural Language Processing"
                    },
                    {
                        title: "CaMMT: Benchmarking Culturally Aware Multimodal Machine Translation",
                        authors: "Emilio Villa-Cueva, Sholpan Bolatzhanova, Diana Turmakhan, Kareem Elzeky, Henok Biadglign Ademtew, Alham Fikri Aji, Israel Abebe Azime, Jinheon Baek, Frederico Belcavello, Fermin Cristobal, Jan Christian Blaise Cruz, Mary Dabre, Raj Dabre, Toqeer Ehsan, Naome A Etori, Fauzan Farooqui, Jiahui Geng, Guido Ivetta, Thanmay Jayakumar, Soyeong Jeong, Zheng Wei Lim, Aishik Mandal, Sofia Martinelli, Mihail Minkov Mihaylov, Daniil Orel, Aniket Pramanick, Sukannya Purkayastha, Israfel Salazar, Haiyue Song, Tiago Timponi Torrent, Debela Desalegn Yadeta, Injy Hamed, Atnafu Lambebo Tonja, Thamar Solorio",
                        conference: "EMNLP 2025 (Findings)",
                        venue: "Empirical Methods on Natural Language Processing"
                    },
                    {
                        title: "SHADES: Towards a multilingual assessment of stereotypes in large language models",
                        authors: "Margaret Mitchell, Giuseppe Attanasio, Ioana Baldini, Miruna Clinciu, Jordan Clive, Pieter Delobelle, Manan Dey, Sil Hamilton, Timm Dill, Jad Doughman, Ritam Dutt, Avijit Ghosh, Jessica Zosa Forde, Carolin Holtermann, Lucie-Aimée Kaffee, Tanmay Laud, Anne Lauscher, Roberto L Lopez-Davila, Maraim Masoud, Nikita Nangia, Anaelia Ovalle, Giada Pistilli, Dragomir Radev, Beatrice Savoldi, Vipul Raheja, Jeremy Qin, Esther Ploeger, Arjun Subramonian, Kaustubh Dhole, Kaiser Sun, Amirbek Djanibekov, Jonibek Mansurov, Kayo Yin, Emilio Villa Cueva, Sagnik Mukherjee, Jerry Huang, Xudong Shen, Jay Gala, Hamdan Al-Ali, Tair Djanibekov, Nurdaulet Mukhituly, Shangrui Nie, Shanya Sharma, Karolina Stańczak, Eliza Szczechla, Tiago Timponi Torrent, Deepak Tunuguntla, Marcelo Viridiano, Oskar Van Der Wal, Adina Yakefu, Aurélie Névéol, Mike Zhang, Sydney Zink, Zeerak Talat",
                        conference: "NAACL 2025",
                        venue: "Nations of the Americas Chapter of the Association for Computational Linguistics"
                    },

                    {
                        title: "Adaptive Cross-lingual Text Classification through In-Context One-Shot Demonstrations",
                        authors: "Emilio Villa-Cueva, Adrian López-Monroy, Fernando Sánchez Vega, Thamar Solorio",
                        conference: "NAACL 2024",
                        venue: "North American Chapter of the Association for Computational Linguistics"
                    },
                    {
                        title: "CVQA: Culturally-diverse multilingual visual question answering benchmark",
                        authors: "David Romero, Chenyang Lyu, Haryo Akbarianto Wibowo, Teresa Lynn, Injy Hamed, Aditya Nanda Kishore, Aishik Mandal, Alina Dragonetti, Artem Abzaliev, Atnafu Lambebo Tonja, Bontu Fufa Balcha, Chenxi Whitehouse, Christian Salamea, Dan John Velasco, David Ifeoluwa Adelani, David Le Meur, Emilio Villa-Cueva, Fajri Koto, Fauzan Farooqui, Frederico Belcavello, Ganzorig Batnasan, Gisela Vallejo, Grainne Caulfield, Guido Ivetta, Haiyue Song, Henok Biadglign Ademtew, Hernán Maina, Holy Lovenia, Israel Abebe Azime, Jan Christian Blaise Cruz, Jay Gala, Jiahui Geng, Jesus-German Ortiz-Barajas, Jinheon Baek, Jocelyn Dunstan, Laura Alonso Alemany, Kumaranage Ravindu Yasas Nagasinghe, Luciana Benotti, Luis Fernando d'Haro, Marcelo Viridiano, Marcos Estecha-Garitagoitia, Maria Camila Buitrago Cabrera, Mario Rodríguez-Cantelar, Mélanie Jouitteau, Mihail Mihaylov, Mohamed Fazli Mohamed Imam, Muhammad Farid Adilazuarda, Munkhjargal Gochoo, Munkh-Erdene Otgonbold, Naome Etori, Olivier Niyomugisha, Paula Mónica Silva, Pranjal Chitale, Raj Dabre, Rendi Chevi, Ruochen Zhang, Ryandito Diandaru, Samuel Cahyawijaya, Santiago Góngora, Soyeong Jeong, Sukannya Purkayastha, Tatsuki Kuribayashi, Teresa Clifford, Thanmay Jayakumar, Tiago Timponi Torrent, Toqeer Ehsan, Vladimir Araujo, Yova Kementchedjhieva, Zara Burzo, Zheng Wei Lim, Zheng Xin Yong, Oana Ignat, Joan Nwatu, Rada Mihalcea, Thamar Solorio, Alham Fikri Aji",
                        conference: "NeurIPS 2024",
                        venue: "Neural Information Processing Systems"
                    },
                    {
                        title: "PolitiBETO, a Domain-Adapted Transformer for Multi-class Political Author Profiling",
                        authors: "Emilio Villa-Cueva, Ivan González-Franco, Fernando Sanchez-Vega, Adrián Pastor López-Monroy",
                        conference: "IberLEF 2022",
                        venue: "IberLEF"
                    }
                ]
            }
        },
        {
            id: "contact",
            title: "Contact",
            content: {
                type: "contact",
                email: "evillacueva [at] gmail [dot] com / emilio.villa [at] mbzuai [dot] ac [dot] ae",
                x: "evllcv",
                linkedIn: "emilio-villa-cueva",
                location: "Abu Dhabi, UAE"
            }
        }
    ]
};

// Create profile section
function createProfileSection(profile) {
    return `
        <div class="profile-section fade-in">
            <div class="profile">
                <img src="${profile.image}" alt="${profile.name} Profile Photo">
            </div>
            <div class="profile-info">
                <h1 class="profile-name">${profile.name}</h1>
                <p class="profile-title">${profile.title}</p>
            </div>
        </div>
    `;
}

// Create tabs
function createTabs(tabs) {
    return `
        <div class="tabs fade-in" style="animation-delay: 0.2s">
            ${tabs.map((tab, index) => `
                <button class="tab ${index === 0 ? 'active' : ''}" data-tab="${tab.id}" aria-label="${tab.title} tab">
                    ${tab.title}
                </button>
            `).join('')}
        </div>
    `;
}

// Create about content
function createAboutContent(content) {
    return `
        <div class="section fade-in">
            <h1>About Me</h1>
            <div class="about-text">
                ${content.body.replace(/\<\/p\>\<p\>/g, '<br><br>')}
            </div>
            <div class="profile-links">
                ${content.buttons.map(button => `
                    <a href="${button.link}" class="profile-button ${button.class}" aria-label="${button.text}">
                        <span class="button-text">${button.text}</span>
                        <span class="button-icon">${button.icon}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

// Create research content
function createResearchContent(content) {
    return `
        <div class="section fade-in">
            <h1>Research</h1>
            <div class="research-interests">
                <h2>Research Interests</h2>
                <p>${content.interests}</p>
            </div>
            <div class="publications">
                <h2>Publications</h2>
                ${content.publications.map(pub => {
                    // Handle long author lists
                    let authorDisplay = '';
                    if (pub.authors.length > 150) {
                        const firstAuthor = pub.authors.split(',')[0];
                        authorDisplay = `
                            <div class="authors-wrapper">
                                <div class="authors-short">${firstAuthor} et al.</div>
                                <div class="authors-full">${pub.authors}</div>
                                <button class="toggle-authors" data-action="expand">Show all authors</button>
                            </div>
                        `;
                    } else {
                        authorDisplay = `<div>${pub.authors}</div>`;
                    }
                    
                    return `
                        <div class="publication">
                            <p class="publication-title">${pub.title}</p>
                            <p class="publication-authors">${authorDisplay}</p>
                            <p class="publication-venue">
                                In <span class="conference">${pub.conference}</span>: ${pub.venue}
                            </p>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Create contact content
function createContactContent(content) {
    return `
        <div class="section fade-in">
            <h1>Contact</h1>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-info">
                    <div class="contact-label">Email</div>
                    <div class="contact-value">${content.email}</div>
                </div>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-info">
                    <div class="contact-label">Location</div>
                    <div class="contact-value">${content.location}</div>
                </div>
            </div>
            
            <div class="social-links">
                <a href="https://twitter.com/${content.x}" class="social-link" aria-label="Twitter/X Profile" target="_blank">
                    <i class="fa-solid fa-x"></i>
                </a>
                <a href="https://linkedin.com/in/${content.linkedIn}" class="social-link" aria-label="LinkedIn Profile" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://scholar.google.com/citations?user=uYz6zaIAAAAJ" class="social-link" aria-label="Google Scholar Profile" target="_blank">
                    <i class="fas fa-graduation-cap"></i>
                </a>
            </div>
        </div>
    `;
}

// Create content container
function createContent(tabs) {
    return `
        <div class="content-container">
            ${tabs.map((tab, index) => `
                <div class="content ${index === 0 ? 'active' : ''}" id="${tab.id}">
                    ${
                        tab.content.type === 'text' ? createAboutContent(tab.content) :
                        tab.content.type === 'research' ? createResearchContent(tab.content) :
                        createContactContent(tab.content)
                    }
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize the website
function initializeWebsite() {
    const appContainer = document.getElementById('app');
    
    // Show loader
    appContainer.innerHTML = '<span class="loader"></span>';
    
    // Delay to simulate loading and allow for smooth animations
    setTimeout(() => {
        appContainer.innerHTML = `
            ${createProfileSection(config.profile)}
            ${createTabs(config.tabs)}
            ${createContent(config.tabs)}
        `;

        // Set initial data attribute
        document.body.setAttribute('data-active-tab', 'about');
        
        // Adjust body height based on content
        adjustBodyHeight();

        // Initialize tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const currentContent = document.querySelector('.content.active');
                const newContent = document.getElementById(tab.dataset.tab);
                
                if (currentContent === newContent) return;

                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Set data attribute on body for CSS targeting
                document.body.setAttribute('data-active-tab', tab.dataset.tab);

                currentContent.style.opacity = 0;
                currentContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    currentContent.classList.remove('active');
                    newContent.classList.add('active');
                    
                    setTimeout(() => {
                        newContent.style.opacity = 1;
                        newContent.style.transform = 'translateY(0)';
                        
                        // Adjust body height based on content
                        adjustBodyHeight();
                    }, 50);
                }, 200);
            });
        });

        // Initialize author toggling
        document.querySelectorAll('.toggle-authors').forEach(button => {
            button.addEventListener('click', function() {
                const wrapper = this.closest('.authors-wrapper');
                const shortVersion = wrapper.querySelector('.authors-short');
                const fullVersion = wrapper.querySelector('.authors-full');
                
                if (this.dataset.action === 'expand') {
                    shortVersion.style.display = 'none';
                    fullVersion.style.display = 'block';
                    this.textContent = 'Show less';
                    this.dataset.action = 'collapse';
                } else {
                    shortVersion.style.display = 'block';
                    fullVersion.style.display = 'none';
                    this.textContent = 'Show all authors';
                    this.dataset.action = 'expand';
                }
            });
        });
    }, 800);
}

// Function to adjust the body height based on active tab content
function adjustBodyHeight() {
    setTimeout(() => {
        const activeContent = document.querySelector('.content.active');
        if (activeContent) {
            const contentHeight = activeContent.offsetHeight;
            const tabsOffset = document.querySelector('.tabs').offsetTop;
            const profileHeight = document.querySelector('.profile-section').offsetHeight;
            const viewportHeight = window.innerHeight;
            
            // Calculate total required height (with some padding)
            const requiredHeight = tabsOffset + contentHeight + 100;
            
            // Set min-height on html and body to prevent scrolling if content is shorter than viewport
            if (requiredHeight < viewportHeight) {
                document.documentElement.style.minHeight = '100vh';
                document.documentElement.style.overflow = 'hidden';
                document.body.style.minHeight = '100vh';
                document.body.style.overflow = 'hidden';
            } else {
                document.documentElement.style.minHeight = '';
                document.documentElement.style.overflow = '';
                document.body.style.minHeight = '';
                document.body.style.overflow = '';
            }
        }
    }, 300); // Slight delay to ensure content is rendered
}

// Listen for window resize to readjust
window.addEventListener('resize', adjustBodyHeight);

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeWebsite);