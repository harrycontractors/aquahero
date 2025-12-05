/**
 * AquaHero Plumbing - Main JavaScript
 * All interactive features and functionality
 */

// ===========================
// Initialize on DOM Load
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    initializeAOS();
    initializeNavigation();
    initializeScrollEffects();
    initializeFAQ();
    initializeForms();
    initializeEmergencyBanner();
});

// ===========================
// AOS Animation Library
// ===========================
function initializeAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
}

// ===========================
// Navigation Functions
// ===========================
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            if (navToggle) {
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Sticky header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// Scroll Effects
// ===========================
function initializeScrollEffects() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top functionality
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===========================
// FAQ Accordion
// ===========================
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ===========================
// Form Handling
// ===========================
function initializeForms() {
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingFormSubmit);
    }
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    //if (!data.name || !data.phone || !data.message) {
     if (!data.name || !data.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Phone validation
    // if (!isValidPhone(data.phone)) {
    //     showNotification('Please enter a valid phone number', 'error');
    //     return;
    // }
    
    // In a real application, send data to backend
    // For now, show success message
    console.log('Contact Form Data:', data);


    
    showNotification('Thank you! Whatsapp me with your message now!.', 'success');
    e.target.reset();
    
    // Optional: Redirect to WhatsApp for immediate contact
    setTimeout(() => {
        const message = encodeURIComponent(`Hi AquaHero! I'm ${data.name}. ${data.message}`);
        window.open(`https://wa.me/6591273131?text=${message}`, '_blank');
    }, 2000);
}

function handleBookingFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validation
    //if (!data.name || !data.phone || !data.address || !data.service || !data.message) {
    if (!data.name || !data.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // if (!isValidPhone(data.phone)) {
    //     showNotification('Please enter a valid phone number', 'error');
    //     return;
    // }
    
    // In a real application, send to backend
    console.log('Booking Form Data:', data);
    
    // showNotification('Booking request submitted successfully!', 'success');
    showNotification('Thank you! Whatsapp me with your message now!', 'success');
    e.target.reset();
    closeBookingModal();
    
    // Optional: Send via WhatsApp
    setTimeout(() => {
        const message = encodeURIComponent(
            `Booking Request:\nName: ${data.name}\nPhone: ${data.phone}\nAddress: ${data.address}\nService: ${data.service}\nDate: ${data.date || 'ASAP'}\nDetails: ${data.message}`
        );
        window.open(`https://wa.me/6591273131?text=${message}`, '_blank');
    }, 2000);
}

// ===========================
// Modal Functions
// ===========================
function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('booking-modal');
    if (e.target === modal) {
        closeBookingModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBookingModal();
    }
});

// ===========================
// Emergency Banner
// ===========================
function initializeEmergencyBanner() {
    const banner = document.getElementById('emergency-banner');
    const closeBtn = document.getElementById('close-banner');
    
    // Check if banner was previously closed
    const bannerClosed = sessionStorage.getItem('emergencyBannerClosed');
    
    if (bannerClosed) {
        banner.style.display = 'none';
        document.getElementById('header').style.top = '0';
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.style.display = 'none';
            document.getElementById('header').style.top = '0';
            sessionStorage.setItem('emergencyBannerClosed', 'true');
        });
    }
}

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// ===========================
// Validation Helpers
// ===========================
function isValidPhone(phone) {
    // Singapore phone number validation (8 digits starting with 6, 8, or 9)
    const phoneRegex = /^[689]\d{7}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===========================
// Utility Functions
// ===========================

// Format phone number for display
function formatPhone(phone) {
    return phone.replace(/(\d{4})(\d{4})/, '$1 $2');
}

// Get current date for booking form
function setMinDate() {
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

// Call this on page load
setMinDate();

// ===========================
// Performance Optimization
// ===========================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Analytics & Tracking
// ===========================

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone call initiated:', link.href);
        // Add Google Analytics or other tracking here
    });
});

// Track WhatsApp clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp chat initiated');
        // Add tracking here
    });
});

// Track form submissions
function trackFormSubmission(formName) {
    console.log(`Form submitted: ${formName}`);
    // Add tracking here
}



// ===========================
// Console Welcome Message
// ===========================
console.log('%c🦸 AquaHero Plumbing', 'font-size: 24px; font-weight: bold; color: #1E40AF;');
console.log('%cYour 24/7 Water Emergency Heroes', 'font-size: 14px; color: #F59E0B;');
console.log('%cNeed help? Call: 9127 3131', 'font-size: 12px; color: #6B7280;');
