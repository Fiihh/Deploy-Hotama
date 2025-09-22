document.addEventListener("DOMContentLoaded", async () => {
  const sections = [
    { id: "navbar", file: "qaraa-section/navbar.html" },
    { id: "homepage", file: "qaraa-section/home.html" },
    { id: "about", file: "qaraa-section/about.html" },
    { id: "technical", file: "qaraa-section/technical.html" },
    { id: "cta", file: "qaraa-section/cta.html" },
    { id: "footer", file: "qaraa-section/footer.html" },
    { id: "floating", file: "qaraa-section/buttons.html" },
  ];

  let errorShown = false; // biar error overlay hanya muncul sekali

  const promises = sections.map(async (section) => {
    const container = document.getElementById(section.id);
    if (!container) return;

    try {
      const res = await fetch(section.file);
      if (!res.ok) throw new Error(`Gagal memuat ${section.file}`);
      const html = await res.text();
      container.innerHTML = html;
      console.log(`✅ Loaded: ${section.file}`);
    } catch (err) {
      console.error(`❌ Error loading ${section.file}:`, err);

      if (!errorShown) {
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
    }
  });

  await Promise.all(promises);

  if (!errorShown) {
    console.log("✅ Semua section berhasil dimuat");
    initMainScript();
  }
});
function initMainScript() {
  console.log("✅ Main script initialized");

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

  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("#navbar nav");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("backdrop-blur-xl");
      } else {
        navbar.classList.remove("backdrop-blur-xl");
      }
    }
  });

  // Intersection Observer for fade-in animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  // Scroll reveal
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

  // ✅ Navbar animation on load (fix)
  const navbarWrapper = document.getElementById("navbar");
  const navbarEl = navbarWrapper ? navbarWrapper.querySelector("nav") : null;

  if (navbarEl) {
    setTimeout(() => {
      navbarEl.classList.remove("opacity-0", "-translate-y-20");
      navbarEl.classList.add("opacity-100", "translate-y-0");
    }, 200);
  }

  // Phone reveal
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

  // Service cards reveal + hover animation
  const serviceCards = document.querySelectorAll(".service-card");

  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviceCards.forEach((card, index) => {
          if (entry.target === card) {
            setTimeout(() => {
              card.classList.add("show");
            }, index * 200);
          }
        });
        serviceObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  serviceCards.forEach(el => {
    serviceObserver.observe(el);
  });

  serviceCards.forEach(card => {
    const img = card.querySelector("img");
    const title = card.querySelector("h3");
    const listItems = card.querySelectorAll("li");

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px) scale(1.02)";
      card.style.transition = "transform 0.3s ease-out, box-shadow 0.3s ease-out";

      if (img) img.style.transform = "scale(1.05)";
      if (title) title.style.color = "#1dd1a1";

      listItems.forEach((li, index) => {
        li.style.transform = "translateX(5px)";
        li.style.transition = `transform 0.3s ease-out ${index * 50}ms, color 0.3s ease-out`;
        li.style.color = "#1dd1a1";
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

  // Floating Buttons (WA + Back to Top)
const waBtn = document.getElementById("waButton");
const backToTopBtn = document.getElementById("backToTop");
const heroSection = document.getElementById("homepage");
let isBackTopVisible = false;

// WhatsApp button muncul langsung
if (waBtn) {
  setTimeout(() => {
    waBtn.classList.remove("hidden");
    waBtn.classList.add("fade-slide-in");
  }, 200);
}

// Back to Top button muncul setelah scroll melewati homepage
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
