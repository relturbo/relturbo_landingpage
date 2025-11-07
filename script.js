document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    } else {
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });

    // Main Slideshow
    let slideIndex = 0;
    let slideInterval;
    
    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }
        
        // Hide all slides with fade-out animation
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].style.display = "none";
        }
        
        // Show current slide with fade-in animation
        slides[slideIndex].style.display = "block";
        slides[slideIndex].classList.add("active");
    }
    
    function nextSlide() {
        slideIndex++;
        showSlides(slideIndex);
    }
    
    function autoSlideshow() {
        nextSlide();
        slideInterval = setTimeout(autoSlideshow, 4000); // Change image every 4 seconds
    }
    
    // Start automatic slideshow
    showSlides(slideIndex);
    slideInterval = setTimeout(autoSlideshow, 4000);
    
    // Manual navigation functions (called by HTML buttons)
    window.changeSlide = function(n) {
        clearTimeout(slideInterval); // Stop auto slideshow temporarily
        slideIndex += n;
        showSlides(slideIndex);
        slideInterval = setTimeout(autoSlideshow, 4000); // Restart auto slideshow
    };

    // Testimonial Slideshow
    let testimonialIndex = 0;
    showTestimonials();

    function showTestimonials() {
        let i;
        let testimonials = document.getElementsByClassName("testimonial");
        for (i = 0; i < testimonials.length; i++) {
            testimonials[i].style.display = "none";
        }
        testimonialIndex++;
        if (testimonialIndex > testimonials.length) {testimonialIndex = 1}
        testimonials[testimonialIndex-1].style.display = "block";
        setTimeout(showTestimonials, 5000); // Change testimonial every 5 seconds
    }
});
