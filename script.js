// Get the elements from the DOM
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize the counter variable
let counter = 0;

// Function to update the counter display
function updateDisplay() {
  counterDisplay.textContent = counter;
}

// Add event listeners for buttons
incrementBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  counter--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateDisplay();
});
 