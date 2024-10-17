const playButton = document.getElementById('play');
const clickToWinButton = document.getElementById('click-to-win');
const scoreDisplay = document.getElementById('score');

// Initialize the score
let score = 0;

// Play button functionality
playButton.addEventListener('click', function() {
    // Hide the play button
    playButton.style.display = 'none';

    // Show the click to win button
    clickToWinButton.style.display = 'block';
});

// Click to win button functionality
clickToWinButton.addEventListener('click', function() {
    // Set the score to infinity
    score = Infinity;

    // Update the score display
    scoreDisplay.textContent = `Score: ${score}`;
});