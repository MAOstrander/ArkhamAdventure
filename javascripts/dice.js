define(["jquery"], function($) {
	function rollD6(numDice) {
		if (numDice === undefined) {
			numDice = 1;
		}
		var random = [];
		for (var i =0; i < numDice; i++){
			random[i] = Math.ceil(Math.random()*6);
			console.log("Random", random);
		}
		return random;
	}

	function checkSuccess(dice, state) {
		if (state === "blessed") {
			success = 4;
		} else if (state === "cursed") {
			success = 6;
		} else {
			success = 5;
		}

		var successCount = 0;

		for (var i =0; i < dice.length; i++){
			if (dice[i] >= success) {
				console.log("Success!");
				successCount++;
			}
		}
		return successCount;
	}

	function printOutput(rolls, rollResults, state) {
		var output = "<div>You rolled " + rolls.length + " dice.</div>";
		output += "<div>You got: " + rolls + "</div>";
		output += "<div>Since you were " + state + " that resulted in " + rollResults +" successes</div>";

		$("#results").html(output);
	}

	$("#dice").click(function(){
		var numDice = $("[name='diceNumber']").val();
		var state = $("[name='state']").val();
		var rolls = rollD6(numDice);
		console.log("Roll of the dice:", rolls);
		var rollResults = checkSuccess(rolls, state);
		console.log("Roll Results: ", rollResults);
		printOutput(rolls, rollResults, state);
	});

	$("button[type='button']").click(function(event){
		var players = $(this).val();
		players = parseInt(players);
		var gates = 5;
		switch(players) {
    		case 1:
    		case 2:
        		gates = 8;
        	break;
    		case 3:
    		case 4:
        		gates = 7;
        	break;
    		case 5:
    		case 6:
        		gates = 6;
        	break;
    		case 7:
    		case 8:
        		gates = 5;
        	break;
		}
	
		$("#monster-limit").html(players + " Player Monster Limit: " + (3+players));
		$("#outskirt-limit").html(players + " Player Outskirt Limit: " + (8-players));
		$("#gate-limit").html(players + " Player Open Gate Limit: " + gates);
	});

	return {
		rollD6:rollD6,
		checkSuccess: checkSuccess,
		printOutput: printOutput
  };

}); //END DEFINE FUNCTION