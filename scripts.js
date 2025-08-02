   // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const appearOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });
        
        // Modal functionality
        const sponsorModal = document.getElementById('sponsorModal');
        const supportModal = document.getElementById('supportModal');
        const supportBtns = document.querySelectorAll('.support-btn');
        const closeModalBtns = document.querySelectorAll('.close-modal');
        
        // Sponsor a Child button
        document.querySelector('a[href="#sponsor"]').addEventListener('click', (e) => {
            e.preventDefault();
            sponsorModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
        // Support a Cause buttons
        supportBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const cause = btn.getAttribute('data-cause');
                document.getElementById('causeTitle').textContent = cause;
                
                let description = '';
                if (cause === 'Infrastructure') {
                    description = 'classrooms, libraries, and sanitation facilities';
                } else if (cause === 'Learning Materials') {
                    description = 'textbooks, stationery, computers, and other educational resources';
                } else if (cause === 'Sponsorships') {
                    description = 'education, feeding programs, and healthcare for children';
                }
                
                document.getElementById('causeDescription').textContent = description;
                supportModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close modals
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sponsorModal.style.display = 'none';
                supportModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === sponsorModal) {
                sponsorModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (e.target === supportModal) {
                supportModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Form submissions
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
        });
        
        document.getElementById('sponsorForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for choosing to sponsor a child! We will contact you with more details.');
            e.target.reset();
            sponsorModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        document.getElementById('supportForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your support! Your contribution will make a difference.');
            e.target.reset();
            supportModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') !== '#sponsor') {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active'); // toggle icon style
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active'); // reset icon
        });
    });

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    function adjustLogo() {
        const root = document.documentElement;
        root.style.setProperty('--logo-scale', window.innerWidth < 768 ? '0.7' : '1');
    }

    adjustLogo();
    window.addEventListener('resize', adjustLogo);
});
