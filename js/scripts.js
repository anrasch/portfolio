// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.content section').forEach(section => section.classList.remove('active'));
        document.querySelector(this.getAttribute('href')).classList.add('active');

        // Close the menu on link click (for mobile view)
        document.querySelector('nav').classList.remove('show');
    });
});

// Set initial active section
document.querySelector('nav ul li a').classList.add('active');
document.querySelector('.content section').classList.add('active');

// Toggle menu visibility on mobile
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show');
});
