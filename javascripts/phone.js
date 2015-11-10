define(["jquery", "randomizer"], function($, randomizer) {
	var allCharacters = ["Amanda Sharpe","test2","test3","test4","test5","test6","test7","test8","test9","test10","test11","test12"];
	var allAncient = ["Azathoth","Test2","Test3","Test4","Test5","Test6","Test7","Test8","Test9","Test10","Test11","Test12"];
	var allHerald = ["Father Dagon","Mother Hydra","Bast"];

	$("#quickPick1").click(function(){
		var quickChoice = allCharacters.slice(0);
		var thing = randomizer.chooseMe(quickChoice, 1);
		console.log("Character: ", thing);
	});

	$("#quickPickAll").click(function(){
		var quickChoice = allCharacters.slice(0);
		var thing = randomizer.chooseMe(quickChoice, 8);
		console.log("Characters: ", thing);
	});

	$("#quickAO").click(function(){
		var quickChoice = allAncient.slice(0);
		var thing = randomizer.chooseMe(quickChoice, 1);
		console.log("Ancient One: ", thing);
	});

	$("#quickStart").click(function(){
		var quickChoice = allCharacters.slice(0);
		var thing = randomizer.chooseMe(quickChoice, 8);
		console.log("8 Heroes: ", thing);

		quickChoice = allAncient.slice(0);
		thing = randomizer.chooseMe(quickChoice, 1);
		console.log("Foe: ", thing);

		quickChoice = allHerald.slice(0);
		thing = randomizer.chooseMe(quickChoice, 1);
		console.log("Herald or Guardian: ", thing);
	});

}); //END DEFINE FUNCTION