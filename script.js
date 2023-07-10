let wins = 0, losses = 0, ties = 0;

function initGame() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}

function playGame(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    
    if(userChoice === computerChoice) {
        ties++;
        document.getElementById('ties').textContent = ties;
        document.getElementById('message').textContent = `It's a tie! You both chose ${userChoice}.`;
    } else if(
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        wins++;
        document.getElementById('wins').textContent = wins;
        document.getElementById('message').textContent = `You win! Your ${userChoice} beats the computer's ${computerChoice}.`;
    } else {
        losses++;
        document.getElementById('losses').textContent = losses;
        document.getElementById('message').textContent = `You lose! The computer's ${computerChoice} beats your ${userChoice}.`;
    }
}



