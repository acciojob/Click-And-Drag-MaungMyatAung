// Your code here.
const itemsContainer = document.querySelector('.items');
const items = document.querySelectorAll('.item');
let selectedItem = null;
let offsetX, offsetY;

// Function to handle mouse down event
function onMouseDown(event) {
    selectedItem = event.target; // Select the item being dragged
    offsetX = event.clientX - selectedItem.getBoundingClientRect().left; // Calculate offset
    offsetY = event.clientY - selectedItem.getBoundingClientRect().top; // Calculate offset

    // Add event listeners for mouse move and mouse up
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    itemsContainer.classList.add('active'); // Add active class to the container
}

// Function to handle mouse move event
function onMouseMove(event) {
    if (selectedItem) {
        // Calculate new position
        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;

        // Update the position of the selected item
        selectedItem.style.position = 'absolute'; // Set position to absolute
        selectedItem.style.left = `${newX}px`;
        selectedItem.style.top = `${newY}px`;
    }
}

// Function to handle mouse up event
function onMouseUp() {
    selectedItem = null; // Deselect the item
    document.removeEventListener('mousemove', onMouseMove); // Remove event listeners
    document.removeEventListener('mouseup', onMouseUp);
    itemsContainer.classList.remove('active'); // Remove active class from the container
}

// Attach mousedown event listener to each item
items.forEach(item => {
    item.addEventListener('mousedown', onMouseDown);
});