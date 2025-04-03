const room = document.getElementById('room');
let isMouseDown = false;
let startX, startY;
let currentRotationX = 0;
let currentRotationY = 0;
let currentScale = 1; // Initialize scale

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

    room.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${currentScale})`; // Rotate and scale

    startX = e.clientX; // Update startX for the next move
    startY = e.clientY; // Update startY for the next move
});

// Zoom functionality using mouse wheel
document.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent the default scroll behavior

    const zoomAmount = 0.1; // Amount to zoom in/out
    if (e.deltaY < 0) {
        // Zoom in
        currentScale += zoomAmount;
    } else {
        // Zoom out
        currentScale = Math.max(0.1, currentScale - zoomAmount); // Prevent scaling below 0.1
    }

    room.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${currentScale})`; // Update scale
});
