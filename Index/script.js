document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // Barra de navegación con puntos
    // ===============================
    const container = document.querySelector('.snap-container');
    const sectionsEls = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.nav-dots span');

    const setActiveDot = (index) => {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    };

    if (container) {
        const updateActiveDot = () => {
            const sectionHeight = container.clientHeight;
            const currentSection = Math.round(container.scrollTop / sectionHeight);
            setActiveDot(currentSection);
        };
        container.addEventListener('scroll', updateActiveDot);
        updateActiveDot();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (!container) return;
            container.scrollTo({ top: index * container.clientHeight, behavior: 'smooth' });
        });
    });

    // ===============================
    // Animaciones al entrar en pantalla
    // ===============================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.3, root: container || null });

    sectionsEls.forEach(section => observer.observe(section));
});

// ===============================
// Botones "Volver al inicio"
// ===============================
const backButtons = document.querySelectorAll('.back-to-top');
const snapContainer = document.querySelector('.snap-container');

backButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (snapContainer) {
            snapContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
