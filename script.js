const rectangles = document.querySelectorAll('.rectangle');
const field = document.getElementById('field');

rectangles.forEach(rectangle => {
    rectangle.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.textContent);
    });
});

field.addEventListener('dragover', (event) => {
    event.preventDefault();
});

field.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const rectangle = document.createElement('div');
    rectangle.className = 'rectangle';
    rectangle.textContent = data;
    field.appendChild(rectangle);
});