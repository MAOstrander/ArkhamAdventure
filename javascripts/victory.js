define(["jquery"], function($) {
	var Victory = {
	ancientOne: "",
	players: {
		name: "",
		investigators: ""
		},
	doomTrack: 0,
	terrorLevel: 0,
	bankLoan: 0,
	elderSigns: 0,
	gateTrophies: 0,
	monsterTrophies: 0,
	survivors: 0,
	score: 0
	};
	// Start with the highest printed number on the doom track of the Ancient One.
	// Subtract the terror level at the end of the game.
	// Apply the following modifiers:
	// -1 per unpaid/defaulted Bank Loan
	// -1 per elder sign played during the game
	// +1 per unspent gate trophy at the end of the game
	// +1 for every three unspent monster trophies held at the end of the game
	// +1 per sane, surviving investigator at the end of the game.
	function calculateScore(game) {
		var gameScore = 0;
		gameScore += game.doomTrack;
		gameScore -= game.terror;
		gameScore -= game.bankLoan;
		gameScore -= game.elderSigns;
		gameScore += game.gateTrophies;
		gameScore += Math.floor((game.monsterTrophies)/3);
		gameScore += game.survivors;

		game.score = gameScore;
		return game;
	}

	function getGameValues() {
		//build a form to collect data
		
	}


}); //END DEFINE FUNCTION