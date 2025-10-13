// Loader untuk sections dari JSON data
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Load JSON data
    const response = await fetch('js/sections-data.json');
    if (!response.ok) throw new Error('Failed to load sections-data.json');
    const data = await response.json();
    
    console.log('✅ Sections JSON data loaded successfully');
    
    // Render semua sections
    renderNavbarDetail(data.sections.navbar_detail);
    renderFooterDetail(data.sections.footer_detail);
    renderWorkDetail(data.sections.work_detail);
    
    // Initialize scripts after rendering
    initSectionsScripts();
    
  } catch (error) {
    console.error('❌ Error loading sections JSON data:', error);
    showErrorOverlay('Failed to load sections data');
  }
});

// ====================================================================
// RENDER FUNCTIONS
// ====================================================================

function renderNavbarDetail(navData) {
  const navbarContainer = document.getElementById('navbar-detail');
  if (!navbarContainer) return;

  navbarContainer.innerHTML = `
    <nav id="${navData.id}" class="${navData.classes}">
      <div class="relative flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <a href="${navData.logo.href}">
            <img src="${navData.logo.src}" alt="${navData.logo.alt}" class="${navData.logo.classes}" />
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="${navData.desktop_menu.classes}">
          ${navData.desktop_menu.links.map(link => 
            `<a href="${link.href}" class="${link.classes}">${link.text}</a>`
          ).join('')}
        </div>

        <!-- CTA Button -->
        <div class="${navData.cta_button.classes}">
          <a href="${navData.cta_button.href}" 
             class="${navData.cta_button.classes_button}">
            ${navData.cta_button.text}
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden flex items-center space-x-2">
          <button id="${navData.mobile_menu.button.id}" class="${navData.mobile_menu.button.classes}">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div id="${navData.mobile_menu.dropdown.id}" class="${navData.mobile_menu.dropdown.classes}">
        <div class="flex flex-col gap-6 text-lg font-semibold">
          ${navData.mobile_menu.dropdown.links.map(link => 
            `<a href="${link.href}" class="${link.classes}">${link.text}</a>`
          ).join('')}
        </div>
      </div>
    </nav>
  `;
}

function renderFooterDetail(footerData) {
  const footerContainer = document.getElementById('footer-detail');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="${footerData.classes}">
      <div class="${footerData.content.classes}">
        
        <!-- Main Footer Content -->
        <div class="${footerData.content.main_content.classes}">
          
          <!-- Company Info -->
          <div class="${footerData.content.main_content.company_info.classes}">
            <img class="${footerData.content.main_content.company_info.logo.classes}" 
                 src="${footerData.content.main_content.company_info.logo.src}" 
                 alt="${footerData.content.main_content.company_info.logo.alt}">
            <p class="text-gray-400 mt-4 leading-relaxed">
              ${footerData.content.main_content.company_info.description}
            </p>
          </div>

        <!-- Quick Links -->
<div class="${footerData.content.main_content.quick_links.classes}">
  <h3 class="text-white font-semibold mb-4">
    ${footerData.content.main_content.quick_links.title}
  </h3>
  <nav class="flex flex-col space-y-3 mt-2">
    ${footerData.content.main_content.quick_links.links.map(link => 
      `<a href="${link.href}" class="text-gray-400 hover:text-teal-400 transition">${link.text}</a>`
    ).join('')}
  </nav>
</div>


          <!-- Contact -->
          <div class="${footerData.content.main_content.contact.classes}">
            <h3 class="text-white font-semibold mb-4">
              ${footerData.content.main_content.contact.title}
            </h3>
            <div class="space-y-5">
              ${footerData.content.main_content.contact.items.map(item => `
                <div class="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                       class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    ${item.type === 'location' ? `
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"/>
                    ` : `
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.66l1.52 4.07a1 1 0 01-.27 1.11l-2.3 2.3a11.042 11.042 0 005.2 5.2l2.3-2.3a1 1 0 011.11-.27l4.07 1.52a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.373 21 3 14.627 3 7V5z"/>
                    `}
                  </svg>
                  <div class="text-gray-400 text-sm leading-relaxed">
                    ${item.text}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="${footerData.content.copyright.classes}">
          ${footerData.content.copyright.text}
        </div>
      </div>
    </footer>
  `;
}

function renderWorkDetail(workData) {
  const workContainer = document.getElementById('work-detail');
  if (!workContainer) return;

  workContainer.innerHTML = `
    <section id="${workData.id}" class="${workData.classes}">
      <div class="${workData.content.classes}">
        <!-- Header -->
        <div class="${workData.content.header.classes}">
          <div class="order-2 lg:order-2">
            <div class="${workData.content.header.badge.classes}">
              <span class="${workData.content.header.badge.dot_classes}"></span>
              <span class="text-sm font-medium">${workData.content.header.badge.text}</span>
            </div>
            <h2 class="${workData.content.header.title.classes}">
              ${workData.content.header.title.text}
            </h2>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="${workData.content.projects_grid.classes}">
          ${workData.content.projects_grid.projects.map(project => `
            <a href="${project.href}" class="${project.classes}">
              <div class="card-gradient rounded-2xl overflow-hidden relative">
                <div class="relative overflow-hidden">
                  <img src="${project.image.src}" 
                       alt="${project.image.alt}" 
                       class="${project.image.classes}">
                  
                  <!-- Overlay desktop -->
                  <div class="${project.overlay_desktop.classes}">
                    <span class="flex items-center gap-2 text-white font-poppins font-medium text-lg 
                               transform -translate-x-20 opacity-0
                               transition-all duration-500 ease-out
                               group-hover:translate-x-0 group-hover:opacity-100">
                      ${project.overlay_desktop.text}
                      <svg xmlns="http://www.w3.org/2000/svg" 
                           class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                           fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                  <!-- Overlay mobile -->
                  <div class="${project.overlay_mobile.classes}">
                    <span class="${project.overlay_mobile.badge_classes}">
                      ${project.overlay_mobile.text}
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <h3 class="text-xl text-left font-bold mt-3">${project.title}</h3>
              <p class="text-gray-400 text-sm text-left">${project.category}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ====================================================================
// INITIALIZATION FUNCTIONS
// ====================================================================

function initSectionsScripts() {
  console.log('✅ Sections scripts initialized');

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    let menuOpen = false;

    mobileMenuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        mobileMenu.classList.add("show");
        mobileMenu.classList.remove("pointer-events-none");
      } else {
        mobileMenu.classList.remove("show");
        mobileMenu.classList.add("pointer-events-none");
      }
      menuOpen = !menuOpen;
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Navbar animation on load
  const navbarWrapper = document.getElementById("navbar-detail");
  const navbarEl = navbarWrapper ? navbarWrapper.querySelector("nav") : null;

  if (navbarEl) {
    setTimeout(() => {
      navbarEl.classList.remove("opacity-0", "-translate-y-20");
      navbarEl.classList.add("opacity-100", "translate-y-0");
    }, 200);
  }

  // Scroll reveal animations
  const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        scrollRevealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".scroll-reveal").forEach(el => {
    scrollRevealObserver.observe(el);
  });

  // Project cards hover effects
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      const overlay = card.querySelector('.absolute.inset-0');
      if (overlay) {
        overlay.style.opacity = '1';
      }
    });

    card.addEventListener("mouseleave", () => {
      const overlay = card.querySelector('.absolute.inset-0');
      if (overlay) {
        overlay.style.opacity = '0';
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("#navbar-detail nav");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("backdrop-blur-xl");
      } else {
        navbar.classList.remove("backdrop-blur-xl");
      }
    }
  });
}

function showErrorOverlay(message) {
  const globalError = document.getElementById("global-error");
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
          <h2 style="color:#ef4444;font-size:1.25rem;font-weight:bold;margin-bottom:0.5rem;">
            Error Loading Page
          </h2>
          <p style="color:#fecaca;font-size:0.95rem;margin-bottom:1rem;">
            ${message}
          </p>
        </div>
      </div>
    `;
  }
}
