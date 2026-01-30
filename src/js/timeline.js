// Timeline interactive functionality
class TimelineController {
  constructor() {
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.events = document.querySelectorAll('.timeline-event');
    this.visibleCount = document.getElementById('visible-count');
    this.searchInput = document.querySelector('#search-input');
    this.currentFilter = 'all';
    this.searchTerm = '';
    
    this.init();
  }

  init() {
    this.setupFilterButtons();
    this.setupSearch();
    this.setupIntersectionObserver();
    this.setupScrollEffects();
    this.setupKeyboardNavigation();
    this.addParticleEffects();
  }

  setupFilterButtons() {
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        this.setActiveFilter(category);
        this.filterEvents();
      });
    });
  }

  setActiveFilter(category) {
    this.currentFilter = category;
    
    // Update active state
    this.filterBtns.forEach(btn => {
      btn.classList.remove('ring-2', 'ring-offset-2', 'ring-blue-500', 'scale-95');
      if (btn.dataset.category === category) {
        btn.classList.add('ring-2', 'ring-offset-2', 'ring-blue-500');
      }
      const pressed = btn.dataset.category === category ? 'true' : 'false';
      btn.setAttribute('aria-pressed', pressed);
    });
  }

  setupSearch() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase();
        this.filterEvents();
      });
    }
  }

  filterEvents() {
    let count = 0;
    
    this.events.forEach(event => {
      const matchesCategory = this.currentFilter === 'all' || 
                            event.dataset.category === this.currentFilter;
      const matchesSearch = !this.searchTerm || 
                           event.textContent.toLowerCase().includes(this.searchTerm);
      
      if (matchesCategory && matchesSearch) {
        event.style.display = 'block';
        event.classList.add('animate-fade-in');
        count++;
      } else {
        event.style.display = 'none';
      }
    });
    
    if (this.visibleCount) {
      this.visibleCount.textContent = count;
    }
    
    // Animate the count change
    if (this.visibleCount) {
      this.visibleCount.classList.add('animate-pulse');
      setTimeout(() => {
        this.visibleCount.classList.remove('animate-pulse');
      }, 500);
    }
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          const idx = parseInt(entry.target.dataset.index || '0', 10);
          const delay = (idx % 10) * 50;
          entry.target.style.animationDelay = `${delay}ms`;
        }
      });
    }, observerOptions);
    
    this.events.forEach(event => observer.observe(event));
  }

  setupScrollEffects() {
    const timelineLine = document.querySelector('.timeline-line');
    let ticking = false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const updateScrollEffects = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (timelineLine && !prefersReducedMotion) {
        const speed = 0.5;
        const ty = scrollTop * speed;
        timelineLine.style.setProperty('--ty', `${ty}px`);
      }
      if (scrollTop > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScrollEffects);
      }
    }, { passive: true });
    updateScrollEffects();
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + F for search focus
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        if (this.searchInput) {
          this.searchInput.focus();
        }
      }
      
      // ESC to clear search
      if (e.key === 'Escape' && this.searchTerm) {
        this.searchTerm = '';
        if (this.searchInput) {
          this.searchInput.value = '';
        }
        this.filterEvents();
      }
      
      // Number keys to switch filters
      if (e.key >= '1' && e.key <= '7') {
        const filterIndex = parseInt(e.key) - 1;
        const filters = ['all', 'technology', 'framework', 'browser', 'organization', 'tool', 'milestone'];
        if (filters[filterIndex]) {
          this.setActiveFilter(filters[filterIndex]);
          this.filterEvents();
        }
      }
    });
  }

  addParticleEffects() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Add more particles on click
    document.addEventListener('click', (e) => {
      if (e.target.closest('.event-card')) return;
      
      for (let i = 0; i < 3; i++) {
        this.createParticle(e.clientX, e.clientY);
      }
    });
  }

  createParticle(x, y) {
    const particle = document.createElement('div');
    const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'];
    const size = Math.random() * 6 + 2;
    
    particle.className = 'particle';
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      animation: particleFade 1s ease-out forwards;
      z-index: 50;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  // Public methods
  scrollToYear(year) {
    const yearElement = document.querySelector(`[data-year="${year}"]`);
    if (yearElement) {
      yearElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Highlight the year
      yearElement.classList.add('animate-pulse');
      setTimeout(() => {
        yearElement.classList.remove('animate-pulse');
      }, 2000);
    }
  }

  exportTimeline() {
    const eventsData = Array.from(this.events).map(event => {
      const yearElement = event.closest('[data-year]');
      return {
        year: yearElement ? yearElement.dataset.year : 'unknown',
        title: event.querySelector('h3')?.textContent || '',
        description: event.querySelector('p')?.textContent || '',
        category: event.dataset.category,
        importance: event.dataset.importance
      };
    });
    
    const dataStr = JSON.stringify(eventsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'frontend-history-timeline.json';
    link.click();
    
    URL.revokeObjectURL(url);
  }
}

// Add particle fade animation to global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes particleFade {
    0% {
      opacity: 0.8;
      transform: translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(var(--tx, 0), var(--ty, -100px)) scale(0);
    }
  }
  
  .scrolled .sticky-header {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;
document.head.appendChild(style);

// Initialize with DOM readiness fallback
const initTimeline = () => {
  window.timelineController = new TimelineController();
  window.scrollToYear = (year) => window.timelineController.scrollToYear(year);
  window.exportTimeline = () => window.timelineController.exportTimeline();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimeline, { once: true });
} else {
  initTimeline();
}

export { TimelineController };
