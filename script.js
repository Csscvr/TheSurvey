const room = document.getElementById('room');
let isMouseDown = false;
let startX;
let currentRotationY = 0;

document.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.clientX;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    const deltaX = e.clientX - startX;
    currentRotationY += deltaX * 0.5; // Adjust sensitivity
    room.style.transform = `rotateY(${currentRotationY}deg)`;
    startX = e.clientX; // Update startX for the next move
});
