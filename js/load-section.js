// Simpan data JSON di sini untuk mempermudah akses
const DATA_JSON = {
  "sections": {
    "navbar": {
      "logo": "assets/hotamalogo.png",
      "links": [
        {"text": "Our Services", "href": "#services"},
        {"text": "About Us", "href": "#about"},
        {"text": "Project", "href": "#work"},
        {"text": "Testimoni", "href": "#testi"}
      ],
      "cta": {"text": "Let's Talk", "href": "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fputrahotama%2Fposts%2F%3FfeedView%3Dall"}
    },

    "navbarMobile": {
  "links": [
    { "text": "Our Services", "href": "#services" },
    { "text": "About Us", "href": "#about" },
    { "text": "Project", "href": "#work" },
    { "text": "Testimoni", "href": "#testi" }
  ]
},

    "hero": {
      "id": "home",
      "title": "Transform Your Digital Presence",
      "subtitle": "We help ambitious brands grow and scale through world-class design, smart marketing strategies, and cutting-edge technology—tailored to make real impact.",
      "cta": {"text": "Let's Talk", "href": "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fputrahotama%2Fposts%2F%3FfeedView%3Dall"}
    },
    "trusted-by": {
      "tag": "Trusted By",
      "logos": [
        {"src": "assets/lippo-group.png", "alt": "lippo"},
        {"src": "assets/smart.png", "alt": "smart"},
        {"src": "assets/flip.png", "alt": "flip"},
        {"src": "assets/pegasus-group.png", "alt": "pegasus"}
      ]
    },
    "services": {
      "id": "services",
      "tag": "Our Services",
      "title": "Solution for your business needs",
      "items": [
        {"title": "Website & Desktop App", "description": "We blend aesthetics with functionality, ensuring a seamless user experience.", "icon": "assets/web-desktop.png", "alt": "web-desktop icon"},
        {"title": "Mobile Application", "description": "Step into the mobile realm with our cutting-edge Android and iOS development.", "icon": "assets/mobile-app.png", "alt": "mobile icon"},
        {"title": "Digital Content", "description": "From compelling copy to captivating visuals, we create digital content that resonates with your audience.", "icon": "assets/digital.png", "alt": "digital icon"},
        {"title": "SEO Services", "description": "Harness the power of SEO to propel your business to the forefront of search engine results.", "icon": "assets/strategist.png", "alt": "strategist icon"},
        {"title": "Consulting", "description": "Navigate the complexities of the digital landscape with our expert consulting services.", "icon": "assets/seo.png", "alt": "seo icon"},
        {"title": "Digital Strategist", "description": "Pioneering innovation, we guide you towards a future where your digital presence is synonymous with success.", "icon": "assets/love.png", "alt": "consulting"}
      ]
    },
    "about": {
      "id": "about",
      "tag": "About Us",
      "title": "Learn more about our journey",
      "content": "PT Kreasi Putra Hotama is a reputable software development and IT consulting company with over 10 years of experience. We pride ourselves on being a trusted partner for businesses seeking innovative technology solutions. With a team of skilled professionals, we have successfully delivered numerous software projects and provided exceptional IT consulting services to clients across various industries.",
      "image": "assets/about_us.jpeg"
    },
    "work": {
      "id": "work",
      "tag": "Our Work",
      "title": "Our Previous Projects",
      "projects": [
        {"title": "Qara'a", "category": "Education App", "image": "assets/qaraa.png", "link": "qaraa.html", "color_class": "bg-purple-600/60"},
        {"title": "Pegasus Universe", "category": "HR Management App", "image": "assets/pegasus_universe.png", "link": "detail-pegasus.html", "color_class": "bg-blue-600/60"},
        {"title": "Belanja Smart", "category": "Groceries App", "image": "assets/belanja_smart.png", "link": "detail-belanja.html", "color_class": "bg-green-600/60"},
        {"title": "Maureno Website", "category": "Groceries App", "image": "assets/maureno_website.jpeg", "link": "detail-maureno.html", "color_class": "bg-amber-800/60", "isHidden": true},
        {"title": "Hotways App", "category": "HR Management System", "image": "assets/hotways_app.jpeg", "link": "detail-maureno.html", "color_class": "bg-red-600/60", "isHidden": true},
        {"title": "Flip Deals", "category": "Digital Payment Aggregator", "image": "assets/flip_deals.jpeg", "link": "detail-maureno.html", "color_class": "bg-yellow-600/60", "isHidden": true}
      ]
    },
    "testimonials": {
      "id": "testi",
      "tag": "Testimoni",
      "title": "What client say about our service",
      "reviews": [
        {"quote": "Websites built on @framer are fast and responsive. I enjoyed working with their tools for my portfolio site!", "name": "Fraky", "handle": "@frekyplay", "avatar": "assets/fraky.jpeg"},
        {"quote": "Websites built on @framer are fast and responsive. I enjoyed working with their tools for my portfolio site!", "name": "Beingmani", "handle": "@beingmani", "avatar": "assets/beingmani.jpeg"},
        {"quote": "I learned how to build a website in @Framer! Just random elements that's responsive. If I can do it, so can you!", "name": "Dann", "handle": "@DannPetty", "avatar": "assets/dann.jpeg"},
        {"quote": "Websites built on @framer help us build polished, flexible web pages with ease. Loved the process!", "name": "Manoj", "handle": "@manojnayak", "avatar": "assets/manoj.jpeg"}
      ]
    },
    "cta_section": {
      "headline_html": "Building smarter solutions for a better<br class=\"hidden md:block\" />future with <span class=\"text-teal-400\">Hotama</span>",
      "cta": {"text": "Let's Talk", "href": "https://www.linkedin.com/company/putrahotama/posts/?feedView=all"}
    },
    "footer": {
      "logo": "assets/hotamalogo.png",
      "description": "Empowering your digital transformation through innovation, technology, and tailored solutions.",
      "contact": {
        "phone": "(+62) 811 4867 735",
        "email": "Pontianak, West Borneo"
      },
      "quick_links": [
        {"text": "Our Services", "href": "#services"},
        {"text": "About Us", "href": "#about"},
        {"text": "Project", "href": "#work"},
        {"text": "Testimoni", "href": "#testi"}
      ]
    }
  }
};


document.addEventListener('DOMContentLoaded', function() {
    const sections = DATA_JSON.sections;
    
    // --- RENDER SEMUA SECTION SECARA SINCRONUS ---
    renderNavbar(sections.navbar);
    renderMobileNavbar(sections.navbarMobile);
    renderHero(sections.hero);
    renderTrustedBy(sections['trusted-by']); 
    renderServices(sections.services);
    renderAbout(sections.about);
    renderWork(sections.work);
    renderTestimonials(sections.testimonials);
    renderCta(sections.cta_section);
    renderFooter(sections.footer);

    // Panggil inisialisasi script utama setelah semua konten dimuat
    initNavbar(); 
    setTimeout(initMainScript, 100); 

    console.log('All sections rendered from JSON data successfully.');
});

// ====================================================================
// FUNGSI RENDER
// ====================================================================

function renderNavbar(navData) {
  const linksContainer = document.getElementById('navbar-links');
  const ctaContainer = document.getElementById('navbar-cta-desktop');

  const linkMarkup = navData.links.map(link => `
    <a href="${link.href}" class="hover:text-teal-400 transition nav-link">${link.text}</a>
  `).join('');

  const ctaMarkup = `
    <a href="${navData.cta.href}" 
       class="ml-4 bg-white text-black px-6 py-2 rounded-full  hover:bg-[#00AEC2] hover:text-white transition-colors">
       ${navData.cta.text}
    </a>
  `;

  if (linksContainer) linksContainer.innerHTML = linkMarkup;
  if (ctaContainer) ctaContainer.innerHTML = ctaMarkup;
}

function renderMobileNavbar(mobileData) {
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) return;

  mobileMenu.innerHTML = `
  <nav class="space-y-8 text-left px-8">
    ${mobileData.links.map(link => `
     <a href="${link.href}" 
   class="block font-poppins font-semibold tracking-wide  hover:text-teal-400 transition">
   ${link.text}
</a>

    `).join('')}
  </nav>
`;

}


function renderHero(heroData) {
    document.getElementById('hero-title').textContent = heroData.title;
    document.getElementById('hero-subtitle').textContent = heroData.subtitle;
    
    const ctaContainer = document.getElementById('hero-cta-container');
    if (ctaContainer) {
        ctaContainer.innerHTML = `
            <a href="${heroData.cta.href}">
                <button class="bg-white text-dark-bg px-6 py-2.5 text-sm sm:text-base rounded-full font-medium 
                    hover:bg-[#00AEC2] hover:text-white transition-colors shadow-sm">
                    ${heroData.cta.text}
                </button>
            </a>
              <a href="#work" 
               class="inline-block px-6 py-2.5 text-sm sm:text-base rounded-full font-medium 
                      bg-white/30 text-white border border-white/20 
                      hover:bg-white/40 hover:text-white active:bg-white active:text-white 
                      transition-colors duration-300 backdrop-blur-sm shadow-sm">
                View Our Work
            </a>
        `;
    }
}

function renderTrustedBy(trustedByData) {
  const tagContainer = document.getElementById('trusted-by-tag');
  const container = document.getElementById('trusted-by-marquee');
  if (!tagContainer || !container) return;

  // Buat teks polos tanpa badge bulat atau background
  tagContainer.innerHTML = `
    <div class="text-white font-semibold tracking-wide mb-2">
      ${trustedByData.tag}
    </div>
  `;

  // Duplikasi logo (pakai spread agar animasi mulus)
  const allLogos = [
    ...trustedByData.logos,
    ...trustedByData.logos,
    ...trustedByData.logos
  ];

  container.innerHTML = allLogos
    .map((logo, i) => `
      <img 
        class="marquee__item h-[41px] w-auto opacity-80 hover:opacity-100 transition"
        src="${logo.src}"
        alt="${logo.alt}"
        style="--marquee-item-index: ${i + 1}">
    `)
    .join('');
}



function renderServices(serviceData) {
    document.getElementById('services-tag').textContent = serviceData.tag;
    document.getElementById('services-title').textContent = serviceData.title;

    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = serviceData.items.map((item, index) => `
        <div class="service-card rounded-xl p-[20px] text-left bg-[#0d1e22] border border-white/10 hover:border-teal-400 transition-colors " style="--delay: ${index * 0.15}s;">
            <div class="mb-8">
                <img src="${item.icon}" alt="${item.alt}" class="w-[27px] h-[27px]">
            </div>
            <h3 class="text-lg font-semibold mb-3">${item.title}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">${item.description}</p>
        </div>
    `).join('');
}

function renderAbout(aboutData) {
    document.getElementById('about-tag').textContent = aboutData.tag;
    document.getElementById('about-title').textContent = aboutData.title;
    document.getElementById('about-content').textContent = aboutData.content;
    document.getElementById('about-image').src = aboutData.image; 
    document.getElementById('about-image').alt = 'About Us Image';
}



function renderTestimonials(testiData) {
    document.getElementById('testi-tag').textContent = testiData.tag;
    document.getElementById('testi-title').textContent = testiData.title;

    const container = document.getElementById('testimonial-track');
    if (!container) return;

    // Duplikasi reviews untuk efek loop tak terbatas
    const reviewsToLoop = testiData.reviews.concat(testiData.reviews); 

    container.innerHTML = reviewsToLoop.map(review => `
        <div class="testimonial-card">
            <p class="mb-6 text-gray-300 text-sm leading-relaxed">${review.quote}</p>
            <div class="flex items-center gap-4 pt-4 ">
                <img src="${review.avatar}" alt="${review.name}" class="w-12 h-12 rounded-full object-cover">
                <div>
                    <h4 class="font-semibold">${review.name}</h4>
                    <p class="text-sm text-gray-400">${review.handle}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCta(ctaData) {
    document.getElementById('cta-headline').innerHTML = ctaData.headline_html;
    
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.textContent = ctaData.cta.text;
        ctaButton.href = ctaData.cta.href;
    }
}

function renderFooter(footerData) {
    document.getElementById('footer-description').textContent = footerData.description;
    
    const linksContainer = document.getElementById('footer-links');
    if (linksContainer) {
        linksContainer.innerHTML = footerData.quick_links.map(link => `
            <a href="${link.href}" class="block text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm">${link.text}</a>
        `).join('');
    }
    
    const contactContainer = document.querySelector('#footer .space-y-4:last-child');
    if (contactContainer) {
        contactContainer.innerHTML = `
           <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"/>
            </svg>
            <div class="text-sm text-gray-300 leading-relaxed">
                ${footerData.contact.email}
            </div>
          </div>
            
           <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.66l1.52 4.07a1 1 0 01-.27 1.11l-2.3 2.3a11.042 11.042 0 005.2 5.2l2.3-2.3a1 1 0 011.11-.27l4.07 1.52a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.373 21 3 14.627 3 7V5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.66l1.52 4.07a1 1 0 01-.27 1.11l-2.3 2.3a11.042 11.042 0 005.2 5.2l2.3-2.3a1 1 0 011.11-.27l4.07 1.52a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.373 21 3 14.627 3 7V5z"/>
            </svg>
           <div class="text-sm text-gray-300 leading-relaxed">
              ${footerData.contact.phone}
           </div>
          </div>
            
        `;
    }
}

function renderWork(workData) {
  document.getElementById('work-tag').textContent = workData.tag;
  document.getElementById('work-title').textContent = workData.title;

  const container = document.getElementById('work-grid');
  if (!container) return;

  // Sesuaikan grid agar tampil lebih lega seperti di work-detail
  container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-20";

  container.innerHTML = workData.projects
    .filter(p => !p.isHidden)
    .map(project => `
      <a href="${project.link}" 
         class="scroll-reveal block group transition-transform duration-300 w-full max-w-[420px] mx-auto">
        <div class="overflow-hidden rounded-2xl relative shadow-lg">

          <!-- Gambar -->
          <img src="${project.image}" 
               alt="${project.title}" 
               class="w-[550px] h-[220px] sm:h-[240px] lg:h-[225px] object-cover rounded-2xl 
                      transform transition-transform duration-500 ease-out group-hover:scale-105">

          <!-- Overlay desktop -->
          <div class="absolute inset-0 ${project.color_class} hidden md:flex 
                      items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span class="flex items-center gap-2 text-white font-poppins font-medium text-lg 
                        transform -translate-x-20 opacity-0 transition-all duration-500 ease-out
                        group-hover:translate-x-0 group-hover:opacity-100">
              View More
              <svg xmlns="http://www.w3.org/2000/svg" 
                   class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          <!-- Overlay mobile -->
          <div class="absolute bottom-3 right-3 md:hidden scroll-reveal">
            <span class="flex items-center gap-1 ${project.color_class} text-white text-sm px-3 py-1 rounded-2xl">
              View More
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Deskripsi -->
        <div class="text-left px-2 mt-3">
          <h3 class="text-lg sm:text-xl font-semibold mb-1">${project.title}</h3>
          <p class="text-gray-400 text-sm">${project.category}</p>
        </div>
      </a>
    `)
    .join('');

  // 🔹 Tombol "See More" mengarah ke work-detail.html
  const seeMoreBtn = document.getElementById('toggleProjectsBtn');
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', () => {
      window.location.href = '../work-detail.html';
    });
  }
}


// Asumsi fungsi initNavbar() dan initMainScript() diambil dari file load-section.js Anda sebelumnya.
// FUNGSI INI HARUS TETAP ADA UNTUK MENJALANKAN ANIMASI DAN INTERAKSI

function initNavbar() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");

  // --- Toggle menu mobile ---
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
      document.body.classList.toggle("overflow-hidden");
    });
  }

  // --- Smooth Scroll Adaptif (auto-offset by navbar height) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      // Pastikan navbar sudah di-render & tampil di atas
      const navbarRect = navbar?.getBoundingClientRect();
      const isNavbarVisible = navbarRect && navbarRect.top <= 0;

      // Ambil tinggi navbar hanya kalau dia fixed di atas
      const navbarHeight = isNavbarVisible ? (navbar?.offsetHeight || 0) : 0;

      // Hitung posisi target agar muncul pas di bawah navbar
      const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      // Jalankan smooth scroll
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      // Tutup menu mobile otomatis
      if (window.innerWidth < 768 && mobileMenu.classList.contains("show")) {
        mobileMenu.classList.remove("show");
        document.body.classList.remove("overflow-hidden");
      }
    });
  });

  // --- Navbar animasi muncul saat load ---
  if (navbar) {
    navbar.classList.remove("opacity-0", "-translate-y-20");
    navbar.classList.add("opacity-100", "translate-y-0");
  }
}




function initMainScript() {
    // === 1️⃣ Animasi muncul saat di-scroll ===
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

    // === 2️⃣ Efek hover animasi zoom-in + highlight ===
    serviceCards.forEach(card => {
        const img = card.querySelector('img');
        const title = card.querySelector('h3');
        const text = card.querySelector('p');

        card.addEventListener('mouseenter', () => {
            // zoom-in kartu
            card.style.transform = 'translateY(-5px) scale(1.03)';
            card.style.transition = 'transform 0.3s ease-out, box-shadow 0.4s ease-out';
            card.style.boxShadow = '0 20px 40px rgba(29, 209, 161, 0.1)';

            // efek gambar
            if (img) {
                img.style.transform = 'scale(1.05)';
                img.style.transition = 'transform 0.6s ease-out';
            }

            // efek judul
            if (title) {
                title.style.color = '#1dd1a1';
                title.style.transform = 'scale(1.03)';
                title.style.transition = 'transform 0.4s ease-out, color 0.4s ease-out';
            }

            // efek teks
            if (text) {
                text.style.transform = 'scale(1.03)';
                text.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
                text.style.opacity = '0.95';
            }
        });

        card.addEventListener('mouseleave', () => {
            // reset ke posisi normal
            card.style.transform = 'translateY(0) scale(1)';
            card.style.transition = 'transform 0.6s ease-out, box-shadow 0.4s ease-out';
            card.style.boxShadow = 'none';

            if (img) img.style.transform = 'scale(1)';
            if (title) {
                title.style.color = '';
                title.style.transform = 'scale(1)';
            }
            if (text) {
                text.style.transform = 'scale(1)';
                text.style.opacity = '1';
            }
        });
    });

    // === 3️⃣ General scroll reveal untuk elemen lain ===
    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        scrollRevealObserver.observe(el);
    });

    // === 4️⃣ Testimonial marquee pause saat hover ===
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (testimonialTrack) {
        testimonialTrack.addEventListener('mouseenter', () => {
            testimonialTrack.style.animationPlayState = 'paused';
        });
        testimonialTrack.addEventListener('mouseleave', () => {
            testimonialTrack.style.animationPlayState = 'running';
        });
    }

    console.log('Main script initialized successfully with service card animations.');
}
