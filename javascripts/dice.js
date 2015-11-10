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

		for (var i =0; i < dice.length; i++){
			if (dice[i] >= success) {
				console.log("Success!");
			}
		}
	}

	$("#dice").click(function(){
		var yark = rollD6(5);
		console.log("yark", yark);
		checkSuccess(yark);
	});
	return {
		rollD6:rollD6,
		checkSuccess: checkSuccess
  };

}); //END DEFINE FUNCTION