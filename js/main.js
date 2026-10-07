// Contact form AJAX submission to send-quote.php
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteForm');
    if (!form) return;
    
    const submitBtn = document.getElementById('submitBtn');
    const messageDiv = document.getElementById('formMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        messageDiv.style.display = 'none';
        
        // Collect form data
        const formData = new FormData(form);
        
        // Send via fetch to send-quote.php
        fetch('send-quote.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageDiv.style.display = 'block';
                messageDiv.className = 'form-success';
                messageDiv.innerHTML = '<strong>Thank you!</strong> Your quote request has been sent. We\'ll contact you within 24 hours.';
                form.reset();
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        })
        .catch(error => {
            messageDiv.style.display = 'block';
            messageDiv.className = 'form-error';
            messageDiv.innerHTML = '<strong>Error:</strong> ' + error.message;
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Request';
        });
    });
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
