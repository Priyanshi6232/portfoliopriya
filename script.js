// Add smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
});
