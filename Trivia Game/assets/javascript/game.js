//Window opens and timer starts

//On click, checks if user is right or wrong
	//if right, then Correct screen pops up and correct counter++
	//if wrong, show Incorrect screen with correct answer and incorrect counter++
	//wait a few seconds
//New question and answer set shows up
//Once all questions are answered or timer ends, 
	//show Final screen with all correct, incorrect and Play Again button

// VARIABLES
// ==========================================================================
$(document).ready(function(){

	var winCounter = 0;
	var lossCounter = 0;

	var timer = 30;

	var answers = ["Rome", "Vatican City", "Tuscany", "Genova"];

	$("#start").on("click", function() {
		setInterval(function() {
			timer--;
			$("#timer").text(timer);

		}, 1000);
	});


});