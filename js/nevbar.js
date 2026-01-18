document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        const menuIcon = mobileMenuBtn.querySelector('i');

        function closeMobileMenu() {
            mobileNav.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }

        // Toggle mobile menu on button click
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // NEW: Auto-close mobile menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // matches your desktop breakpoint
                closeMobileMenu();
            }
        });
    });

