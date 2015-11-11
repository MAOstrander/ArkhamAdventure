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

	$("#dice").click(function(){
		var numDice = $("[name='diceNumber']").val();
		var state = $("[name='state']").val();
		var rolls = rollD6(numDice);
		console.log("Roll of the dice:", rolls);
		var rollResults = checkSuccess(rolls, state);
		console.log("Roll Results: ", rollResults);
	});
	return {
		rollD6:rollD6,
		checkSuccess: checkSuccess
  };

}); //END DEFINE FUNCTION