document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const mensaje = document.getElementById('login-mensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!usuario) {
            mensaje.textContent = 'Por favor, ingresa tu nombre.';
            mensaje.style.color = 'red';
            return;
        }

        if (password === 'contraseña') {
            // Guardar el nombre del usuario para usarlo más adelante
            localStorage.setItem('nombreUsuario', usuario);
            mensaje.textContent = '¡Bienvenido, ' + usuario + '!';
            mensaje.style.color = 'lightgreen';

            setTimeout(() => {
                window.location.href = '../Index/index.html';
            }, 800);
        } else {
            mensaje.textContent = 'La contraseña es incorrecta.';
            mensaje.style.color = 'red';
        }
    });
});
