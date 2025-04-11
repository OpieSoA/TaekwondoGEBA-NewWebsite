// Script para manejar el menú hamburguesa en dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Manejar dropdowns en móvil
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (e.target.tagName === 'A' && e.target.nextElementSibling) {
                    e.preventDefault();
                    this.classList.toggle('active');
                }
            }
        });
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (!this.nextElementSibling) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});