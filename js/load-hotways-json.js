// load-hotways-json.js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    console.log('🔄 Loading Hotways JSON data...');
    
    const response = await fetch('./js/hotways-data.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    console.log('✅ Hotways JSON data loaded successfully');
    
    // Render semua sections untuk Hotways
    renderHotwaysNavbar(data.hotways_sections.navbar);
    renderHotwaysHome(data.hotways_sections.home);
    renderHotwaysAbout(data.hotways_sections.about);
    renderHotwaysTechnical(data.hotways_sections.technical);
    renderHotwaysCta(data.hotways_sections.cta);
    renderHotwaysFooter(data.hotways_sections.footer);
    renderHotwaysButtons(data.hotways_sections.buttons);
    
    initHotwaysScripts();
    
  } catch (error) {
    console.error('❌ Error loading Hotways JSON data:', error);
    showErrorOverlay('Failed to load Hotways sections data: ' + error.message);
  }
});

// ====================================================================
// RENDER FUNCTIONS UNTUK HOTWAYS
// ====================================================================

function renderHotwaysNavbar(navData) {
  const navbarContainer = document.getElementById('navbar');
  if (!navbarContainer) return;

  navbarContainer.innerHTML = `
    <nav id="${navData.id}" class="${navData.classes}">
      <div class="relative flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <a href="${navData.logo.href}">
            <img src="${navData.logo.src}" alt="${navData.logo.alt}" class="${navData.logo.classes}" />
          </a>
        </div>

        <div class="${navData.desktop_menu.classes}">
          ${navData.desktop_menu.links.map(link => 
            `<a href="${link.href}" class="${link.classes}">${link.text}</a>`
          ).join('')}
        </div>

        <div class="md:hidden flex items-center space-x-2">
          <button id="${navData.mobile_menu.button.id}" class="${navData.mobile_menu.button.classes}">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

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

function renderHotwaysHome(homeData) {
  const homeContainer = document.getElementById('homepage');
  if (!homeContainer) return;

  homeContainer.innerHTML = `
    <section id="${homeData.id}" class="${homeData.classes}">
      <div class="${homeData.background.classes}"></div>

      <div class="${homeData.content.classes}">
        <!-- Phone Preview -->
        <div class="${homeData.content.phone_preview.classes}">
          <div class="relative w-[220px] sm:w-[220px] md:w-[320px]">
            <img src="${homeData.content.phone_preview.image.src}" 
                 alt="${homeData.content.phone_preview.image.alt}"
                 class="${homeData.content.phone_preview.image.classes}" />
          </div>
        </div>

        <!-- Text Content -->
        <div class="${homeData.content.text_content.classes}">
          <!-- Badge -->
          <div class="${homeData.content.text_content.badge.classes}">
            <span class="${homeData.content.text_content.badge.dot_classes}"></span>
            <span class="text-sm font-medium">${homeData.content.text_content.badge.text}</span>
          </div>

          <!-- Title -->
          <h1 class="${homeData.content.text_content.title.classes}">
            ${homeData.content.text_content.title.text}
          </h1>

          <!-- Subtitle -->
          <p class="${homeData.content.text_content.subtitle.classes}">
            ${homeData.content.text_content.subtitle.text}
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderHotwaysAbout(aboutData) {
  const aboutContainer = document.getElementById('about');
  if (!aboutContainer) return;

  aboutContainer.innerHTML = `
    <section id="${aboutData.id}" class="${aboutData.classes}">
      <div class="${aboutData.content.classes}">
        <div class="${aboutData.content.grid.classes}">
          <!-- Image -->
          <div class="${aboutData.content.grid.image.order}">
            <div class="${aboutData.content.grid.image.container_classes}">
              <img class="${aboutData.content.grid.image.image.classes}" 
                   src="${aboutData.content.grid.image.image.src}" 
                   alt="${aboutData.content.grid.image.image.alt}"/>
            </div>
          </div>
          
          <!-- Text -->
          <div class="${aboutData.content.grid.text.order}">
            <div class="${aboutData.content.grid.text.badge.classes}">
              <span class="${aboutData.content.grid.text.badge.dot_classes}"></span>
              <span class="text-sm font-medium">${aboutData.content.grid.text.badge.text}</span>
            </div>
            
            <h2 class="${aboutData.content.grid.text.title.classes}">
              ${aboutData.content.grid.text.title.text}
            </h2>
            
            <p class="${aboutData.content.grid.text.description.classes}">
              ${aboutData.content.grid.text.description.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHotwaysTechnical(technicalData) {
  const technicalContainer = document.getElementById('technical');
  if (!technicalContainer) return;

  technicalContainer.innerHTML = `
    <section id="${technicalData.id}" class="${technicalData.classes}">
      <div class="${technicalData.content.classes}">
        <div class="${technicalData.content.header.classes}">
          <div class="${technicalData.content.header.badge.classes}">
            <span class="${technicalData.content.header.badge.dot_classes}"></span>
            <span class="text-sm font-medium">${technicalData.content.header.badge.text}</span>
          </div>
          <h2 class="${technicalData.content.header.title.classes}">
            ${technicalData.content.header.title.text}
          </h2>
        </div>

        <div class="${technicalData.content.cards.classes}">
          ${technicalData.content.cards.items.map((card, index) => `
            <div class="${card.classes}" style="animation-delay: ${index * 0.1}s">
              <div class="mb-8">
                <img src="${card.icon.src}" class="${card.icon.classes}" alt="${card.title} icon">
              </div>
              <h3 class="text-lg font-semibold mb-3">${card.title}</h3>
              <ul class="custom-list text-sm leading-relaxed text-gray-400">
                ${card.list.map(item => `
                  <li><span class="bullet"></span><span class="desc">${item}</span></li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderHotwaysCta(ctaData) {
  const ctaContainer = document.getElementById('cta');
  if (!ctaContainer) return;

  ctaContainer.innerHTML = `
    <section class="${ctaData.classes}">
      <div class="${ctaData.content.classes}">
        <!-- Logo -->
        <div class="mb-6 flex justify-center">
          <img src="${ctaData.content.logo.src}"
               alt="${ctaData.content.logo.alt}"
               class="${ctaData.content.logo.classes}">
        </div>

        <!-- Headline -->
        <h2 class="${ctaData.content.headline.classes}">
          ${ctaData.content.headline.text}
        </h2>

        <!-- CTA Button -->
        <a href="${ctaData.content.cta_button.href}"
           class="${ctaData.content.cta_button.classes}">
          ${ctaData.content.cta_button.text}
        </a>
      </div>
    </section>
  `;
}

function renderHotwaysFooter(footerData) {
  const footerContainer = document.getElementById('footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="${footerData.classes}">
      <div class="${footerData.content.classes}">
        <!-- Brand -->
        <div class="${footerData.content.brand.classes}">
          <div class="flex items-center gap-4 mb-5 ml-3">
            <a href="${footerData.content.brand.logo.href}">
              <img class="${footerData.content.brand.logo.classes}" 
                   src="${footerData.content.brand.logo.src}" 
                   alt="${footerData.content.brand.logo.alt}">
            </a>
          </div>
          <p class="text-sm leading-relaxed ml-3">
            ${footerData.content.brand.description}
          </p>
        </div>

        <!-- Menu -->
        <div class="${footerData.content.menu.classes}">
          <h3 class="text-white text-lg font-semibold mb-4">${footerData.content.menu.title}</h3>
          <ul class="space-y-2 text-sm">
            ${footerData.content.menu.links.map(link => 
              `<li><a href="${link.href}" class="${link.classes}">${link.text}</a></li>`
            ).join('')}
          </ul>
        </div>

        <!-- Contact -->
        <div class="${footerData.content.contact.classes}">
          <h3 class="text-white text-xl font-semibold mb-6">${footerData.content.contact.title}</h3>
          <div class="space-y-5">
            ${footerData.content.contact.items.map(item => `
              <div class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  ${item.type === 'location' ? `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"/>
                  ` : `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.66l1.52 4.07a1 1 0 01-.27 1.11l-2.3 2.3a11.042 11.042 0 005.2 5.2l2.3-2.3a1 1 0 011.11-.27l4.07 1.52a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.373 21 3 14.627 3 7V5z"/>
                  `}
                </svg>
                <div class="text-sm text-gray-300 leading-relaxed">
                  ${item.text}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="${footerData.copyright.classes}">
        ${footerData.copyright.text}
      </div>
    </footer>
  `;
}

function renderHotwaysButtons(buttonsData) {
  const buttonsContainer = document.getElementById('floating');
  if (!buttonsContainer) return;

  buttonsContainer.innerHTML = `
    <div class="${buttonsData.classes}">
      <!-- Back to Top -->
      <button id="${buttonsData.back_to_top.id}" 
              onclick="${buttonsData.back_to_top.onclick}" 
              class="${buttonsData.back_to_top.classes}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
        </svg>  
      </button>
    </div>
  `;
}

// ====================================================================
// INITIALIZATION FUNCTIONS UNTUK HOTWAYS
// ====================================================================

function initHotwaysScripts() {
  console.log('✅ Hotways scripts initialized');

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
  const navbarWrapper = document.getElementById("navbar");
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

  // Phone reveal animation
  const phoneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        phoneObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".phone-reveal").forEach(el => {
    phoneObserver.observe(el);
  });

  // Service cards hover effects
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach(card => {
    const img = card.querySelector("img");
    const title = card.querySelector("h3");
    const listItems = card.querySelectorAll("li");

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px) scale(1.02)";
      card.style.transition = "transform 0.3s ease-out, box-shadow 0.3s ease-out";

      if (img) img.style.transform = "scale(1.05)";
      if (title) title.style.color = "#ef4444";

      listItems.forEach((li, index) => {
        li.style.transform = "translateX(5px)";
        li.style.transition = `transform 0.3s ease-out ${index * 50}ms, color 0.3s ease-out`;
        li.style.color = "#ef4444";
      });
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.transition = "transform 0.6s ease-out, box-shadow 0.4s ease-out";

      if (img) img.style.transform = "scale(1)";
      if (title) title.style.color = "";

      listItems.forEach(li => {
        li.style.transform = "translateX(0)";
        li.style.transition = "transform 0.6s ease-out, color 0.6s ease-out";
        li.style.color = "";
      });
    });
  });

  // Back to top button functionality
  const backToTopBtn = document.getElementById("backToTop");
  const heroSection = document.getElementById("homepage");
  let isBackTopVisible = false;

  if (backToTopBtn && heroSection) {
    window.addEventListener("scroll", () => {
      const heroBottom = heroSection.offsetHeight;

      if (window.scrollY > heroBottom) {
        if (!isBackTopVisible) {
          backToTopBtn.classList.remove("hidden", "fade-slide-out");
          backToTopBtn.classList.add("fade-slide-in");
          isBackTopVisible = true;
        }
      } else {
        if (isBackTopVisible) {
          backToTopBtn.classList.remove("fade-slide-in");
          backToTopBtn.classList.add("fade-slide-out");
          setTimeout(() => {
            backToTopBtn.classList.add("hidden");
          }, 300);
          isBackTopVisible = false;
        }
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
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
          <button onclick="location.reload()" style="
            background:#ef4444;color:white;border:none;padding:0.5rem 1rem;border-radius:0.375rem;cursor:pointer;
          ">
            Reload Page
          </button>
        </div>
      </div>
    `;
  }
}