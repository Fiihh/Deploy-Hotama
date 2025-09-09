tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'teal-custom': '#1dd1a1',
                        'lawut': '#067079',
                        'dark-bg': '#081013',
                        'dark-card': '#1a2332',
                        'lawut-dark': '#013a3d',
                    },
                    fontFamily: {
                        'inter': ['Inter'],
                        'sans': ['sans-serif'],
                        'poppins': ['Poppins', 'sans-serif'],
                    },
                    backdropBlur: {
                        'xs': '2px',
                    },
                    animation: {
                        'scroll': 'scroll 20s linear infinite',
                    },
                    keyframes: {
                        'scroll': {
                            from: { transform: 'translateX(0)' },
                            to: { transform: 'translateX(-100%)' },
                        }
                    }
                }
            }
        }