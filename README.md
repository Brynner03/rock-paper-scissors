# Rock Paper Scissors Game

A simple Rock Paper Scissors game implemented in JavaScript. Play against the computer and keep track of your score across multiple rounds.

## Features

- Play against a computer opponent.
- Keeps score for the user and the computer.
- Allows the user to choose the number of rounds to play.
- Displays the results of each round.

## Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager), which comes with Node.js.

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.

   ```bash
   cd path/to/your/project
   ```

3. Install the required package using npm:

   ```bash
   npm install
   ```

## Usage

1. Run the game by executing the following command in your terminal:

   ```bash
   node main.js
   ```

2. Follow the prompts in the terminal to play the game:
   - Enter the number of rounds you want to play.
   - Enter your choice for each round (rock, paper, or scissors).

3. The game will display the results of each round and the final score.

## Example

```plaintext
How many rounds do you want to play? 3
Enter rock, paper, or scissors: rock
Round 1:
You chose: rock
Computer chose: scissors
You win this round!
Current score = You: 1, Computer: 0

Enter rock, paper, or scissors: paper
Round 2:
You chose: paper
Computer chose: rock
You win this round!
Current score = You: 2, Computer: 0

Enter rock, paper, or scissors: scissors
Round 3:
You chose: scissors
Computer chose: rock
Computer wins this round!
Current score = You: 2, Computer: 1

Game Over!
You won the game! Final Score - You: 2, Computer: 1
```
