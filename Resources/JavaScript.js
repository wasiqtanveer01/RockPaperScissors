var UserScore = 0;
var ComputerScore = 0;
const UserScore_Span = document.getElementById("UserScore");
const ComputerScore_Span = document.getElementById("ComputerScore");
const result_p = document.querySelector(".result > p");
const ScoreBoard_div = document.querySelector("ScoreBoard");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function GetComputerChoice() {
	const choices = [ 'r' , 'p' , 's' ];
	const RandomNumber = Math.floor(Math.random()*3);
	return choices[RandomNumber];
}


function Converter(letter) {
	if (letter==="r") {return"Rock"};
	if (letter==="p") {return"Paper"}
		else {return"Scissors"};
}


function win(UserChoice, ComputerChoice) {
	UserScore++;
	UserScore_Span.innerHTML = UserScore;
	const SmallUserWord = "(USER)" .fontsize(1).sub();
	const SmallCompWord = "(COMP)" .fontsize(1).sub();
	result_p.innerHTML = Converter(UserChoice) + SmallUserWord + " beats " + Converter(ComputerChoice) + SmallCompWord + ".  You WIN!";
	const StatusColorWin = document.getElementById(UserChoice);
	StatusColorWin.classList.add("GreenGlow");
	setTimeout( function() {StatusColorWin.classList.remove("GreenGlow")} ,300)

}

function lose(UserChoice, ComputerChoice) {
	ComputerScore++;
	ComputerScore_Span.innerHTML = ComputerScore;
	const SmallUserWord = "(USER)" .fontsize(1).sub();
	const SmallCompWord = "(COMP)" .fontsize(1).sub();
	result_p.innerHTML = Converter(UserChoice) + SmallUserWord + " loses to " + Converter(ComputerChoice) + SmallCompWord + ".  You LOSE!";
	const StatusColorLose = document.getElementById(UserChoice);
	StatusColorLose.classList.add("RedGlow");
	setTimeout( function() {StatusColorLose.classList.remove("RedGlow")} ,300)
}

function draw(UserChoice, ComputerChoice) {
	result_p.innerHTML = "You both choose " + Converter(UserChoice) + ". It's a DRAW!";
	const StatusColorDraw = document.getElementById(UserChoice);
	StatusColorDraw.classList.add("GrayGlow");
	setTimeout( function() {StatusColorDraw.classList.remove("GrayGlow")} ,300)
}

function game(UserChoice) {
	const ComputerChoice = GetComputerChoice();
	switch (UserChoice + ComputerChoice) {
		case"rs":
		case"pr":
		case"sp":
			win(UserChoice, ComputerChoice);
			break;
		case"sr":
		case"rp":
		case"ps":
			lose(UserChoice, ComputerChoice);
			break;
		case"rr":
		case"ss":
		case"pp":
			draw(UserChoice, ComputerChoice);
			break;
	}
}

function main() {


	rock_div.addEventListener("click", function () {
		game('r');
	})

	paper_div.addEventListener("click", function () {
		game("p");
	})

	scissors_div.addEventListener("click", function () {
		game("s");
	})

}
main();