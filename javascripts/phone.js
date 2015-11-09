define(["jquery", "randomizer"], function($, randomizer) {
	console.log("ran", randomizer);

	var allCharacters = ["test","test2","test3","test4","test5","test6","test7","test8","test9","test10","test11","test12"];
	var allAncient = ["Test","Test2","Test3","Test4","Test5","Test6","Test7","Test8","Test9","Test10","Test11","Test12"];

	$("#quickPick1").click(function(){
		var quickChoice = allCharacters.slice(0);
		var thing = randomizer.chooseMe(quickChoice, 1);
		console.log("thing", thing);
	});

	$("#quickPickAll").click(function(){
		var quickChoice = allCharacters.slice(0);
		var thing = randomizer.chooseMe(quickChoice, 8);
		console.log("thing", thing);
	});

	$("#quickAO").click(function(){
		var quickChoice = allAncient.slice(0);
		var thing = randomizer.chooseMe(quickChoice, 1);
		console.log("thing", thing);
	});

}); //END DEFINE FUNCTION