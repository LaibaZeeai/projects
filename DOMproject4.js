let randomnumber=Math.floor(Math.random()* 100) +1;
const submit = document.querySelector('#submit');
const userinput = document.querySelector('#guessfield');
const messageDisplay = document.querySelector('#message');
const Previous = document.querySelector('#Previous');
const Remaining = document.querySelector('#Remaining');
const reset = document.querySelector('#Reset');
const End = document.querySelector('#End');

let prevGuess = [];
let numGuess = 0; // Count the number of guesses
let maxGuesses = 10; // Maximum attempts allowed

submit.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default form submission
    const guessvalue = parseInt(userinput.value); // Get the user input
    validateGuess(guessvalue); // Validate the guess
});

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        displayMessage('Please enter a valid number between 1 and 100');
    } else if (prevGuess.includes(guess)) {
        displayMessage('You already guessed that number!'); // Duplicate guess
    } else {
        prevGuess.push(guess); // Store valid guess
        numGuess++; // Increment guess count
        displayGuess(guess); // Display the guess
        if (guess === randomnumber) {
            displayMessage("You won, you guessed it right!!");
            endGame(); // End game if guessed correctly
        } else if (numGuess === maxGuesses) {
            displayMessage(`You lost. The number was ${randomnumber}`);
            endGame(); // End game if max guesses reached
        } else {
            checkGuess(guess); // Provide hint if the guess is wrong
        }
    }
}

// Provide hint if guess is too high or too low
function checkGuess(guess) {
    if (guess < randomnumber) {
        displayMessage('Too low');
    } else {
        displayMessage('Too high');
    }
}

// Display the guess and update the UI
function displayGuess(guess) {
    userinput.value = ""; // Clear input field
    Previous.innerHTML += `${guess} `; // Update previous guesses
    Remaining.innerHTML = `Remaining Guesses: ${maxGuesses - numGuess}`; // Update remaining guesses
}

// Display messages to the user
function displayMessage(message) {
    messageDisplay.innerHTML = message; // Update message display
}

// Reset button functionality
reset.addEventListener('click', function() {
    numGuess = 0; // Reset guess count
    prevGuess = []; // Clear previous guesses
    randomnumber = Math.floor(Math.random() * 100) + 1; // Generate new random number
    userinput.disabled = false; // Enable input field
    submit.disabled = false; // Enable submit button
    userinput.value = ''; // Clear input field
    Previous.innerHTML = 'Previous Guesses: '; // Reset previous guesses display
    Remaining.innerHTML = `Remaining Guesses: ${maxGuesses}`; // Reset remaining guesses display
    messageDisplay.innerHTML = ''; // Clear messages
});

// End game button functionality
End.addEventListener('click', function() {
    endGame(); // End the game
    displayMessage(`Game Over! The number was ${randomnumber}.`); // Show final message
});

// End the game by disabling input
function endGame() {
    userinput.disabled = true; // Disable input field
    submit.disabled = true; // Disable submit button
}
