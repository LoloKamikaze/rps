/*Pseudocode
Initialize Scores

Set humanScore to 0
Set computerScore to 0
Define Function: getHumanChoice

Prompt the user to enter "Rock", "Paper", or "Scissors" (convert to lowercase)
Check if the input is valid:
If the input is "rock", "paper", or "scissors", return the input
If the input is invalid, show an error message and call getHumanChoice again to prompt the user again
Define Function: getComputerChoice

Create a list of choices: ["rock", "paper", "scissors"]
Generate a random number and use it to select and return a random item from the list
Define Function: playRound

Input: humanChoice and computerChoice
Logic:
If humanChoice equals computerChoice, return "It's a tie!"
If humanChoice is "rock" and computerChoice is "scissors", increment humanScore by 1 and return "You won this round!"
If humanChoice is "paper" and computerChoice is "rock", increment humanScore by 1 and return "You won this round!"
If humanChoice is "scissors" and computerChoice is "paper", increment humanScore by 1 and return "You won this round!"
If none of these conditions match, increment computerScore by 1 and return "You lost this round!"
Define Function: game

Run a loop for 5 rounds:
Call getHumanChoice and store the result in humanChoice
Call getComputerChoice and store the result in computerChoice
Print the human and computer choices
Call playRound with humanChoice and computerChoice
Print the result of the round and the current scores
After 5 rounds, check the scores:
If humanScore is greater than computerScore, print "You won the game!"
If humanScore is less than computerScore, print "You lost the game!"
If humanScore equals computerScore, print "It's a tie game!"
Start the Game

Call the game function to start the process

*/
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const userInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") return userInput;
    alert("Invalid choice, please choose Rock, Paper, or Scissors.");
    return getHumanChoice();
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "It's a tie!";
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You won this round!";
    }
    computerScore++;
    return "You lost this round!";
}

function game() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) console.log("You won the game! 🎉");
    if (humanScore < computerScore) console.log("You lost the game. Better luck next time!");
    if (humanScore === computerScore) console.log("It's a tie game!");
}

game();