const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
let counter = 0;

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
    
    // Change the color of the counter based on the value
    if (counter > 0) {
        counterDisplay.style.color = 'lightGreen';
    } else if (counter < 0) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = 'black';
    }
}

increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounterDisplay();
});
