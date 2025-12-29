// Constants
const COUNTER_DURATION = 2000;
const COUNTER_STEPS = 60;

const TRANSLATIONS = {
    noResults: {
        en: 'No breaches found matching your criteria',
        bg: 'Не са намерени пробиви, отговарящи на вашите критерии'
    },
    viewSource: {
        en: 'View Source →',
        bg: 'Виж източник →'
    },
    publicLabel: {
        en: 'Public',
        bg: 'Публичен'
    },
    privateLabel: {
        en: 'Private',
        bg: 'Частен'
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
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--danger);">
            Failed to load breach data. Please try refreshing the page.
        </div>
    `;
}

// Cache DOM elements
function cacheElements() {
    elements.container = document.getElementById('leaks-container');
    elements.searchInput = document.getElementById('search-input');
    elements.modal = document.getElementById('image-modal');
    elements.modalImage = document.getElementById('modal-image');
    elements.prevBtn = document.getElementById('prev-img');
    elements.nextBtn = document.getElementById('next-img');
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

// Update statistics
function updateStats() {
    const { data } = state;
    const stats = {
        total: data.length,
        public: data.filter(leak => leak.type.includes('public')).length,
        private: data.filter(leak => leak.type === 'private').length
    };

    animateCounter('total-leaks', stats.total);
    animateCounter('public-leaks', stats.public);
    animateCounter('private-leaks', stats.private);
}

// Animate counter
function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
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
        // Type filter
        const typeMatch = state.filter === 'all' || leak.type.includes(state.filter);

        // Search filter
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
        elements.container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                ${t('noResults')}
            </div>
        `;
        return;
    }

    elements.container.innerHTML = filteredLeaks
        .map(leak => createLeakCard(leak))
        .join('');

    // Event delegation for images
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
                     alt="${leak.organization}"
                     class="leak-image-thumb"
                     data-leak-id="${leak.id}"
                     data-image-index="${index}">
            `).join('')}
        </div>
    ` : '';

    return `
        <div class="leak-card">
            <div class="leak-header">
                <div class="leak-org">${leak.organization}</div>
                <div class="leak-type ${typeClass}">${typeLabel}</div>
            </div>
            <div class="leak-description">${description}</div>
            ${imagesHTML}
            <a href="${leak.source}" target="_blank" rel="noopener noreferrer" class="leak-source">
                ${t('viewSource')}
            </a>
        </div>
    `;
}

// Modal functionality
function initializeModal() {
    document.querySelector('.close-btn').addEventListener('click', closeImageModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeImageModal();
    });

    elements.prevBtn.addEventListener('click', () => navigateImage(-1));
    elements.nextBtn.addEventListener('click', () => navigateImage(1));

    // Keyboard navigation
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
    const dataLoaded = await loadBreachesData();
    if (dataLoaded) {
        initializeLanguageToggle();
        initializeFilters();
        initializeSearch();
        initializeModal();
        renderLeaks();
        updateStats();
    }
});
