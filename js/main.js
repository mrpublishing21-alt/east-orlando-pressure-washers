// Contact form — let Formspree handle submission natively (no AJAX)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteForm');
    if (!form) return;

    // Remove any inline onsubmit handler so the form posts directly to Formspree
    form.removeAttribute('onsubmit');
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
