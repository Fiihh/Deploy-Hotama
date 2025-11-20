// All JSON Data
const ALL_DATA = {
    // Main sections data
    "sections": {
        "navbar": {
            "logo": "assets/hotamalogo.png",
            "links": [
                { "text": "Our Services", "href": "#services" },
                { "text": "About Us", "href": "#about" },
                { "text": "Project", "href": "#work" },
                { "text": "Testimoni", "href": "#testi" }
            ],
            "cta": {
                "text": "Let's Talk",
                "href": "https://www.linkedin.com/company/putrahotama"
            }
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
            "cta": { 
                "text": "Let's Talk", 
                "href": "https://www.linkedin.com/company/putrahotama/posts/?feedView=all" 
            },
            "cta2": { 
                "text": "View Our Work", 
                "href": "#work" 
            }
        },

        "trusted-by": {
            "tag": "Trusted By",
            "logos": [
                {"src": "assets/sadana_logo.png", "alt": "lippo", "size":"60px"},
                {"src": "assets/ypi_logo.png", "alt": "smart", "size":"80px"},
                {"src": "assets/difis_logo.png", "alt": "flip"},
                {"src": "assets/octo_logo.png", "alt": "pegasus", "size":"40px"},
                {"src": "assets/munzalan_logo.png", "alt": "flip", "size":"50px"},
                {"src": "assets/maureno_logo.png", "alt": "flip" , "size":"20px"},


                
            ]
        },

        "services": {
            "id": "services",
            "tag": "Our Services",
            "title": "Solution for your business needs",
            "items": [
                {
                    "title": "Website & Desktop App", 
                    "description": "We blend aesthetics with functionality, ensuring a seamless user experience.", 
                    "icon": "assets/web-desktop.png", 
                    "alt": "web-desktop icon"
                },
                {
                    "title": "Mobile Application", 
                    "description": "Step into the mobile realm with our cutting-edge Android and iOS development.", 
                    "icon": "assets/mobile-app.png", 
                    "alt": "mobile icon"
                },
                {
                    "title": "Digital Content", 
                    "description": "From compelling copy to captivating visuals, we create digital content that resonates with your audience.", 
                    "icon": "assets/digital.png", 
                    "alt": "digital icon"
                },
                {
                    "title": "SEO Services", 
                    "description": "Harness the power of SEO to propel your business to the forefront of search engine results.", 
                    "icon": "assets/strategist.png", 
                    "alt": "strategist icon"
                },
                {
                    "title": "Consulting", 
                    "description": "Navigate the complexities of the digital landscape with our expert consulting services.", 
                    "icon": "assets/seo.png", 
                    "alt": "seo icon"
                },
                {
                    "title": "Digital Strategist", 
                    "description": "Pioneering innovation, we guide you towards a future where your digital presence is synonymous with success.", 
                    "icon": "assets/love.png", 
                    "alt": "consulting icon"
                }
            ]
        },

        "about": {
            "id": "about",
            "tag": "About Us",
            "title": "Learn more about our journey",
            "content": "PT Kreasi Putra Hotama is a reputable software development and IT consulting company with over 14 years of experience. We pride ourselves on being a trusted partner for businesses seeking innovative technology solutions. With a team of skilled professionals, we have successfully delivered numerous software projects and provided exceptional IT consulting services to clients across various industries.",
            "image": "assets/about-us-section.png"
        },

        "work": {
            "id": "work",
            "tag": "Our Work",
            "title": "Our Previous Projects",
            "description": "",
            "projects": [
                {
                    "id": "BMI Masjid",
                    "title": "BMI Masjid", 
                    "category": "Zakat App", 
                    "image": "assets/BMI Masjid - Zakat App.png", 
                    "link": "#", 
                    "color_class": "bg-purple-600/60",
                    "isHidden": false
                },

                   {
                    "id": "belanja",
                    "title": "Belanja Smart", 
                    "category": "Groceries App", 
                    "image": "assets/Belanja Smart - Grocery App.png", 
                    "link": "#", 
                    "color_class": "bg-green-600/60",
                    "isHidden": false
                },

                 {
                    "id": "leapapp",
                    "title": "Flip Leap App", 
                    "category": "Community Livin", 
                    "image": "assets/Leap App - Lippo Community Living System.png", 
                    "link": "#", 
                    "color_class": "bg-indigo-600/60", 
                    "isHidden": false
                },

                  {
                    "id": "flipglobe",
                    "title": "Flip Globe", 
                    "category": "Payment Platform ", 
                    "image": "assets/Flip Globe - Cross-border Payment Platform.png", 
                    "link": "#", 
                    "color_class": "bg-sky-600/60",
                    "isHidden": false
                },

                    {
                    "id": "lipposales",
                    "title": "Lippo Sales", 
                    "category": "Sales Management", 
                    "image": "assets/Lippo Sales - Sales Management System.png", 
                    "link": "#", 
                    "color_class": "bg-blue-600/60",
                    "isHidden": false
                },


                  {
                    "id": "hevypos",
                    "title": "Hevy Beauty Care POS", 
                    "category": "Point of Sale", 
                    "image": "assets/Hevy Beauty Care - Point of Sale.png", 
                    "link": "#", 
                    "color_class": "bg-pink-600/60",
                    "isHidden": false
                },


                  {
                    "id": "pegasus",
                    "title": "Pegasus", 
                    "category": "HR Management", 
                    "image": "assets/Pegasus App - Human Resource Management.png", 
                    "link": "#", 
                    "color_class": "bg-cyan-600/60",
                    "isHidden": true
                },

                  {
                    "id": "siupin",
                    "title": "Siupin", 
                    "category": "E-Catalogue Platform", 
                    "image": "assets/Siupin - E-catalogue Platform.png", 
                    "link": "#", 
                    "color_class": "bg-yellow-600/60",
                    "isHidden": true
                },

                  {
                    "id": "sadana",
                    "title": "Sadana App", 
                    "category": "Pawn & Finance", 
                    "image": "assets/Sadana App - Pawn and Accounting Information System.png", 
                    "link": "#", 
                    "color_class": "bg-amber-600/60",
                    "isHidden": true
                },

                  {
                    "id": "eljohn",
                    "title": "El John Media App", 
                    "category": "Digital Media Platform", 
                    "image": "assets/El John Media App - Digital Media Platform.png", 
                    "link": "#", 
                    "color_class": "bg-red-600/60",
                    "isHidden": true
                },

                   {
                    "id": "surau",
                    "title": "Surau", 
                    "category": "Islamic App", 
                    "image": "assets/Surau - Islamic Worship App.png", 
                    "link": "#", 
                    "color_class": "bg-emerald-600/60",
                    "isHidden": true
                },

                   {
                    "id": "octoapp",
                    "title": "Octo App", 
                    "category": "Sports Booking", 
                    "image": "assets/Octo App - Sports Booking App.png", 
                    "link": "#", 
                    "color_class": "bg-blue-600/60",
                    "isHidden": true
                },
 {
                    "id": "muliagraha",
                    "title": "Mulia Graha", 
                    "category": "Sales App", 
                    "image": "assets/Mulia Graha - Sales App.png", 
                    "link": "#", 
                    "color_class": "bg-orange-600/60",
                    "isHidden": true
                },

                  {
                    "id": "difis",
                    "title": "Difis", 
                    "category": "Finance & Student System", 
                    "image": "assets/Difis - Financial Information System.png", 
                    "link": "#", 
                    "color_class": "bg-violet-600/60",
                    "isHidden": true
                },

                  {
                    "id": "ypifinance",
                    "title": "YPI Finance Management System", 
                    "category": "Finance System", 
                    "image": "assets/YPI - Finance Management System.png", 
                    "link": "#", 
                    "color_class": "bg-slate-600/60",
                    "isHidden": true
                },

                  {
                    "id": "ypiapp",
                    "title": "YPI App", 
                    "category": "HR Management", 
                    "image": "assets/YPI App - Human Resource Management.png", 
                    "link": "#", 
                    "color_class": "bg-blue-600/60",
                    "isHidden": true
                },

                {
                    "id": "maureno",
                    "title": "Maureno Website", 
                    "category": "Web App", 
                    "image": "assets/Maureno - Furniture Landing Web.png", 
                    "link": "#", 
                    "color_class": "bg-amber-800/60", 
                    "isHidden": true
                },
                {
                    "id": "kokkino",
                    "title": "Kokkino Internusa", 
                    "category": "HR Management System", 
                    "image": "assets/Hotways App - Stock Management System.png", 
                    "link": "#", 
                    "color_class": "bg-red-600/60", 
                    "isHidden": true
                },
                {
                    "id": "flipdeals",
                    "title": "Flip Deals", 
                    "category": "Digital Payment Aggregator", 
                    "image": "assets/Flip Deals - Online Cashback Service.png", 
                    "link": "#", 
                    "color_class": "bg-yellow-600/60", 
                    "isHidden": true
                }
            ]
        },

        "testimonials": {
            "id": "testi",
            "tag": "Testimoni",
            "title": "What client say about our service",
            "reviews": [
                {
                    "quote": "Websites built on Hotama are fast and responsive. I enjoyed working with their tools for my portfolio site!", 
                    "name": "Fraky", 
                    "handle": "@frekyplay", 
                    "avatar": "assets/fraky.jpeg"
                },
                {
                    "quote": "Websites built on Hotama are fast and responsive. I enjoyed working with their tools for my portfolio site!", 
                    "name": "Beingmani", 
                    "handle": "@beingmani", 
                    "avatar": "assets/beingmani.jpeg"
                },
                {
                    "quote": "I learned how to build a website in Hotama Just random elements that's responsive. If I can do it, so can you!", 
                    "name": "Dann", 
                    "handle": "@DannPetty", 
                    "avatar": "assets/dann.jpeg"
                },
                {
                    "quote": "Websites built on Hotama help us build polished, flexible web pages with ease. Loved the process!", 
                    "name": "Manoj", 
                    "handle": "@manojnayak", 
                    "avatar": "assets/manoj.jpeg"
                }
            ]
        },

        "cta_section": {
            "headline_html": "Building smarter solutions for a better<br class=\"hidden md:block\" />future with <span class=\"text-teal-400\">Hotama</span>",
            "cta": {
                "text": "Let's Talk", 
                "href": "https://www.linkedin.com/company/putrahotama/posts/?feedView=all"
            }
        },

        "footer": {
            "logo": "assets/hotamalogo.png",
            "description": "Empowering your digital transformation through innovation, technology, and tailored solutions.",
          "contact": {
        "location": "Sungai Raya Dalam Street, Golden City Complex, No D3. Pontianak, West Borneo 78391",
        "phone": "(+62) 811 4867 735",
        "email": "hi@hotama.co.id" // TAMBAH BARIS INI
    },
            "quick_links": [
                {"text": "Our Services", "href": "#services"},
                {"text": "About Us", "href": "#about"},
                {"text": "Project", "href": "#work"},
                {"text": "Testimoni", "href": "#testi"}
            ]
        }
    },

    // Projects detail data
    "projects_detail": {
        "BMI Masjid": {
            "title": "BMI Masjid",
            "subtitle": "Platform Zakat", 
            "description": "Aplikasi edukasi inovatif yang menyediakan pengalaman belajar interaktif dengan konten yang disesuaikan untuk berbagai tingkat pendidikan.",
            "full_description": "Qara'a adalah platform edukasi digital yang dirancang untuk memberikan pengalaman belajar yang menyenangkan dan interaktif. Dengan antarmuka yang user-friendly dan konten yang berkualitas, aplikasi ini membantu siswa dalam proses belajar mereka.",
            "image": "assets/BMI Masjid - Zakat App.png",
            "features": [
                "Pembelajaran Interaktif",
                "Konten Berbasis Kurikulum", 
                "Progress Tracking",
                "Gamification Elements",
                "Offline Mode"
            ],
            "technologies": ["Flutter", "Laravel", "MySQL", "Firebase", "Rest API", "Xendit","figma"],
            "demo_url": "",
            "color_class": "bg-purple-600/60"
        },


        "octoapp": {
    "title": "Octo App",
    "subtitle": "Sports Booking App",
    "description": "Aplikasi booking lapangan olahraga khusus Octo Pontianak.",
    "full_description": "Octo App is a dedicated sports booking app developed exclusively for Octo, a sports facility located in Pontianak. The app streamlines the reservation process by allowing users to easily book available courts, join group play sessions, and rent equipment directly from the venue.",
    "image": "assets/Octo App - Sports Booking App.png",
    "category": "Sports Booking",
    "features": [
      "Court booking dengan jadwal real-time",
      "Fitur Mabar (Play Together)",
      "Informasi venue (harga, jam buka, fasilitas)",
      "Sewa perlengkapan olahraga",
      "Realtime availability",
      "In-app notifications"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "Firebase", "Rest API", "Xendit", "Figma"],
    "demo_url": "#",
    "color_class": "bg-blue-600/60"
  },

   "kokkino": {
    "title": "Kokkino Internusa",
    "subtitle": "HR Management System",
    "description": "Sistem internal untuk pengelolaan stock Hotways & Mixue Pontianak.",
    "full_description": "It’s an internal stock management system developed specifically for CV Trio Kokkino Internusa to streamline operational activities across its business units, including Hotways and Mixue Pontianak branches. The system helps staff record stock movement, track inventory in real time, and maintain consistency across multiple outlets.",
    "image": "assets/Hotways App - Stock Management System.png",
    "category": "Stock Management",
    "features": [
      "Real-time inventory tracking",
      "Mobile app untuk stock in/out",
      "Web dashboard analytics",
      "Automated low-stock alerts",
      "Role-based access",
      "Comprehensive reporting"
    ],
    "technologies": ["Laravel", "Electron", "MySQL", "Shadcn/ui", "Figma"],
    "demo_url": "#",
    "color_class": "bg-red-600/60"
  },

    "sadana": {
    "title": "Sadana App",
    "subtitle": "Pawn & Accounting System",
    "description": "Sistem manajemen gadai & akuntansi internal.",
    "full_description": "Sadana App is an integrated information system designed to support pawnshop operations and internal financial management. It handles customer pawn transactions, item data, repayment tracking, and financial workflows.",
    "image": "assets/Sadana App - Pawn and Accounting Information System.png",
    "category": "Pawn & Finance",
    "features": [
      "Pawn transaction management",
      "Customer & item tracking",
      "Accounting module",
      "Real-time dashboard",
      "Automated due reminders",
      "Role-based secure access"
    ],
    "technologies": ["TailwindCSS", "Laravel", "MySQL", "RestAPI", "Electron", "Figma"],
    "demo_url": "#",
    "color_class": "bg-amber-600/60"
  },

  "leapapp": {
    "title": "Leap App",
    "subtitle": "Lippo Community Living System",
    "description": "Platform komunitas untuk residents Lippo dalam mengelola kebutuhan sehari-hari.",
    "full_description": "Leap App is a community living platform developed to enhance the resident experience within the Lippo property ecosystem. It allows residents to manage facility bookings, pay community fees, access announcements, and submit service requests.",
    "image": "assets/Leap App - Lippo Community Living System.png",
    "category": "Community Living",
    "features": [
      "Facility booking",
      "Digital payment for community fees",
      "Announcements & updates",
      "Service request & maintenance ticketing",
      "Resident profile management",
      "Admin dashboard",
      "Push notifications"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "Firebase", "Rest API", "Xendit", "Figma"],
    "demo_url": "#",
    "color_class": "bg-indigo-600/60"
  },

    "BMI Masjid": {
    "title": "BMI Masjid",
    "subtitle": "Zakat Management App",
    "description": "Aplikasi zakat modern untuk pembayaran dan distribusi zakat yang transparan.",
    "full_description": "BMI Masjid is a digital zakat management app developed for Munzalan Indonesia to enhance efficiency, transparency, and accessibility in zakat operations. Users can calculate, pay, and track their contributions.",
    "image": "assets/BMI Masjid - Zakat App.png",
    "category": "Zakat App",
    "features": [
      "Zakat calculation & digital payment",
      "User contribution history",
      "Mustahik management",
      "Verification workflow",
      "Admin monitoring dashboard",
      "Payment reminder notifications",
      "Secure authentication"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "Firebase", "Rest API", "Xendit", "Figma"],
    "demo_url": "#",
    "color_class": "bg-purple-600/60"
  },

   "ypiapp": {
    "title": "YPI App",
    "subtitle": "Human Resource Management System",
    "description": "Sistem HR internal untuk manajemen data karyawan.",
    "full_description": "YPI App is an internal HR management system designed to streamline employee administration for YPI, including attendance, leave, and performance tracking.",
    "image": "assets/YPI App - Human Resource Management.png",
    "category": "HR Management",
    "features": [
      "Attendance & leave management",
      "Employee profile management",
      "Performance monitoring",
      "Activity tracking",
      "Admin HR dashboard"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "Shadcn/ui", "RestAPI", "Figma"],
    "demo_url": "#",
    "color_class": "bg-blue-500/60"
  },

        
         "pegasus": {
    "title": "Pegasus",
    "subtitle": "Human Resource Management",
    "description": "Platform HR untuk absensi, penjadwalan, dan penilaian kinerja.",
    "full_description": "Pegasus is a digital HR management platform that centralizes employee attendance, scheduling, leave management, and performance evaluation for operational efficiency.",
    "image": "assets/Pegasus App - Human Resource Management.png",
    "category": "HR Management",
    "features": [
      "Attendance & shift scheduling",
      "Leave & overtime requests",
      "Employee data management",
      "Performance & KPI tracking",
      "HR admin dashboard"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "RestAPI", "Figma"],
    "demo_url": "#",
    "color_class": "bg-cyan-600/60"
  },

  "eljohn": {
    "title": "El John Media App",
    "subtitle": "Digital Media Platform",
    "description": "Platform digital untuk membaca berita dan menonton konten El John.",
    "full_description": "El John Media App is a digital platform for consuming news, videos, and media content published by El John Media. Users can browse categories, watch videos, and stay updated with real-time editorial content.",
    "image": "assets/El John Media App - Digital Media Platform.png",
    "category": "Media Platform",
    "features": [
      "News & article feed",
      "Video streaming",
      "Category-based browsing",
      "Podcast streaming"
    ],
    "technologies": ["TailwindCSS", "RestAPI", "Electron", "Figma"],
    "demo_url": "#",
    "color_class": "bg-red-500/60"
  },

   "surau": {
    "title": "Surau",
    "subtitle": "Islamic Worship App",
    "description": "Aplikasi ibadah untuk jadwal sholat, Quran, dan konten Islami.",
    "full_description": "Surau is an Islamic worship companion app providing prayer schedules, Quran reading, Islamic content, and community features to support daily worship activities.",
    "image": "assets/Surau - Islamic Worship App.png",
    "category": "Islamic App",
    "features": [
      "Prayer times & reminders",
      "Quran reading module",
      "Islamic articles & content",
      "Islamic product catalog"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "RestAPI", "Figma"],
    "demo_url": "#",
    "color_class": "bg-emerald-600/60"
  },

  "ypifinance": {
    "title": "YPI Finance Management System",
    "subtitle": "Internal Finance System",
    "description": "Sistem keuangan internal untuk budgeting, expense, dan reporting.",
    "full_description": "YPI Finance Management System is an internal financial platform that supports budgeting, expense tracking, fund allocation, and reporting for YPI’s operational needs.",
    "image": "assets/YPI - Finance Management System.png",
    "category": "Finance System",
    "features": [
      "Budget planning & monitoring",
      "Expense tracking",
      "Fund allocation workflow",
      "Financial reporting dashboard",
      "Role-based access control"
    ],
    "technologies": ["Laravel", "MySQL", "Bootstrap", "RestAPI", "Figma"],
    "demo_url": "#",
    "color_class": "bg-slate-600/60"
  },

       "belanja": {
    "title": "Belanja Smart",
    "subtitle": "Grocery Shopping App",
    "description": "Aplikasi belanja kebutuhan sehari-hari dengan pengantaran cepat.",
    "full_description": "Belanja Smart is a mobile grocery shopping app that enables users to browse products, place orders, schedule deliveries, and track purchases easily.",
    "image": "assets/Belanja Smart - Grocery App.png",
    "category": "Groceries App",
    "features": [
      "Product browsing & search",
      "Shopping cart",
      "Checkout & payment",
      "Delivery scheduling",
      "Order tracking",
      "Promotions & discounts"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "RestAPI", "Figma"],
    "demo_url": "#",
    "color_class": "bg-green-600/60"
  },

   "muliagraha": {
    "title": "Mulia Graha",
    "subtitle": "Sales App",
    "description": "Aplikasi sales untuk manajemen lead, kunjungan, dan transaksi.",
    "full_description": "Mulia Graha is a mobile sales app designed to support sales teams in managing leads, tracking visits, recording transactions, and viewing product catalogs directly from the field.",
    "image": "assets/Mulia Graha - Sales App.png",
    "category": "Sales App",
    "features": [
      "Lead & customer management",
      "Sales activity tracking",
      "Product catalog & pricing",
      "Order recording",
      "Sales performance dashboard"
    ],
    "technologies": ["Flutter", "Laravel", "MySQL", "RestAPI", "Figma"],
    "demo_url": "#",
    "color_class": "bg-orange-600/60"
  },

         "maureno": {
    "title": "Maureno",
    "subtitle": "Furniture Landing Web",
    "description": "Landing website modern untuk produk furniture premium.",
    "full_description": "Maureno is a modern landing website created to showcase premium furniture collections, highlight product details, and drive customer inquiries through a clean and elegant layout.",
    "image": "assets/Maureno - Furniture Landing Web.png",
    "category": "Landing Page",
    "features": [
      "Product showcase",
      "Promotion highlights",
      "Contact & inquiry form",
      "Responsive design",
      "SEO-optimized content"
    ],
    "technologies": ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    "demo_url": "#",
    "color_class": "bg-rose-600/60"
  },

   "difis": {
    "title": "Difis",
    "subtitle": "Financial Information System",
    "description": "Sistem informasi keuangan & siswa untuk Dirgantara Flight School.",
    "full_description": "Difis is a comprehensive financial and student information system built for Dirgantara Flight School to manage aviation student records and administrative workflows.",
    "image": "assets/Difis - Financial Information System.png",
    "category": "Finance & Student System",
    "features": [
      "Aviation student data management",
      "Registration & admission fee processing",
      "SPP (monthly tuition) tracking",
      "Payment history & invoices",
      "Financial dashboards",
      "Admin control panel"
    ],
    "technologies": ["Laravel", "MySQL", "Shadcn/ui", "Figma"],
    "demo_url": "#",
    "color_class": "bg-violet-600/60"
  },

    "siupin": {
    "title": "Siupin",
    "subtitle": "E-Catalogue Platform",
    "description": "Platform katalog UPH untuk pemerintah daerah.",
    "full_description": "SIUPIN is a digital platform that provides comprehensive information about Processing Units (UPH - Unit Pengolahan Hasil) across different regions, allowing governments to manage and monitor data.",
    "image": "assets/Siupin - E-catalogue Platform.png",
    "category": "E-Catalogue",
    "features": [
      "UPH product catalogue management",
      "Search & filtering",
      "Admin content management",
      "Responsive UI",
      "Additional articles & info"
    ],
    "technologies": ["Laravel", "MySQL", "Shadcn/ui", "Figma"],
    "demo_url": "#",
    "color_class": "bg-yellow-700/60"
  },


  "lipposales": {
    "title": "Lippo Sales",
    "subtitle": "Sales Management System",
    "description": "Sistem sales untuk manajemen leads, booking, dan unit inventory.",
    "full_description": "Lippo Sales is a sales management system built to support Lippo’s property sales team, enabling them to manage leads, track bookings, view available units, and handle customer requests.",
    "image": "assets/Lippo Sales - Sales Management System.png",
    "category": "Sales Management",
    "features": [
      "Lead & customer management",
      "Sales dashboard",
      "Admin tools for sales operations"
    ],
    "technologies": ["Laravel", "MySQL", "TailwindCSS", "Figma"],
    "demo_url": "#",
    "color_class": "bg-blue-700/60"
  },


  "flipglobe": {
    "title": "Flip Globe",
    "subtitle": "Cross-border Payment Platform",
    "description": "Platform remitansi lintas negara dengan biaya transparan.",
    "full_description": "Flip Globe is a cross-border remittance and payment platform that enables users to send and receive money internationally with transparent fees and fast transfer times.",
    "image": "assets/Flip Globe - Cross-border Payment Platform.png",
    "category": "Payment Platform",
    "features": [
      "International money transfers",
      "Multi-currency support",
      "Transaction tracking"
    ],
    "technologies": ["Laravel", "MySQL", "TailwindCSS"],
    "demo_url": "#",
    "color_class": "bg-sky-700/60"
  },

   "hevypos": {
    "title": "Hevy Beauty Care POS",
    "subtitle": "Point of Sale",
    "description": "POS untuk klinik kecantikan dan toko skincare.",
    "full_description": "Hevy Beauty Care POS is a simplified point-of-sale system tailored for beauty clinics or skincare shops, supporting transaction processing, product management, and reporting.",
    "image": "assets/Hevy Beauty Care - Point of Sale.png",
    "category": "Point of Sale",
    "features": [
      "Sales transaction processing",
      "Product & inventory management",
      "Discount & promo handling",
      "Daily sales reporting"
    ],
    "technologies": ["Laravel", "MySQL", "Bootstrap"],
    "demo_url": "#",
    "color_class": "bg-pink-600/60"
  },

        "hotways": {
            "title": "Hotways App",
            "subtitle": "HR Management System", 
            "description": "Aplikasi manajemen SDM internal yang membantu proses administrasi dan tracking karyawan.",
            "full_description": "Hotways App adalah sistem HR management yang dikembangkan khusus untuk kebutuhan internal perusahaan. Aplikasi ini menyederhanakan proses administrasi dan monitoring karyawan.",
            "image": "assets/Hotways App - Stock Management System.png",
            "category": "HR Management System",
            "features": [
                "Employee Management",
                "Leave Management", 
                "Task Assignment",
                "Report Generation",
                "Document Storage"
            ],
            "technologies": ["React", "Express.js", "MongoDB", "JWT"],
            "demo_url": "#",
            "color_class": "bg-red-600/60"
        },
        "flipdeals": {
    "title": "Flip Deals",
    "subtitle": "Online Cashback Service",
    "description": "Landing page modern untuk menampilkan value utama Flip Deals secara jelas dan menarik.",
    "full_description": "A modern and high–conversion landing page designed to showcase Flip Deals’ core value proposition, highlight promotional offers, and guide users seamlessly toward making a purchase. The layout emphasizes clarity, trust, and visual appeal, ensuring visitors understand the brand’s benefits within seconds.",
    "image": "assets/Flip Deals - Online Cashback Service.png",
    "category": "Cashback Service",
    "features": [
      "Clean and responsive interface optimized for both desktop and mobile",
      "Clear product/value explanation with strong visual hierarchy",
      "Promotional highlights designed to maximize engagement",
      "Smooth scrolling and intuitive navigation",
      "CTA placement focused on increasing conversions"
    ],
    "technologies": ["HTML", "CSS", "JavaScript", "TailwindCSS", "Figma"],
    "demo_url": "#",
    "color_class": "bg-yellow-600/60"
  },
    }
};

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const projectName = urlParams.get('project');
        
        if (projectName && window.location.pathname.includes('combined-project-detail.html')) {
            loadProjectDetail(projectName);
        } else if (window.location.pathname.includes('work-detail.html')) {
            loadWorkDetail();
        } else {
            loadHomepage();
        }
    } catch (error) {
        console.error('Initialization error:', error);
        showError('Failed to load page content');
    }
});

// Homepage loader
function loadHomepage() {
    try {
        const sections = ALL_DATA.sections;
        
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

        initNavbar(); 
        setTimeout(initMainScript, 100); 

        console.log('All sections rendered from JSON data successfully.');
    } catch (error) {
        console.error('Homepage loading error:', error);
        showError('Failed to load homepage content');
    }
}

// Project detail loader
function loadProjectDetail(projectName) {
    try {
        const projectKey = `${projectName}_sections`;
        const projectData = ALL_DATA[projectKey];

        if (!projectData) {
            showError(`Project ${projectName} not found`);
            return;
        }

        renderSimpleSections(projectData, projectName);
    } catch (error) {
        console.error('Project detail loading error:', error);
        showError('Failed to load project details');
    }
}

// Work detail loader  
function loadWorkDetail() {
    try {
        console.log('Loading work detail page...');
        // Implementation for work-detail page
    } catch (error) {
        console.error('Work detail loading error:', error);
        showError('Failed to load work details');
    }
}

// ====================================================================
// RENDER FUNCTIONS
// ====================================================================

function renderNavbar(navData) {
    try {
        const linksContainer = document.getElementById('navbar-links');
        const ctaContainer = document.getElementById('navbar-cta-desktop');

        if (!linksContainer || !ctaContainer) return;

        const linkMarkup = navData.links.map(link => `
            <a href="${link.href}" class="hover:text-teal-400 transition nav-link">${link.text}</a>
        `).join('');

        const ctaMarkup = `
            <a href="${navData.cta.href}" 
               class="ml-4 bg-white text-black px-6 py-2 rounded-full hover:bg-[#00AEC2] hover:text-white transition-colors">
               ${navData.cta.text}
            </a>
        `;

        linksContainer.innerHTML = linkMarkup;
        ctaContainer.innerHTML = ctaMarkup;
    } catch (error) {
        console.error('Navbar rendering error:', error);
    }
}

function renderMobileNavbar(mobileData) {
    try {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;

        mobileMenu.innerHTML = `
            <nav class="space-y-8 text-left px-8">
                ${mobileData.links.map(link => `
                    <a href="${link.href}" 
                    class="block font-poppins font-semibold tracking-wide hover:text-teal-400 transition">
                    ${link.text}
                    </a>
                `).join('')}
            </nav>
        `;
    } catch (error) {
        console.error('Mobile navbar rendering error:', error);
    }
}

function renderHero(heroData) {
    try {
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const ctaContainer = document.getElementById('hero-cta-container');

        if (!heroTitle || !heroSubtitle || !ctaContainer) return;

        heroTitle.textContent = heroData.title;
        heroSubtitle.textContent = heroData.subtitle;
        
        ctaContainer.innerHTML = `
            <a href="${heroData.cta.href}">
                <button class="bg-white text-dark-bg px-6 py-2.5 text-sm sm:text-base rounded-full font-medium 
                    hover:bg-[#00AEC2] hover:text-white transition-colors shadow-sm">
                    ${heroData.cta.text}
                </button>
            </a>
            <a href="#work" class="inline-block px-6 py-2.5 text-sm sm:text-base rounded-full font-medium 
                      bg-white/30 text-white border border-white/20 
                      hover:bg-white/40 hover:text-white active:bg-white active:text-white 
                      transition-colors duration-300 backdrop-blur-sm shadow-sm">
                View Our Work
            </a>
        `;
    } catch (error) {
        console.error('Hero rendering error:', error);
    }
}

  function renderTrustedBy(trustedByData) {
    try {
        const tagContainer = document.getElementById('trusted-by-tag');
        const container = document.getElementById('trusted-by-marquee');
        if (!tagContainer || !container) return;

        tagContainer.textContent = trustedByData.tag;

        // hanya duplikasi 2x
        const allLogos = [
            ...trustedByData.logos,
            ...trustedByData.logos
        ];

        // 🔥 FIX PALING PENTING
        container.style.setProperty('--marquee-items', allLogos.length);

        container.innerHTML = allLogos
            .map((logo, i) => `
                <img 
                    class="marquee__item opacity-80 hover:opacity-100 transition"
                    src="${logo.src}"
                    alt="${logo.alt}"
                    style="--marquee-item-index: ${i + 1}; height: ${logo.size || '60px'};"
                >
            `)
            .join('');
    } catch (error) {
        console.error('TrustedBy rendering error:', error);
    }
}

function renderServices(serviceData) {
    try {
        const servicesTag = document.getElementById('services-tag');
        const servicesTitle = document.getElementById('services-title');
        const container = document.getElementById('services-grid');

        if (!servicesTag || !servicesTitle || !container) return;

        servicesTag.textContent = serviceData.tag;
        servicesTitle.textContent = serviceData.title;

        container.innerHTML = serviceData.items.map((item, index) => `
            <div class="service-card rounded-xl p-[20px] text-left bg-[#0d1e22] border border-white/10 hover:border-teal-400 transition-colors" style="--delay: ${index * 0.15}s;">
                <div class="mb-8">
                    <img src="${item.icon}" alt="${item.alt}" class="w-[27px] h-[27px]">
                </div>
                <h3 class="text-lg font-semibold mb-3">${item.title}</h3>
                <p class="text-sm text-gray-400 leading-relaxed">${item.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Services rendering error:', error);
    }
}

function renderAbout(aboutData) {
    try {
        const aboutTag = document.getElementById('about-tag');
        const aboutTitle = document.getElementById('about-title');
        const aboutContent = document.getElementById('about-content');
        const aboutImage = document.getElementById('about-image');

        if (!aboutTag || !aboutTitle || !aboutContent || !aboutImage) return;

        aboutTag.textContent = aboutData.tag;
        aboutTitle.textContent = aboutData.title;
        aboutContent.textContent = aboutData.content;
        aboutImage.src = aboutData.image; 
        aboutImage.alt = 'About Us Image';
    } catch (error) {
        console.error('About rendering error:', error);
    }
}

function renderTestimonials(testiData) {
    try {
        const testiTag = document.getElementById('testi-tag');
        const testiTitle = document.getElementById('testi-title');
        const container = document.getElementById('testimonial-track');

        if (!testiTag || !testiTitle || !container) return;

        testiTag.textContent = testiData.tag;
        testiTitle.textContent = testiData.title;

        const reviewsToLoop = testiData.reviews.concat(testiData.reviews); 

        container.innerHTML = reviewsToLoop.map(review => `
            <div class="testimonial-card">
                <p class="mb-6 text-gray-300 text-sm leading-relaxed">${review.quote}</p>
                <div class="flex items-center gap-4 pt-4">
                    <img src="${review.avatar}" alt="${review.name}" class="w-12 h-12 rounded-full object-cover">
                    <div>
                        <h4 class="font-semibold">${review.name}</h4>
                        <p class="text-sm text-gray-400">${review.handle}</p>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Testimonials rendering error:', error);
    }
}

function renderCta(ctaData) {
    try {
        const ctaHeadline = document.getElementById('cta-headline');
        const ctaButton = document.getElementById('cta-button');

        if (!ctaHeadline || !ctaButton) return;

        ctaHeadline.innerHTML = ctaData.headline_html;
        ctaButton.textContent = ctaData.cta.text;
        ctaButton.href = ctaData.cta.href;
    } catch (error) {
        console.error('CTA rendering error:', error);
    }
}

function renderFooter(footerData) {
    try {
        const footerDescription = document.getElementById('footer-description');
        const linksContainer = document.getElementById('footer-links');
        const contactContainer = document.querySelector('#footer .space-y-4:last-child');

        if (!footerDescription || !linksContainer || !contactContainer) return;

        footerDescription.textContent = footerData.description;
        
        linksContainer.innerHTML = footerData.quick_links.map(link => `
            <a href="${link.href}" class="block text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm">${link.text}</a>
        `).join('');
        
        contactContainer.innerHTML = `
            <div class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"/>
                </svg>
                <div class="text-sm text-gray-300 leading-relaxed">
                    ${footerData.contact.location}
                </div>
            </div>
            
            <div class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.66l1.52 4.07a1 1 0 01-.27 1.11l-2.3 2.3a11.042 11.042 0 005.2 5.2l2.3-2.3a1 1 0 011.11-.27l4.07 1.52a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.373 21 3 14.627 3 7V5z"/>
                </svg>
                <div class="text-sm text-gray-300 leading-relaxed">
                    ${footerData.contact.phone}
                </div>
            </div>

            <!-- TAMBAH BAGIAN EMAIL INI -->
            <div class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div class="text-sm text-gray-300 leading-relaxed">
                    ${footerData.contact.email}
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Footer rendering error:', error);
    }
}

// Animasi transisi smooth ke halaman detail portofolio
function showWorkDetail(allProjects) {
  try {
    const mainWorkSection = document.getElementById('work');
    const workDetailSection = document.getElementById('work-detail');
    const workDetailGrid = document.getElementById('work-detail-grid');

    if (!mainWorkSection || !workDetailSection || !workDetailGrid) return;

    // Fade out section utama
    mainWorkSection.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
    setTimeout(() => {
      mainWorkSection.classList.add('hidden');
      mainWorkSection.classList.remove('opacity-0', 'translate-y-4');

      // Fade in section detail
      workDetailSection.classList.remove('hidden');
      workDetailSection.classList.add('opacity-0', 'translate-y-4');
      requestAnimationFrame(() => {
        workDetailSection.classList.add('transition-all', 'duration-500');
        workDetailSection.classList.remove('opacity-0', 'translate-y-4');
      });

      // Render semua project
      workDetailGrid.innerHTML = allProjects.map(project => {
        const projectDetail = ALL_DATA.projects_detail[project.id];
        return `
          <div class="group cursor-pointer transition-all duration-300 hover:scale-105 project-detail-card" data-project-id="${project.id}">
            <div class="bg-dark-card rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-teal-500/30 transition-all duration-300 h-full">
              <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-3">${project.category}</p>
                <p class="text-gray-300 text-sm line-clamp-3">${projectDetail?.description || ''}</p>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Klik card → buka modal
      document.querySelectorAll('.project-detail-card').forEach(card => {
        card.addEventListener('click', () => {
          const projectId = card.getAttribute('data-project-id');
          showProjectDetailModal(projectId);
        });
      });

      
      // Scroll smooth ke section
      setTimeout(() => {
        workDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);

      // Event tombol kembali
      const backBtn = document.getElementById('backToWorkBtn');
      if (backBtn) {
        backBtn.addEventListener('click', () => backToMainWork());
      }

    }, 400);
  } catch (error) {
    console.error('Show work detail error:', error);
  }
}

function backToMainWork() {
    try {
        const mainWorkSection = document.getElementById('work');
        const workDetailSection = document.getElementById('work-detail');

        if (!mainWorkSection || !workDetailSection) return;

        // Hapus class show dari semua cards sebelum menyembunyikan section
        const detailCards = document.querySelectorAll('.project-detail-card');
        detailCards.forEach(card => {
            card.classList.remove('show');
        });

        // Tunggu sebentar sebelum menyembunyikan section (untuk transisi yang smooth)
        setTimeout(() => {
            workDetailSection.style.display = 'none';
            mainWorkSection.style.display = 'flex';
            
            // Scroll kembali ke section utama
            setTimeout(() => {
                mainWorkSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                console.log('Back to main work section');
            }, 100);
        }, 300);

    } catch (error) {
        console.error('Back to main work error:', error);
    }
}


// Update pada fungsi renderWork untuk menyamakan ukuran dengan service card


function renderWork(workData) {
    try {
        console.log('renderWork called with data:', workData);
        
        const workTag = document.getElementById('work-tag');
        const workTitle = document.getElementById('work-title');
        const workDescription = document.getElementById('work-description');
        const container = document.getElementById('work-grid');
        const seeMoreBtn = document.getElementById('toggleProjectsBtn');

        console.log('Elements found:', { workTag, workTitle, workDescription, container, seeMoreBtn });

        if (!workTag || !workTitle || !workDescription || !container) {
            console.error('Required elements not found');
            return;
        }

        workTag.textContent = workData.tag;
        workTitle.textContent = workData.title;
        workDescription.textContent = workData.description;

container.className =
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10";

        // Show only non-hidden projects
        const visibleProjects = workData.projects.filter(p => !p.isHidden);
        console.log('Visible projects:', visibleProjects);
        
        container.innerHTML = visibleProjects.map(project => `
            <div class="scroll-reveal block group transition-all duration-300 w-full project-item max-w-[420px] mx-auto cursor-pointer" 
                 data-project-id="${project.id}">
                <div class="overflow-hidden rounded-2xl relative shadow-lg">
                  <img src="${project.image}" alt="${project.title}" 
     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">


                    <div class="absolute inset-0 ${project.color_class} hidden md:flex 
                                items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span class="flex items-center gap-2 text-white font-poppins font-medium text-lg 
                                    transform -translate-x-20 opacity-0 transition-all duration-500 ease-out
                                    group-hover:translate-x-0 group-hover:opacity-100">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                    <div class="absolute bottom-3 right-3 md:hidden">
                        <span class="flex items-center gap-1 ${project.color_class} text-white text-sm px-3 py-1 rounded-2xl">
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="text-left px-2 mt-4">
                    <h3 class="text-lg sm:text-xl font-semibold mb-1 text-white">${project.title}</h3>
                    <p class="text-gray-400 text-sm">${project.category}</p>
                </div>
            </div>
        `).join('');

        // Update See More button
        if (seeMoreBtn) {
            seeMoreBtn.textContent = "See More";
            console.log('See More button found, adding event listener');
            
            // Remove existing event listeners first
            seeMoreBtn.replaceWith(seeMoreBtn.cloneNode(true));
            const newSeeMoreBtn = document.getElementById('toggleProjectsBtn');
            
            newSeeMoreBtn.addEventListener('click', function() {
                console.log('See More button clicked');
                showWorkDetail(workData.projects);
            });
        } else {
            console.error('See More button not found');
        }

        // Add click handlers for project items
        setTimeout(() => {
            const projectItems = document.querySelectorAll('.project-item');
            console.log('Project items found:', projectItems.length);
            
            projectItems.forEach(item => {
                item.addEventListener('click', () => {
                    const projectId = item.getAttribute('data-project-id');
                    console.log('Project item clicked:', projectId);
                    showProjectDetailModal(projectId);
                });
            });
        }, 100);

    } catch (error) {
        console.error('Work rendering error:', error);
    }
}

// Perbaiki fungsi showProjectDetailModal
function showProjectDetailModal(projectId) {
    try {
        console.log('Opening modal for project:', projectId);
        const project = ALL_DATA.projects_detail[projectId];
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }

        // Hapus modal yang sudah ada
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) {
            document.body.removeChild(existingModal);
        }

        const isMobile = window.innerWidth < 768;
        const modalHTML = `
            <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 modal-overlay">
                <div class="bg-dark-card rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto transform scale-95 transition-transform duration-300 relative ${isMobile ? 'mx-2' : ''}">
                    <!-- Close Button -->
                    <button class="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors close-modal">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>

                    <!-- Modal content... (tetap  sama seperti sebelumnya) -->
                    <div class="relative">
                        <img src="${project.image}" alt="${project.title}" 
                             class="w-full ${isMobile ? 'h-48' : 'h-64 md:h-80'} object-cover rounded-t-2xl">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent rounded-t-2xl"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <div class="flex flex-wrap items-center gap-2 ${isMobile ? 'mb-2' : 'mb-3'}">
                                <span class="px-3 py-1 rounded-full text-sm font-medium ${project.color_class} text-white">
                                    ${project.category}
                                </span>
                                <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                                    ${project.status === 'completed' ? 'Completed' : 'In Development'}
                                </span>
                            </div>
                            <h1 class="${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white ${isMobile ? 'mb-1' : 'mb-2'}">${project.title}</h1>
                            <p class="${isMobile ? 'text-lg' : 'text-xl'} text-gray-300">${project.subtitle}</p>
                        </div>
                    </div>

                    <div class="${isMobile ? 'p-4' : 'p-6 md:p-8'}">
                        <!-- Description -->
                        <div class="${isMobile ? 'mb-6' : 'mb-8'}">
                            <h2 class="${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-white ${isMobile ? 'mb-3' : 'mb-4'}">Project Overview</h2>
                            <p class="text-gray-300 ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed">${project.full_description}</p>
                        </div>

                        <div class="grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} ${isMobile ? 'gap-6' : 'gap-8'} ${isMobile ? 'mb-6' : 'mb-8'}">
                            <!-- Features -->
                            <div>
                                <h3 class="${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-white ${isMobile ? 'mb-3' : 'mb-4'}">Key Features</h3>
                                <div class="grid gap-2">
                                    ${project.features.map(feature => `
                                        <div class="flex items-center gap-3">
                                            <div class="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                                            <span class="text-gray-300 ${isMobile ? 'text-sm' : ''}">${feature}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Technologies -->
                            <div class="${isMobile ? 'mt-4' : ''}">
                                <h3 class="${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-white ${isMobile ? 'mb-3' : 'mb-4'}">Technologies Used</h3>
                                <div class="flex flex-wrap gap-2">
                                    ${project.technologies.map(tech => `
                                        <span class="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg ${isMobile ? 'text-xs' : 'text-sm'}">${tech}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- CTA Buttons -->
                        <div class="flex ${isMobile ? 'flex-col' : 'flex-col sm:flex-row'} gap-3">
                            <button class="flex-1 border border-teal-500 text-teal-500 ${isMobile ? 'py-3' : 'py-4'} rounded-xl font-semibold hover:bg-teal-500 hover:text-white transition-colors close-modal ${isMobile ? 'text-sm' : ''}">
                                Close Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modal = document.querySelector('.modal-overlay');
        const modalContent = modal.querySelector('.bg-dark-card');

        // Animate in
        setTimeout(() => {
            modal.classList.add('opacity-100');
            modalContent.classList.remove('scale-95');
        }, 10);

        // Close modal function
        const closeModal = () => {
            modal.classList.remove('opacity-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                if (modal.parentNode) {
                    document.body.removeChild(modal);
                }
            }, 300);
        };

        // Event listeners untuk closing modal
        modal.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', closeModal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Close on Escape key
        const escHandler = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', escHandler);

        // Cleanup event listener ketika modal ditutup
        modal.addEventListener('transitionend', function handler() {
            if (!modal.parentNode) {
                document.removeEventListener('keydown', escHandler);
                modal.removeEventListener('transitionend', handler);
            }
        });

    } catch (error) {
        console.error('Project detail modal error:', error);
    }
}

// Pastikan DOM sudah fully loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Reset semua event listeners yang mungkin bertumpuk
        document.body.replaceWith(document.body.cloneNode(true));
        
        const urlParams = new URLSearchParams(window.location.search);
        const projectName = urlParams.get('project');
        
        if (projectName && window.location.pathname.includes('combined-project-detail.html')) {
            loadProjectDetail(projectName);
        } else if (window.location.pathname.includes('work-detail.html')) {
            loadWorkDetail();
        } else {
            loadHomepage();
        }
    } catch (error) {
        console.error('Initialization error:', error);
        showError('Failed to load page content');
    }
});
function showWorkDetail(allProjects) {
    try {
        console.log('showWorkDetail called with projects:', allProjects);
        
        const mainWorkSection = document.getElementById('work');
        const workDetailSection = document.getElementById('work-detail');
        const workDetailGrid = document.getElementById('work-detail-grid');

        console.log('Sections found:', { 
            mainWorkSection, 
            workDetailSection, 
            workDetailGrid 
        });

        if (!mainWorkSection || !workDetailSection || !workDetailGrid) {
            console.error('Required elements not found');
            return;
        }

        // Sembunyikan section utama dan tampilkan detail
        mainWorkSection.style.display = 'none';
        workDetailSection.style.display = 'block';
        
        console.log('Display toggled - main hidden, detail shown');

        // Render semua project cards (masih tersembunyi)
        workDetailGrid.innerHTML = allProjects.map(project => {
            console.log('Rendering project:', project.id);
            return `
            <div class="block group transition-all duration-300 w-full max-w-full project-detail-card cursor-pointer" 
                 data-project-id="${project.id}">
                <div class="overflow-hidden rounded-2xl relative shadow-lg w-full">
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full object-cover rounded-2xl
                                transform transition-transform duration-500 ease-out group-hover:scale-105">
                    
                    <div class="absolute inset-0 ${project.color_class} hidden md:flex 
                                items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span class="flex items-center gap-2 text-white font-poppins font-medium text-lg 
                                    transform -translate-x-20 opacity-0 transition-all duration-500 ease-out
                                    group-hover:translate-x-0 group-hover:opacity-100">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                    
                    <div class="absolute bottom-3 right-3 md:hidden">
                        <span class="flex items-center gap-1 ${project.color_class} text-white text-sm px-3 py-1 rounded-2xl">
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
                
                <div class="text-left px-2 mt-4">
                    <h3 class="text-lg font-semibold mb-1 text-white">${project.title}</h3>
                    <p class="text-gray-400 text-sm">${project.category}</p>
                </div>
            </div>
            `;
        }).join('');

        console.log('Work detail grid rendered with', allProjects.length, 'projects');

        // Trigger animasi fade in setelah render
        setTimeout(() => {
            const detailCards = document.querySelectorAll('.project-detail-card');
            console.log('Detail cards found:', detailCards.length);
            
            // Tambahkan class show untuk memicu animasi satu per satu
            detailCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 100); // Delay 100ms antara setiap card
            });

            // Tambahkan event listener untuk klik card
            detailCards.forEach(card => {
                card.addEventListener('click', () => {
                    const projectId = card.getAttribute('data-project-id');
                    console.log('Detail card clicked:', projectId);
                    showProjectDetailModal(projectId);
                });
            });
        }, 100);

        // Scroll ke section detail
        setTimeout(() => {
            workDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('Scrolled to work detail section');
        }, 200);

    } catch (error) {
        console.error('Show work detail error:', error);
    }
}

function showProjectDetailModal(projectId) {
    try {
        const project = ALL_DATA.projects_detail[projectId];
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }

        const isMobile = window.innerWidth < 768;
        const modalHTML = `
            <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 modal-overlay">
                <div class="bg-dark-bg rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto transform scale-95 transition-transform duration-300 relative ${isMobile ? 'mx-2' : ''}">
                    <!-- Close Button -->
                    <button class="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors close-modal">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>

                    <!-- Hero Section -->
                    <div class="relative">
                        <img src="${project.image}" alt="${project.title}" 
                             class="w-full ${isMobile ? 'h-48' : 'h-64 md:h-80'} object-cover rounded-t-2xl">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent rounded-t-2xl"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <div class="flex flex-wrap items-center gap-2 ${isMobile ? 'mb-2' : 'mb-3'}">
                                <span class="px-3 py-1 rounded-full text-sm font-medium ${project.color_class} text-white">
                                    ${project.category}
                                </span>
                               
                            </div>
                            <h1 class="${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white ${isMobile ? 'mb-1' : 'mb-2'}">${project.title}</h1>
                            <p class="${isMobile ? 'text-lg' : 'text-xl'} text-gray-300">${project.subtitle}</p>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="${isMobile ? 'p-4' : 'p-6 md:p-8'}">
                        <!-- Description -->
                        <div class="${isMobile ? 'mb-6' : 'mb-8'}">
                            <h2 class="${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-white ${isMobile ? 'mb-3' : 'mb-4'}">Project Overview</h2>
                            <p class="text-gray-300 ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed">${project.full_description}</p>
                        </div>

                        <div class="grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} ${isMobile ? 'gap-6' : 'gap-8'} ${isMobile ? 'mb-6' : 'mb-8'}">
                            <!-- Features -->
                            <div>
                                <h3 class="${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-white ${isMobile ? 'mb-3' : 'mb-4'}">Key Features</h3>
                                <div class="grid gap-2">
                                    ${project.features.map(feature => `
                                        <div class="flex items-center gap-3">
                                            <div class="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                                            <span class="text-gray-300 ${isMobile ? 'text-sm' : ''}">${feature}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Technologies -->
                            <div class="${isMobile ? 'mt-4' : ''}">
                                <h3 class="${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-white ${isMobile ? 'mb-3' : 'mb-4'}">Technologies Used</h3>
                                <div class="flex flex-wrap gap-2">
                                    ${project.technologies.map(tech => `
                                        <span class="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg ${isMobile ? 'text-xs' : 'text-sm'}">${tech}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        
                        <!-- CTA Buttons -->
                        <div class="flex ${isMobile ? 'flex-col' : 'flex-col sm:flex-row'} gap-3">
                            <button class="flex-1 border border-teal-500 text-teal-500 ${isMobile ? 'py-3' : 'py-4'} rounded-xl font-semibold hover:bg-teal-500 hover:text-white transition-colors close-modal ${isMobile ? 'text-sm' : ''}">
                                Close Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) {
            existingModal.remove();
        }

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modal = document.querySelector('.modal-overlay');
        const modalContent = modal.querySelector('.bg-dark-bg');

        // Animate in
        setTimeout(() => {
            modal.classList.add('opacity-100');
            modalContent.classList.add('scale-100');
            modalContent.classList.remove('scale-95');
        }, 10);

        // Close modal function
        const closeModal = () => {
            modal.classList.remove('opacity-100');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                if (modal && modal.parentNode) {
                    modal.remove();
                }
                
                // Re-enable body scrolling
                document.body.style.overflow = 'auto';
                document.body.style.pointerEvents = 'auto';
            }, 300);
        };

        // Disable body scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Event listeners for closing modal
        modal.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', closeModal);
        });

        // Close when clicking on overlay background
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);

        // Cleanup event listener when modal is closed
        modal.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity' && !modal.classList.contains('opacity-100')) {
                document.removeEventListener('keydown', escHandler);
                modal.removeEventListener('transitionend', handler);
            }
        });

    } catch (error) {
        console.error('Project detail modal error:', error);
        
        // Ensure body scrolling is re-enabled even if there's an error
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
    }
}

function renderSimpleSections(data, projectName) {
    try {
        // Implementation for simple sections rendering
        console.log('Rendering simple sections for:', projectName);
    } catch (error) {
        console.error('Simple sections rendering error:', error);
    }
}

// ====================================================================
// INITIALIZATION FUNCTIONS
// ====================================================================

function initNavbar() {
    try {
        const mobileMenuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const navbar = document.getElementById("navbar");

        const mainWorkSection = document.getElementById("work");
        const workDetailSection = document.getElementById("work-detail");

        // Toggle menu mobile
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("show");
                document.body.classList.toggle("overflow-hidden");
            });
        }

        // Smooth Scroll Adaptif + FIX scroll to hidden section
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                const targetId = this.getAttribute("href").substring(1);
                const target = document.getElementById(targetId);
                if (!target) return;

                e.preventDefault();

          // FIX: Jika sedang berada di See More, scroll ke work-detail, bukan switch tampilan
if (targetId === "work") {
    if (mainWorkSection && workDetailSection) {

        // Jika yang tampil adalah See More
        if (workDetailSection.style.display === "block") {
            setTimeout(() => {
                workDetailSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 50);
            return; // Hentikan behavior scroll normal
        }
    }
}


                // Scroll normal (jika tidak sedang hidden)
                const navbarRect = navbar?.getBoundingClientRect();
                const isNavbarVisible = navbarRect && navbarRect.top <= 0;
                const navbarHeight = isNavbarVisible ? (navbar?.offsetHeight || 0) : 0;
                const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetY,
                    behavior: "smooth",
                });

                // Tutup mobile menu saat klik
                if (window.innerWidth < 768 && mobileMenu.classList.contains("show")) {
                    mobileMenu.classList.remove("show");
                    document.body.classList.remove("overflow-hidden");
                }
            });
        });

        // Navbar animasi muncul saat load
        if (navbar) {
            navbar.classList.remove("opacity-0", "-translate-y-20");
            navbar.classList.add("opacity-100", "translate-y-0");
        }
    } catch (error) {
        console.error('Navbar initialization error:', error);
    }
}

function initMainScript() {
    try {
        // Animasi muncul saat di-scroll
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

        // Efek hover animasi
        serviceCards.forEach(card => {
            const img = card.querySelector('img');
            const title = card.querySelector('h3');
            const text = card.querySelector('p');

            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.03)';
                card.style.transition = 'transform 0.3s ease-out, box-shadow 0.4s ease-out';
                card.style.boxShadow = '0 20px 40px rgba(29, 209, 161, 0.1)';

                if (img) {
                    img.style.transform = 'scale(1.05)';
                    img.style.transition = 'transform 0.6s ease-out';
                }

                if (title) {
                    title.style.color = '#1dd1a1';
                    title.style.transform = 'scale(1.03)';
                    title.style.transition = 'transform 0.4s ease-out, color 0.4s ease-out';
                }

                if (text) {
                    text.style.transform = 'scale(1.03)';
                    text.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
                    text.style.opacity = '0.95';
                }
            });

            card.addEventListener('mouseleave', () => {
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

        // General scroll reveal
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

        // Testimonial marquee pause saat hover
        const testimonialTrack = document.querySelector('.testimonial-track');
        if (testimonialTrack) {
            testimonialTrack.addEventListener('mouseenter', () => {
                testimonialTrack.style.animationPlayState = 'paused';
            });
            testimonialTrack.addEventListener('mouseleave', () => {
                testimonialTrack.style.animationPlayState = 'running';
            });
        }

        // Back button functionality
            const backToWorkBtn = document.getElementById('backToWorkBtn');
        if (backToWorkBtn) {
            console.log('Back button found, adding event listener');
            
            // Remove existing event listeners
            backToWorkBtn.replaceWith(backToWorkBtn.cloneNode(true));
            const newBackBtn = document.getElementById('backToWorkBtn');
            
            newBackBtn.addEventListener('click', function() {
                console.log('Back button clicked');
                const mainWorkSection = document.getElementById('work');
                const workDetailSection = document.getElementById('work-detail');
                
                if (mainWorkSection && workDetailSection) {
                    workDetailSection.style.display = 'none';
                    mainWorkSection.style.display = 'flex'; // atau 'block' sesuai kebutuhan
                    mainWorkSection.scrollIntoView({ behavior: 'smooth' });
                    console.log('Back to main work section');
                }
            });
        } else {
            console.log('Back button not found on initial load (might be ok)');
        }
        console.log('Main script initialized successfully');
    } catch (error) {
        console.error('Main script initialization error:', error);
    }
}
// URL scroll parameter handler
document.addEventListener("DOMContentLoaded", () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const section = params.get("scroll");

        if (section) {
            window.scrollTo(0, 0);

            const target = document.getElementById(section);
            const navbar = document.getElementById("navbar");
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            setTimeout(() => {
                if (target) {
                    const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                }
            }, 800);
        }
    } catch (error) {
        console.error('URL scroll handler error:', error);
    }
});

function showError(message) {
    try {
        const errorDiv = document.getElementById('global-error');
        if (errorDiv) {
            errorDiv.innerHTML = `
                <div style="padding: 20px; background: #ff4444; color: white; text-align: center;">
                    <h3>Error</h3>
                    <p>${message}</p>
                    <button onclick="window.location.href='index.html'" style="margin-top: 10px; padding: 5px 10px; background: white; color: black; border: none; border-radius: 5px;">
                        Kembali ke Home
                    </button>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error display error:', error);
    }
}
