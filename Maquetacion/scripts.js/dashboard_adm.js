document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const salirBtn = document.getElementById('salir');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Has seleccionado ${item.querySelector('span').textContent}`);
        });
    });

    salirBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres salir?')) {
            alert('Cerrando sesión...');
        }
    });
});