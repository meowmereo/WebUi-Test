document.addEventListener('DOMContentLoaded', function() {
    const toggleIcon = document.getElementById('sidebar-toggle-icon');
    const socialIcons = document.getElementById('social-icons-container');

    if (toggleIcon && socialIcons) {
        toggleIcon.addEventListener('click', () => {
            socialIcons.classList.toggle('visible');
            toggleIcon.classList.toggle('active');
        });
    }

    // Add animation class to social icons
    const iconWrappers = document.querySelectorAll('.icon-wrapper');
    iconWrappers.forEach((wrapper, index) => {
        wrapper.style.animationDelay = `${index * 0.1}s`;
        wrapper.classList.add('animate-icon');
    });
});