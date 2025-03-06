// Selecciona el botón y el enlace
const button = document.getElementById('love-button');
const link = document.getElementById('love-link');

// Función para cambiar el color y tamaño del botón al pasar el cursor
button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#ff4d4d';
    button.style.transform = 'scale(1.1)';
});

// Función para restaurar el color y tamaño original cuando el cursor sale
button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'red';
    button.style.transform = 'scale(1)';
});
