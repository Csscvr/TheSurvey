const room = document.getElementById('room');
let isMouseDown = false;
let startX, startY;
let currentRotationX = 0;
let currentRotationY = 0;

document.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.clientX; // Track the initial X position
    startY = e.clientY; // Track the initial Y position
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    const deltaX = e.clientX - startX; // Calculate the change in X position
    const deltaY = e.clientY - startY; // Calculate the change in Y position

    currentRotationY += deltaX * 0.5; // Adjust sensitivity for Y-axis rotation
    currentRotationX += deltaY * -0.5; // Adjust sensitivity for X-axis rotation

    room.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`; // Rotate around both axes

    startX = e.clientX; // Update startX for the next move
    startY = e.clientY; // Update startY for the next move
});
