document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'navbar', file: 'navbar.html' },
        { id: 'hero', file: 'hero.html' },
        { id: 'trusted-by', file: 'trusted-by.html' },
        { id: 'services', file: 'services.html' },
        { id: 'about', file: 'about.html' },
        { id: 'work', file: 'work.html' },
        { id: 'testimonial', file: 'testimonials.html' },
        { id: 'cta', file: 'cta.html' },
        { id: 'footer', file: 'footer.html' }
    ];

    let errorShown = false; // ⬅️

    sections.forEach(section => {
        fetch(`sections/${section.file}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${section.file}: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(section.id + '-container').innerHTML = data;
                console.log(`Loaded: ${section.file}`);

                if (section.id === 'navbar') {
                    initNavbar();
                }
                if (section.id === 'footer') {
                    setTimeout(initMainScript, 100);
                }
            })
           .catch(error => {
    console.error(`Error loading ${section.file}:`, error);

    if (!errorShown) {
        const globalError = document.getElementById('global-error');
        if (globalError) {
            globalError.innerHTML = `
              <div style="
                position:fixed;inset:0;z-index:9999;
                display:flex;align-items:center;justify-content:center;
                background:rgba(0,0,0,0.85);
              ">
                <div style="
                  background:#1f1f1f;
                  border:1px solid #f87171;
                  border-radius:0.75rem;
                  padding:2rem;
                  max-width:400px;
                  text-align:center;
                ">
                  <img src="https://i.pinimg.com/736x/95/c0/a7/95c0a750cf615efb7d1e7386840df1eb.jpg"
                       alt="Error Illustration"
                       style="width:400px;height:auto;margin-bottom:1rem;" />
                  <h2 style="color:#ef4444;font-size:1.25rem;font-weight:bold;margin-bottom:0.5rem;">
                    Error Loading Page
                  </h2>
                  <p style="color:#fecaca;font-size:0.95rem;margin-bottom:1rem;">
                    Failed to fetch
                  </p>
                 <button onclick="location.href='vscode://';" style="
                background:#2791F5;
                color:white;
                padding:0.5rem 1rem;
                border-radius:0.375rem;
                font-weight:500;
">
  Open In VSCode
</button>

                </div>
              </div>
            `;
        }
        errorShown = true;
    }
});
    });
});


function initNavbar() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        let menuOpen = false;
        mobileMenuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                mobileMenu.classList.add('show');
                mobileMenu.classList.remove('pointer-events-none');
            } else {
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('pointer-events-none');
            }
            menuOpen = !menuOpen;
        });
    }
}

function initMainScript() {
    console.log('All sections loaded, initializing main script...');

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Navbar blur on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('backdrop-blur-xl');
        } else if (navbar) {
            navbar.classList.remove('backdrop-blur-xl');
        }
    });

    // Fade-in observer
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.service-card').forEach(card => fadeObserver.observe(card));

    // Scroll reveal
    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => scrollRevealObserver.observe(el));

    // Navbar animation on load
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.remove('opacity-0', '-translate-y-10');
        navbar.classList.add('opacity-100', 'translate-y-0');
    }

    // Service card hover
    document.querySelectorAll('.service-card').forEach(card => {
        const img = card.querySelector('img');
        const title = card.querySelector('h3');
        const text = card.querySelector('p');

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.01)';
            card.style.transition = 'transform 0.3s ease-out, box-shadow 0.4s ease-out';
            if (img) img.style.transform = 'scale(1.02)';
            if (title) title.style.color = '#1dd1a1';
            if (text) {
                text.style.transform = 'translateY(-3px)';
                text.style.opacity = '0.9';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.transition = 'transform 0.6s ease-out, box-shadow 0.4s ease-out';
            if (img) img.style.transform = 'scale(1)';
            if (title) title.style.color = '';
            if (text) {
                text.style.transform = 'translateY(0)';
                text.style.opacity = '1';
            }
        });
    });

    // Service card reveal staggered
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(serviceCards).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.15}s`;
                entry.target.classList.add('show');
                serviceCardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    serviceCards.forEach(card => serviceCardObserver.observe(card));

    // Pause testimonial marquee on hover
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (testimonialTrack) {
        testimonialTrack.addEventListener('mouseenter', () => {
            testimonialTrack.style.animationPlayState = 'paused';
        });
        testimonialTrack.addEventListener('mouseleave', () => {
            testimonialTrack.style.animationPlayState = 'running';
        });
    }

    console.log('Main script initialized successfully');
}
