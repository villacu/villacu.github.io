// Website: externalized content + optional publication TL;DR modal
// Loads data from data/content.json so you (or future you!) never need to touch this file to add publications.
(function () {
  'use strict';

  // ---------- Utilities ----------
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj || {}, key);

  // Accessibility: lock/unlock body scroll when modal is open
  const ScrollLock = (() => {
    let lockCount = 0;
    const lock = () => {
      if (lockCount++ === 0) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      }
    };
    const unlock = () => {
      if (lockCount > 0 && --lockCount === 0) {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    };
    return { lock, unlock };
  })();

  // ---------- Renderers ----------
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

  function createAboutContent(content) {
    return `
      <div class="section fade-in">
        <h1>About Me</h1>
        <div class="about-text">
          ${String(content.body || '').replace(/\<\/p\>\<p\>/g, '<br><br>')}
        </div>
        ${Array.isArray(content.buttons) && content.buttons.length ? `
          <div class="profile-links">
            ${content.buttons.map(button => `
              <a href="${button.link}" class="profile-button ${button.class || ''}" aria-label="${button.text}" target="_blank" rel="noopener">
                <span class="button-text">${button.text}</span>
                <span class="button-icon">${button.icon || ''}</span>
              </a>
            `).join('')}
          </div>` : ''}
      </div>
    `;
  }

  function publicationActions(pub) {
    const actions = [
      ['paper', 'Paper', '<i class="fa-regular fa-file-lines"></i>'],
      ['code', 'Code', '<i class="fa-brands fa-github"></i>'],
      ['dataset', 'Dataset', '<i class="fa-solid fa-database"></i>'],
      ['project', 'Project', '<i class="fa-solid fa-globe"></i>'],
      ['pdf', 'PDF', '<i class="fa-regular fa-file-pdf"></i>']
    ];
    return actions
      .filter(([k]) => pub && pub[k])
      .map(([k, label, icon]) => `<a class="chip-link" href="${pub[k]}" target="_blank" rel="noopener">${icon}<span>${label}</span></a>`)
      .join('');
  }

  function createResearchContent(content) {
    const pubs = Array.isArray(content.publications) ? content.publications.slice() : [];
    // Sort newest first if year exists
    pubs.sort((a, b) => (b.year || 0) - (a.year || 0));

    return `
      <div class="section fade-in">
        <h1>Research</h1>
        <div class="research-interests">
          <h2>Research Interests</h2>
          <p>${content.interests || ''}</p>
        </div>

        <div class="publications">
          <h2>Publications</h2>
          ${pubs.map((pub, idx) => {
            const isClickable = !!(pub.tldr || pub.image);
            // Handle long author lists (same behavior as your original file)
            let authorDisplay = '';
            if (pub.authors && pub.authors.length > 150) {
              const firstAuthor = pub.authors.split(',')[0];
              authorDisplay = `
                <div class="authors-wrapper">
                  <div class="authors-short">${firstAuthor} et al.</div>
                  <div class="authors-full">${pub.authors}</div>
                  <button class="toggle-authors" data-action="expand">Show all authors</button>
                </div>
              `;
            } else {
              authorDisplay = `<div>${pub.authors || ''}</div>`;
            }

            return `
              <div class="publication ${isClickable ? 'publication--clickable' : ''}" ${isClickable ? `data-index="${idx}" tabindex="0" role="button" aria-label="Open summary for ${pub.title}"` : ''}>
                <p class="publication-title">
                  ${pub.title}
                  ${pub.year ? `<span class="pill-year">${pub.year}</span>` : ''}
                </p>
                <p class="publication-authors">${authorDisplay}</p>
                <p class="publication-venue">
                  In <span class="conference">${pub.conference || ''}</span>${pub.venue ? `: ${pub.venue}` : ''}
                </p>
                ${publicationActions(pub) ? `<div class="pub-actions">${publicationActions(pub)}</div>` : ''}
                ${isClickable ? `<div class="pub-hint">Click to view TL;DR</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function createContactContent(content) {
    return `
      <div class="section fade-in">
        <h1>Contact</h1>

        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-envelope"></i></div>
          <div class="contact-info">
            <div class="contact-label">Email</div>
            <div class="contact-value">${content.email || ''}</div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
          <div class="contact-info">
            <div class="contact-label">Location</div>
            <div class="contact-value">${content.location || ''}</div>
          </div>
        </div>

        <div class="social-links">
          ${content.x ? `<a href="https://twitter.com/${content.x}" class="social-link" aria-label="Twitter/X Profile" target="_blank" rel="noopener"><i class="fa-solid fa-x"></i></a>` : ''}
          ${content.linkedIn ? `<a href="https://linkedin.com/in/${content.linkedIn}" class="social-link" aria-label="LinkedIn Profile" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>` : ''}
          <a href="https://scholar.google.com/citations?user=uYz6zaIAAAAJ" class="social-link" aria-label="Google Scholar Profile" target="_blank" rel="noopener"><i class="fas fa-graduation-cap"></i></a>
        </div>
      </div>
    `;
  }

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

  // ---------- Modal ----------
  function ensureModalRoot() {
    let root = $('#pub-modal-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'pub-modal-root';
      document.body.appendChild(root);
    }
    return root;
  }

  function openPublicationModal(pub) {
    const root = ensureModalRoot();
    root.innerHTML = `
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="modal">
          <button class="modal-close" aria-label="Close dialog"><i class="fa-solid fa-xmark"></i></button>
          <div class="modal-header">
            <h3 class="modal-title">${pub.title}</h3>
            ${pub.year ? `<span class="pill-year">${pub.year}</span>` : ''}
          </div>
          ${pub.authors ? `<p class="modal-authors">${pub.authors}</p>` : ''}
          ${pub.conference || pub.venue ? `<p class="modal-venue">In <span class="conference">${pub.conference || ''}</span>${pub.venue ? `: ${pub.venue}` : ''}</p>` : ''}
          ${pub.image ? `<div class="modal-image"><img alt="Illustration for ${pub.title}" src="${pub.image}"></div>` : ''}
          ${pub.tldr ? `<div class="modal-tldr"><h4>TL;DR</h4><p>${pub.tldr}</p></div>` : ''}
          ${publicationActions(pub) ? `<div class="modal-actions">${publicationActions(pub)}</div>` : ''}
          ${pub.bibtex ? `<button class="copy-bibtex" data-bib='${(pub.bibtex || '').replace(/'/g, '&#39;')}'>Copy BibTeX</button>` : ''}
        </div>
      </div>
    `;

    const close = () => {
      root.innerHTML = '';
      ScrollLock.unlock();
    };

    $('.modal-close', root).addEventListener('click', close);
    $('.modal-backdrop', root).addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) close();
    });
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape') {
        document.removeEventListener('keydown', onEsc);
        close();
      }
    });

    const copyBtn = $('.copy-bibtex', root);
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const bib = copyBtn.getAttribute('data-bib');
        navigator.clipboard.writeText(bib).then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => (copyBtn.textContent = 'Copy BibTeX'), 1500);
        });
      });
    }

    ScrollLock.lock();
  }

  // ---------- Layout helpers ----------
  function adjustBodyHeight() {
    setTimeout(() => {
      const activeContent = $('.content.active');
      if (activeContent) {
        const contentHeight = activeContent.offsetHeight;
        const tabsOffset = $('.tabs').offsetTop;
        const viewportHeight = window.innerHeight;
        const requiredHeight = tabsOffset + contentHeight + 100;

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
    }, 300);
  }

  function initializeInteractivity(config) {
    // Tabs
    $$('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const currentContent = $('.content.active');
        const newContent = document.getElementById(tab.dataset.tab);
        if (currentContent === newContent) return;

        $$('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        document.body.setAttribute('data-active-tab', tab.dataset.tab);
        currentContent.style.opacity = 0;
        currentContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
          currentContent.classList.remove('active');
          newContent.classList.add('active');

          setTimeout(() => {
            newContent.style.opacity = 1;
            newContent.style.transform = 'translateY(0)';
            adjustBodyHeight();
          }, 50);
        }, 200);
      });
    });

    // Author show/hide toggles
    $$('.toggle-authors').forEach(button => {
      button.addEventListener('click', function () {
        const wrapper = this.closest('.authors-wrapper');
        const shortVersion = $('.authors-short', wrapper);
        const fullVersion = $('.authors-full', wrapper);

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

    // Publication modal triggers
    const researchTab = config.tabs.find(t => t.id === 'research');
    const pubs = researchTab && researchTab.content && Array.isArray(researchTab.content.publications) ? researchTab.content.publications : [];
    $$('.publication.publication--clickable').forEach(el => {
      const index = parseInt(el.getAttribute('data-index'), 10);
      const pub = pubs[index];
      if (!pub) return;
      const handler = () => openPublicationModal(pub);
      el.addEventListener('click', handler);
      el.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') handler();
      });
    });
  }

  function render(config) {
    const app = $('#app');
    app.innerHTML = '<span class="loader"></span>';
    setTimeout(() => {
      app.innerHTML = `
        ${createProfileSection(config.profile)}
        ${createTabs(config.tabs)}
        ${createContent(config.tabs)}
      `;
      document.body.setAttribute('data-active-tab', 'about');
      adjustBodyHeight();
      initializeInteractivity(config);
    }, 300);
  }

  // ---------- Boot ----------
  async function boot() {
    const app = $('#app');
    app.innerHTML = '<span class="loader"></span>';
    try {
      const res = await fetch('data/content.json', { cache: 'no-store' });
      const config = await res.json();
      render(config);
      window.__SITE_CONFIG__ = config; // expose for debugging
    } catch (err) {
      console.error('Failed to load content.json', err);
      app.innerHTML = `<div class="section"><h1>Oops</h1><p>Could not load content.json. Please ensure it exists at <code>data/content.json</code>.</p></div>`;
    }
  }

  window.addEventListener('resize', adjustBodyHeight);
  document.addEventListener('DOMContentLoaded', boot);
})();