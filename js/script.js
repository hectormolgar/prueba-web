// Script para interactividad en la página

document.addEventListener('DOMContentLoaded', function() {
    console.log('VetCare Madrid - Página cargada');
    
    // Smooth scroll para enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Animación de entrada para tarjetas de servicios
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Función para validar formularios
function validarFormulario(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valido = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff6b35';
            valido = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (valido) {
        alert('¡Formulario enviado correctamente! Pronto nos pondremos en contacto contigo.');
        form.reset();
    }

    return valido;
}

// Función para marcar elemento activo en navegación
function marcarNavActiva() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const urlActual = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === urlActual || 
            (urlActual === '/' && link.getAttribute('href') === 'index.html')) {
            link.style.borderBottom = '2px solid #ff6b35';
        }
    });
}

marcarNavActiva();
