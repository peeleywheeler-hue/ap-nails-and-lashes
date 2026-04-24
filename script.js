// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate required fields
        if (!fullName || !email || !phone || !address) {
            showAlert('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Please enter a valid email address.', 'error');
            return;
        }
        
        // Validate phone format (basic validation)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone) || phone.length < 10) {
            showAlert('Please enter a valid phone number.', 'error');
            return;
        }
        
        // If validation passes
        showAlert('Thank you for your inquiry! I will contact you soon.', 'success');
        
        // Log form data (in production, this would be sent to a server)
        console.log('Form Data:', {
            fullName,
            email,
            phone,
            address,
            message,
            submittedAt: new Date()
        });
        
        // Reset form
        contactForm.reset();
    });
}

// Alert notification function
function showAlert(message, type) {
    // Create alert container if it doesn't exist
    let alertContainer = document.querySelector('.alert-container');
    if (!alertContainer) {
        alertContainer = document.createElement('div');
        alertContainer.classList.add('alert-container');
        document.body.appendChild(alertContainer);
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`);
    alert.textContent = message;
    
    alertContainer.appendChild(alert);
    
    // Show alert with animation
    setTimeout(() => {
        alert.classList.add('show');
    }, 100);
    
    // Remove alert after 5 seconds
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 5000);
}

// Add CSS for alerts dynamically
const style = document.createElement('style');
style.textContent = `
    .alert-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 2000;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .alert {
        padding: 15px 20px;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
        max-width: 300px;
    }
    
    .alert.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .alert-success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .alert-error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    @media (max-width: 480px) {
        .alert-container {
            top: 10px;
            right: 10px;
            left: 10px;
        }
        
        .alert {
            max-width: none;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation links (already handled by CSS scroll-behavior)
// This adds additional smooth scroll functionality for older browsers
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll animation for elements on page load
window.addEventListener('DOMContentLoaded', () => {
    // Add entrance animations to elements
    const elements = document.querySelectorAll('.highlight-item, .review-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Track form interactions
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});