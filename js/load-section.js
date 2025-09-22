document.addEventListener('DOMContentLoaded', function() {
    // Daftar section yang akan dimuat - SESUAIKAN DENGAN NAMA FILE
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
    
    // Memuat setiap section
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
                
                // Jika ini adalah navbar, jalankan script untuk navbar
                if (section.id === 'navbar') {
                    initNavbar();
                }
                
                // Jika semua section telah dimuat, jalankan script utama
                if (section.id === 'footer') {
                    setTimeout(initMainScript, 100);
                }
            })
            .catch(error => {
                console.error(`Error loading ${section.file}:`, error);
                document.getElementById(section.id + '-container').innerHTML = `
                    <div style="color: red; padding: 20px; border: 1px solid red;">
                        Error loading ${section.file}: ${error.message}
                    </div>
                `;
            });
    });
});

// Fungsi-fungsi lainnya tetap sama...
function initNavbar() {
    // Mobile menu toggle
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
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('backdrop-blur-xl');
        } else if (navbar) {
            navbar.classList.remove('backdrop-blur-xl');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    const toggleBtn = document.getElementById('toggleProjectsBtn');
    const hiddenProjects = document.querySelectorAll('.project-hidden');
    let isExpanded = false;

    if (toggleBtn && hiddenProjects.length > 0) {
        toggleBtn.addEventListener('click', () => {
            hiddenProjects.forEach((project) => {
                if (!isExpanded) {
                    project.classList.remove('hidden');
                    void project.offsetWidth;
                    project.classList.add('show');
                    project.classList.remove('hide');
                } else {
                    project.classList.add('hide');
                    project.classList.remove('show');
                    setTimeout(() => {
                        project.classList.add('hidden');
                    }, 400);
                }
            });

            toggleBtn.textContent = isExpanded ? 'See More' : 'Show Less';
            isExpanded = !isExpanded;
        });
    }

    const OFFSET = 45;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                e.preventDefault();
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - OFFSET;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const scrollRevealOptions = {
        threshold: 0.1
    };

    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, scrollRevealOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        scrollRevealObserver.observe(el);
    });

    // Initialize navbar animation
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.remove('opacity-0', '-translate-y-10');
        navbar.classList.add('opacity-100', 'translate-y-0');
    }

    // Service card hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.05)';
            card.style.transition = 'transform 0.3s ease-out, box-shadow 0.4s ease-out';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.transition = 'transform 0.6s ease-out, box-shadow 0.4s ease-out';
        });
    });

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

    serviceCards.forEach(card => {
        serviceCardObserver.observe(card);
    });

    console.log('Main script initialized successfully');
} 

  // Intersection Observer untuk animasi scroll
        const scrollRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        // Observasi semua elemen dengan class 'scroll-reveal'
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            scrollRevealObserver.observe(el);
        });

        // Pause animation on hover
        const testimonialTrack = document.querySelector('.testimonial-track');
        if (testimonialTrack) {
            testimonialTrack.addEventListener('mouseenter', () => {
                testimonialTrack.style.animationPlayState = 'paused';
            });
            
            testimonialTrack.addEventListener('mouseleave', () => {
                testimonialTrack.style.animationPlayState = 'running';
            });
        }
        
        
        