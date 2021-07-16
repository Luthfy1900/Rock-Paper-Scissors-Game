//Both User and Computer scores have to start at zero as default. These will be changed as we play.
let userScore = 0;
let computerScore = 0;
//---------------------------------------end part----------------------------------//




//Cached the DOM to retrieve all the components we will need to add functionality to them.
const compScore = document.getElementById("the_computer_score");
const useScore = document.getElementById("the_user_score");
const resultingMessage = document.querySelector(".result_message > p");
const myRock = document.getElementById("the_rock");
const myScissors = document.getElementById("the_scissors");
const myPaper = document.getElementById("the_paper");
//------------------------------------------------end part------------------------------------//




//I created a function for the computer to generate a random selection using the math.floor and math.random methods.
function getComputerSelection() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
//---------------------------------------end part--------------------------------------//




/*This is function that has code to manipulate data of the score and to display it on our game.
It has two parameters to define the user and the computer. In this case is for when the user wins.*/
function win(playerChoice, compChoice) {
    userScore++;    //add 1
    useScore.innerHTML = userScore; // change score on website from 0 to 1 and so on
    compScore.innerHTML = computerScore;
    resultingMessage.innerHTML = playerChoice + " beats " + compChoice + ". You win!"; //a message to display if win
}
//--------------------------------------end part--------------------------------------//




/*This is function that has code to manipulate data of the score and to display it on our game.
It has two parameters to define the user and the computer. In this case is for when the computer wins(we lose).*/
function lose(playerChoice, compChoice) {
    computerScore++;    //add 1
    compScore.innerHTML = computerScore;   // change score on website from 0 to 1 and so on
    useScore.innerHTML = userScore;
    resultingMessage.innerHTML = compChoice + " beats " + playerChoice + ". Computer wins!"; //a message to display if lose
}
//--------------------------------------end part--------------------------------------//



/*This is function that has code to manipulate data of the score and to display it on our game.
It has two parameters to define the user and the computer.*/
function draw(playerChoice, compChoice) {
    resultingMessage.innerHTML = playerChoice + " and " + compChoice + " are equal. It's a draw!";
}
//--------------------------------------end part--------------------------------------//




/*This function is the actual game. It has the 'playerChoice' parameter which is us and variable that defines
the above function for the computer random generator. These two things will be used to compare outcomes and
decide who won, lost or if it's a draw. The results will be returned to the win, lose and draw functions above.*/
function letsPlay(playerChoice) {
    compChoice = getComputerSelection();
    if (playerChoice === "Rock" && compChoice === "Scissors") { win(playerChoice, compChoice); }
    else if (playerChoice === "Rock" && compChoice === "Paper") { lose(playerChoice, compChoice); }
    else if (playerChoice === "Paper" && compChoice === "Rock") { win(playerChoice, compChoice); }
    else if (playerChoice === "Scissors" && compChoice === "Rock") { lose(playerChoice, compChoice); }
    else if (playerChoice === "Scissors" && compChoice === "Paper") { win(playerChoice, compChoice); }
    else if (playerChoice === "Paper" && compChoice === "Scissors") { lose(playerChoice, compChoice); }
    else { draw(playerChoice, compChoice); }
}
//--------------------------------------end part--------------------------------------//




/*This function is created to basically create an input for the user hence we can see 'letsPlay("Rock")'
which tells the program to assign a "Rock" selection to the 'playerChoice' parameter in the above function, to the element
that has the id of "R" assigned to it. myRock is the variable name we gave that element to catch it.*/
function theEvents() {
    myRock.addEventListener('click', () => letsPlay("Rock"));
    myScissors.addEventListener('click', () => letsPlay("Scissors"));
    myPaper.addEventListener('click', () => letsPlay("Paper"))
}
theEvents();
//--------------------------------------end part--------------------------------------//