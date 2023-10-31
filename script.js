const closeModalButton = document.getElementById("closePopUp");
const modal = document.getElementById("popup-game");
const runeMessage = document.getElementById("rune-message");
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-button");
const hintButton = document.getElementById("hint-button");
const responseMessage = document.getElementById("response-message");
const timerDisplay = document.getElementById("timer");
const codesLeftDisplay = document.getElementById("codes-left");

const messages = [
    { runes: "ᚺᛖᛚᛚᛟ", english: "hello", hint: "Common greeting."},
    { runes: "ᚠᚱᛁᛖᚾᛞ", english: "friend", hint: "Someone you have a close relationship with."},
    { runes: "ᚷᛟᛟᛞᛒᛁᛖ", english: "goodbye", hint: "Said when parting."},
    { runes: "ᛒᛟᚨᛏ", english: "boat", hint: "Water transportation mode."},
    { runes: "ᛊᛖ", english: "sea", hint: "Body of saltwater."},
    { runes: "ᚢᚨᛚᚺᚨᛚᛚᚨ", english: "Valhalla", hint: "Majestic hall in Norse mythology."},
    { runes: "ᚱᚢᚾᛖᛊ", english: "rune", hint: "Ancient symbol used in inscriptions."},
    { runes: "ᛗᛁᚦ", english: "myth", hint: "Traditional stories or legends."},
    { runes: "ᚲᚺᚨᛗᛒᛖᚱ", english: "chamber", hint: "A room or enclosed space."},
    { runes: "ᚾᛟᚱᛊᛖ", english: "norse", hint: "Related to Northern European culture."},
    { runes: "ᛗᚨᚷᛁᚲ", english: "magic", hint: "Sorcery, spells, and enchantments."},
    { runes: "ᚺᛁᛊᛏᛟᚱᛁ", english: "history", hint: "The saga of the past, where tales of heroes and legends are written."},
];

let currentMessageIndex = -1;
let codesLeft = 5;
let timer;
let secondsRemaining = 180; // 3 minutes

function updateTimerDisplay() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    timerDisplay.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    timer = setInterval(function () {
        secondsRemaining--;
        updateTimerDisplay();

        if (secondsRemaining <= 0) {
            clearInterval(timer);
            responseMessage.textContent = 'Time is up! Game over.';
            setTimeout(function () {
                modal.style.display = "none";
            }, 2000); // Close the popup after displaying the message for 2 seconds
        }
    }, 1000);
}

hintButton.addEventListener("click", () => {
    if (currentMessageIndex === -1 || codesLeft <= 0) {
        return;
    }

    const hint = messages[currentMessageIndex].hint;
    responseMessage.textContent = `Hint: ${hint}`;
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    clearInterval(timer); // Stop the timer when closing the popup
});

function generateRandomMessage() {
    currentMessageIndex = Math.floor(Math.random() * messages.length);
    const message = messages[currentMessageIndex].runes;
    runeMessage.textContent = message;
    userInput.value = '';
    responseMessage.textContent = ''; // Clear the response message when generating a new message
    hintButton.style.display = 'block'; // Show the hint button when generating a new message
}

checkButton.addEventListener("click", () => {
    if (currentMessageIndex === -1 || codesLeft <= 0) {
        return;
    }

    const userInputValue = userInput.value;
    const expectedEnglish = messages[currentMessageIndex].english;

    if (userInputValue === expectedEnglish) {
        responseMessage.textContent = 'Correct! Deciphered Message: ' + expectedEnglish;
        codesLeft--;

        if (codesLeft === 0) {
            clearInterval(timer);
            responseMessage.textContent = 'Congratulations! You deciphered all the codes in time.';
            setTimeout(function () {
                modal.style.display = "none";
            }, 2000); // Close the popup after displaying the message for 2 seconds
        } else {
            generateRandomMessage();
            codesLeftDisplay.textContent = `Codes left: ${codesLeft}`;
        }
    } else {
        responseMessage.textContent = 'Incorrect. Try again.';
        userInput.value = '';
    }
});

openPopUp.addEventListener("click", () => {
    modal.style.display = "flex";
    generateRandomMessage();
    userInput.style.display = "block";
    checkButton.style.display = "block";
    hintButton.style.display = "block";
    responseMessage.style.display = "block";
    codesLeftDisplay.textContent = `Codes left: ${codesLeft}`;
    updateTimerDisplay();
    startTimer();
});


// ------------------------ Sign Up page------------------------
const signupForm = document.getElementById('signupForm');

        openSignupLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from navigating

            if (signupForm.style.display === 'none' || signupForm.style.display === '') {
                signupForm.style.display = 'block';
            } else {
                signupForm.style.display = 'none';
            }
        });

        function goToHomePage() {
            window.location.href = "index.html"; // Change "homepage.html" to your actual homepage URL
        }