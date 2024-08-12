// script.js

let clickCount = 0;
let scrollCount = 0;

// Function to update the display of counts
function updateDisplay() {
    document.getElementById('click-count').innerText = clickCount;
    document.getElementById('scroll-count').innerText = scrollCount;
}

// Event listener for counting clicks
document.addEventListener('click', function() {
    clickCount++;
    updateDisplay();
});

// Event listener for counting scrolls
document.addEventListener('scroll', function() {
    scrollCount++;
    updateDisplay();
});
