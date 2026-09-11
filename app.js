// Constants
const COUNTER_DURATION = 1200;
const COUNTER_STEPS = 60;
const RANSOMWARE_API = 'https://api-pro.ransomware.live/v2';
// Injected at deploy time from the GITHUB secret RANSOMWARE_API_KEY (see
// .github/workflows/deploy.yml) — never commit a real token in its place.
const RANSOMWARE_API_KEY = '__RANSOMWARE_API_KEY__';
const FEED_REFRESH_MS = 60 * 60 * 1000; // 60 minutes
const FEED_COUNTRY = 'BG';
const FEED_MAX_ITEMS = 8;

const TRANSLATIONS = {
    noResults: {
        en: 'No breaches found matching your criteria',
        bg: 'Не са намерени пробиви, отговарящи на вашите критерии'
    },
    viewSource: {
        en: 'View source →',
        bg: 'Виж източник →'
    },
    publicLabel: {
        en: 'Public',
        bg: 'Публичен'
    },
    privateLabel: {
        en: 'Private',
        bg: 'Частен'
    },
    feedLoading: {
        en: 'Loading live feed…',
        bg: 'Зареждане на емисията…'
    },
    feedError: {
        en: "Couldn't reach the Ransomware.live API right now.",
        bg: 'В момента API на Ransomware.live не е достъпно.'
    },
    feedEmpty: {
        en: 'No Bulgarian victims in the most recent disclosures.',
        bg: 'Няма български жертви сред най-новите разкрития.'
    },
    unknownSector: {
        en: 'Unspecified sector',
        bg: 'Неуточнен сектор'
    }
};

// Global state
let state = {
    language: 'en',
    filter: 'all',
    imageSet: [],
    imageIndex: 0,
    data: []
};

// Cached DOM elements
const elements = {};

// Helper: Get translation
const t = (key) => TRANSLATIONS[key]?.[state.language] || '';

// Load data from breaches.json
async function loadBreachesData() {
    try {
        const response = await fetch('breaches.json');
        if (!response.ok) throw new Error(`Failed to load breaches.json: ${response.status}`);
        const data = await response.json();
        state.data = data.breaches;
        return true;
    } catch (error) {
        console.error('Error loading breaches data:', error);
        showErrorMessage();
        return false;
    }
}

// Show error message
function showErrorMessage() {
    elements.container.innerHTML = `
        <div class="no-results">
            Failed to load breach data. Please try refreshing the page.
        </div>
    `;
}

// Cache DOM elements
function cacheElements() {
    elements.container = document.getElementById('leaks-container');
    elements.sourcesContainer = document.getElementById('sources-container');
    elements.feedContainer = document.getElementById('feed-container');
    elements.searchInput = document.getElementById('search-input');
    elements.modal = document.getElementById('image-modal');
    elements.modalImage = document.getElementById('modal-image');
    elements.prevBtn = document.getElementById('prev-img');
    elements.nextBtn = document.getElementById('next-img');
    elements.navToggle = document.getElementById('nav-toggle');
    elements.navMobile = document.getElementById('nav-mobile');
}

// Unified button toggle handler
function initializeToggleButtons(selector, attribute, callback) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.getAttribute(attribute);
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            callback(value);
        });
    });
}

// Initialize language toggle
function initializeLanguageToggle() {
    initializeToggleButtons('.lang-btn', 'data-lang', (lang) => {
        if (lang !== state.language) {
            state.language = lang;
            updateTranslations();
            renderLeaks();
            renderFeed(state.lastFeedItems, state.lastFeedStatus);
        }
    });
}

// Update translatable elements
function updateTranslations() {
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        const attr = el.tagName === 'INPUT' ? 'placeholder' : 'textContent';
        const key = el.tagName === 'INPUT' ? `data-lang-${state.language}-placeholder` : `data-lang-${state.language}`;
        el[attr] = el.getAttribute(key);
    });
}

// Initialize filters
function initializeFilters() {
    initializeToggleButtons('.filter-btn', 'data-filter', (filter) => {
        state.filter = filter;
        renderLeaks();
    });
}

// Initialize search
function initializeSearch() {
    elements.searchInput.addEventListener('input', (e) => {
        renderLeaks(e.target.value.toLowerCase());
    });
}

// Initialize mobile nav
function initializeMobileNav() {
    elements.navToggle.addEventListener('click', () => {
        elements.navToggle.classList.toggle('open');
        elements.navMobile.classList.toggle('open');
    });
    elements.navMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            elements.navToggle.classList.remove('open');
            elements.navMobile.classList.remove('open');
        });
    });
}

// Update statistics
function updateStats() {
    const { data } = state;
    const stats = {
        total: data.length,
        public: data.filter(leak => leak.type.includes('public')).length,
        private: data.filter(leak => leak.type === 'private').length,
        sources: getUniqueDomains(data).length
    };

    animateCounter('total-leaks', stats.total);
    animateCounter('public-leaks', stats.public);
    animateCounter('private-leaks', stats.private);
    animateCounter('sources-count', stats.sources);
}

// Animate counter
function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    const stepValue = targetValue / COUNTER_STEPS;
    let currentValue = 0;

    const timer = setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= targetValue) {
            element.textContent = targetValue;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, COUNTER_DURATION / COUNTER_STEPS);
}

// Filter leaks
function getFilteredLeaks(searchTerm = '') {
    return state.data.filter(leak => {
        const typeMatch = state.filter === 'all' || leak.type.includes(state.filter);

        const searchMatch = !searchTerm ||
            `${leak.organization} ${leak.description.en} ${leak.description.bg} ${leak.source}`
            .toLowerCase()
            .includes(searchTerm);

        return typeMatch && searchMatch;
    });
}

// Render leak cards
function renderLeaks(searchTerm = '') {
    const filteredLeaks = getFilteredLeaks(searchTerm);

    if (filteredLeaks.length === 0) {
        elements.container.innerHTML = `<div class="no-results">${t('noResults')}</div>`;
        return;
    }

    elements.container.innerHTML = filteredLeaks
        .map(leak => createLeakCard(leak))
        .join('');

    elements.container.removeEventListener('click', handleImageClick);
    elements.container.addEventListener('click', handleImageClick);
}

// Handle image click (event delegation)
function handleImageClick(e) {
    if (e.target.classList.contains('leak-image-thumb')) {
        const leakId = parseInt(e.target.dataset.leakId);
        const imageIndex = parseInt(e.target.dataset.imageIndex);
        openImageModal(leakId, imageIndex);
    }
}

// Create leak card HTML
function createLeakCard(leak) {
    const typeClass = leak.type.includes('public') ? 'public' : 'private';
    const typeLabel = t(typeClass + 'Label');
    const description = leak.description[state.language];

    const imagesHTML = leak.images?.length ? `
        <div class="leak-images">
            ${leak.images.map((img, index) => `
                <img src="${img}"
                     alt="${escapeHtml(leak.organization)}"
                     class="leak-image-thumb"
                     data-leak-id="${leak.id}"
                     data-image-index="${index}"
                     loading="lazy">
            `).join('')}
        </div>
    ` : '';

    return `
        <div class="leak-card">
            <div class="leak-header">
                <div class="leak-org">${escapeHtml(leak.organization)}</div>
                <div class="leak-type ${typeClass}">${typeLabel}</div>
            </div>
            <div class="leak-description">${escapeHtml(description)}</div>
            ${imagesHTML}
            <a href="${leak.source}" target="_blank" rel="noopener noreferrer" class="leak-source">
                ${t('viewSource')}
            </a>
        </div>
    `;
}

function escapeHtml(str = '') {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ---------------------------------------------------------------
// Sources section — unique domains referenced across all entries
// ---------------------------------------------------------------
function getUniqueDomains(data) {
    const domains = new Set();
    data.forEach(leak => {
        try {
            const host = new URL(leak.source).hostname.replace(/^www\./, '');
            if (host) domains.add(host);
        } catch (e) {
            // skip malformed URLs
        }
    });
    return Array.from(domains).sort((a, b) => a.localeCompare(b));
}

function renderSources() {
    const domains = getUniqueDomains(state.data);
    if (domains.length === 0) {
        elements.sourcesContainer.innerHTML = '';
        return;
    }
    elements.sourcesContainer.innerHTML = domains.map(domain => {
        const isOnion = domain.endsWith('.onion');
        return `<span class="source-chip${isOnion ? ' onion' : ''}">${escapeHtml(domain)}</span>`;
    }).join('');
}

// ---------------------------------------------------------------
// Live feed — Ransomware.live recent victims, filtered to Bulgaria
// ---------------------------------------------------------------
async function loadRansomwareFeed() {
    try {
        const response = await fetch(`${RANSOMWARE_API}/recentvictims`, {
            headers: { 'X-Api-Key': RANSOMWARE_API_KEY }
        });
        if (!response.ok) throw new Error(`Ransomware.live API error: ${response.status}`);
        const items = await response.json();

        const bgVictims = (Array.isArray(items) ? items : [])
            .filter(v => (v.country || '').toUpperCase() === FEED_COUNTRY)
            .slice(0, FEED_MAX_ITEMS);

        state.lastFeedItems = bgVictims;
        state.lastFeedStatus = 'ok';
        renderFeed(bgVictims, 'ok');
    } catch (error) {
        console.error('Error loading Ransomware.live feed:', error);
        state.lastFeedItems = [];
        state.lastFeedStatus = 'error';
        renderFeed([], 'error');
    }
}

function formatFeedDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString(state.language === 'bg' ? 'bg-BG' : 'en-GB', {
        year: 'numeric', month: 'short', day: 'numeric'
    });
}

function renderFeed(items, status) {
    if (!elements.feedContainer) return;

    if (status === undefined || status === null) {
        elements.feedContainer.innerHTML = `<div class="feed-loading">${t('feedLoading')}</div>`;
        return;
    }

    if (status === 'error') {
        elements.feedContainer.innerHTML = `<div class="feed-error">${t('feedError')}</div>`;
        return;
    }

    if (!items || items.length === 0) {
        elements.feedContainer.innerHTML = `<div class="feed-empty">${t('feedEmpty')}</div>`;
        return;
    }

    elements.feedContainer.innerHTML = items.map(item => {
        const victim = escapeHtml(item.victim || item.post_title || 'Unknown');
        const group = escapeHtml(item.group || item.group_name || '—');
        const sector = escapeHtml(item.sector || t('unknownSector'));
        const date = formatFeedDate(item.attackdate || item.discovered || item.published);
        return `
            <div class="feed-item">
                <div>
                    <div class="feed-victim">${victim}</div>
                    <div class="feed-meta">${sector}</div>
                </div>
                <span class="feed-group">${group}</span>
                <span class="feed-date">${date}</span>
            </div>
        `;
    }).join('');
}

function initializeLiveFeed() {
    renderFeed(null, undefined);
    loadRansomwareFeed();
    setInterval(loadRansomwareFeed, FEED_REFRESH_MS);
}

// Modal functionality
function initializeModal() {
    document.querySelector('.close-btn').addEventListener('click', closeImageModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeImageModal();
    });

    elements.prevBtn.addEventListener('click', () => navigateImage(-1));
    elements.nextBtn.addEventListener('click', () => navigateImage(1));

    document.addEventListener('keydown', (e) => {
        if (!elements.modal.classList.contains('active')) return;

        const actions = {
            'Escape': closeImageModal,
            'ArrowLeft': () => navigateImage(-1),
            'ArrowRight': () => navigateImage(1)
        };

        actions[e.key]?.();
    });
}

function openImageModal(leakId, imageIndex) {
    const leak = state.data.find(l => l.id === leakId);
    if (!leak?.images?.length) return;

    state.imageSet = leak.images;
    state.imageIndex = imageIndex;

    elements.modalImage.src = state.imageSet[state.imageIndex];
    elements.modal.classList.add('active');
    updateModalNavigation();
}

function closeImageModal() {
    elements.modal.classList.remove('active');
    state.imageSet = [];
    state.imageIndex = 0;
}

function navigateImage(direction) {
    const newIndex = state.imageIndex + direction;
    if (newIndex < 0 || newIndex >= state.imageSet.length) return;

    state.imageIndex = newIndex;
    elements.modalImage.src = state.imageSet[state.imageIndex];
    updateModalNavigation();
}

function updateModalNavigation() {
    elements.prevBtn.disabled = state.imageIndex === 0;
    elements.nextBtn.disabled = state.imageIndex === state.imageSet.length - 1;
}

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    cacheElements();
    initializeMobileNav();
    const dataLoaded = await loadBreachesData();
    if (dataLoaded) {
        initializeLanguageToggle();
        initializeFilters();
        initializeSearch();
        initializeModal();
        renderLeaks();
        renderSources();
        updateStats();
    }
    initializeLiveFeed();
});
