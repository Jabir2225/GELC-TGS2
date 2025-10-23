// ===================================
// GELC Website - Interactive JavaScript
// ===================================

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Gallery Filter Function (for archive.html)
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('[onclick^="filterGallery"]');
    
    // Update button styles
    buttons.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
    });
    
    event.target.classList.remove('btn-outline');
    event.target.classList.add('btn-primary');
    
    // Filter items
    galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            // Add fade-in animation
            item.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            item.style.display = 'none';
        }
    });
}

// Registration Section Switcher (for register.html)
function showSection(section) {
    const sections = document.querySelectorAll('.registration-section');
    const buttons = {
        event: document.getElementById('eventBtn'),
        ambassador: document.getElementById('ambassadorBtn'),
        query: document.getElementById('queryBtn')
    };
    
    // Hide all sections
    sections.forEach(sec => {
        sec.style.display = 'none';
    });
    
    // Reset all button styles
    Object.values(buttons).forEach(btn => {
        if (btn) {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline');
        }
    });
    
    // Show selected section and update button
    const targetSection = document.getElementById(section + 'Section');
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.style.animation = 'fadeIn 0.5s ease-in';
    }
    
    if (buttons[section]) {
        buttons[section].classList.remove('btn-outline');
        buttons[section].classList.add('btn-primary');
    }
}

// Form Submission Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Event Registration Form
    const eventForm = document.getElementById('eventRegistrationForm');
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate that at least one segment is selected
            const checkboxes = document.querySelectorAll('input[name="segments"]:checked');
            if (checkboxes.length === 0) {
                alert('Please select at least one segment to participate in.');
                return;
            }
            
            // Show success message
            showSuccessMessage('Registration submitted successfully! You will receive a confirmation email within 48 hours.');
            
            // Reset form
            eventForm.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Campus Ambassador Form
    const ambassadorForm = document.getElementById('ambassadorForm');
    if (ambassadorForm) {
        ambassadorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            showSuccessMessage('Ambassador application submitted successfully! We will review your application and contact you within 5-7 business days.');
            
            // Reset form
            ambassadorForm.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // General Query Form
    const queryForm = document.getElementById('queryForm');
    if (queryForm) {
        queryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            showSuccessMessage('Your query has been submitted successfully! We will get back to you soon.');
            
            // Reset form
            queryForm.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            showSuccessMessage('Thank you for contacting us! We will respond to your message within 48 hours.');
            
            // Reset form
            contactForm.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Success Message Display Function
function showSuccessMessage(message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #2A3B8F, #3DB5B9);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 500px;
        text-align: center;
        animation: slideDown 0.5s ease-out;
    `;
    
    successDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <i class="fas fa-check-circle" style="font-size: 2rem; color: #FFD369;"></i>
            <div style="text-align: left;">
                <strong style="display: block; margin-bottom: 0.25rem; font-size: 1.1rem;">Success!</strong>
                <span style="font-size: 0.95rem;">${message}</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Remove after 5 seconds
    setTimeout(function() {
        successDiv.style.animation = 'slideUp 0.5s ease-out';
        setTimeout(function() {
            document.body.removeChild(successDiv);
        }, 500);
    }, 5000);
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2A3B8F, #3DB5B9);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 9999;
        transition: all 0.3s ease;
    `;
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
            scrollBtn.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
});

// Add CSS Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -100%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -100%);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Form Input Validation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.style.borderColor = '#3DB5B9';
            this.style.transform = 'scale(1.01)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderColor = '#ddd';
            }
            this.style.transform = 'scale(1)';
        });
        
        // Real-time validation feedback
        if (input.hasAttribute('required')) {
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = '#3DB5B9';
                }
            });
        }
    });
});

// Loading Animation for Page Transitions
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===== FLOATING CARDS INTERACTIVITY =====
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.story-card, .mission-card, .vision-card, .excellence-card, .creativity-card, .community-card, .competition-card, .culture-card, .leadership-card, .value-excellence, .value-inclusivity, .value-innovation, .value-integrity, .partner-school, .partner-alumni, .partner-sponsors');
    
    // Add floating animation class to cards
    cards.forEach((card, index) => {
        card.classList.add('floating-card');
    });
    
    // Add interactive hover effects
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Remove floating animation temporarily
            this.classList.remove('floating-card');
            this.classList.add('card-hover-effect');
            
            // Add ripple effect
            createRippleEffect(this, event);
        });
        
        card.addEventListener('mouseleave', function() {
            // Restore floating animation
            this.classList.remove('card-hover-effect');
            this.classList.add('floating-card');
        });
        
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-20px) scale(1.1) rotate(3deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Create ripple effect on hover
    function createRippleEffect(element, event) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(37, 99, 235, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        ripple.style.pointerEvents = 'none';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Console welcome message
console.log('%c Welcome to GELC! ', 'background: linear-gradient(135deg, #2A3B8F, #3DB5B9); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Where Words Ignite, Minds Soar ', 'color: #FFD369; font-size: 14px; font-style: italic;');


