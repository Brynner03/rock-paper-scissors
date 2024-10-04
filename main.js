const prompt = require('prompt-sync')(); // Import prompt-sync

// Function to get the computer's random choice
function randomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx];
}

// Object to define the winning relationships
const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

// Function to determine the winner
function winner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (winConditions[userChoice] === computerChoice) {
        return 'user';  // User wins
    } else {
        return 'computer';  // Computer wins
    }
}

function play() {
    let userScore = 0;
    let computerScore = 0;
    let rounds = Number(prompt("How many rounds do you want to play? "));

    for (let i = 0; i < rounds; i++) {
        const userChoice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
        const computerChoice = randomChoice();

        console.log(`\nRound ${i + 1}:`);
        console.log("\nYou chose: ", userChoice);
        console.log("Computer chose: ", computerChoice);

        const result = winner(userChoice, computerChoice);

        if (result === "user") {
            console.log("You win this round!\n");
            userScore++;
        } else if (result === "computer") {
            console.log("Computer wins this round!\n");
            computerScore++;
        } else {
            // It's a tie
            console.log(result);
        }

        console.log(`Current score = You: ${userScore}, Computer: ${computerScore}\n`);
    }

    // Final Scoreboard
    console.log("\nGame Over!");
    if (userScore > computerScore) {
        console.log(`You won the game! Final Score - You: ${userScore}, Computer: ${computerScore}`);
    } else if (computerScore > userScore) {
        console.log(`Computer won the game! Final Score - You: ${userScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score - You: ${userScore}, Computer: ${computerScore}`);
    }
}

play();
