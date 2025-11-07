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
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

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
