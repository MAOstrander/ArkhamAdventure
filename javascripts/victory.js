define(["jquery"], function($) {
	var Victory = {
	ancientOne: "",
	players: {
		name: "",
		investigators: ""
		},
	datePlayed: "",
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

	function addPlayer(displayPlayer) {
		console.log("current number of players:", displayPlayer);
		var playerDom;
		// var playerDom = "<div id='player" + displayPlayer +"'><label>Player "+ displayPlayer +" Name:
		// 	<input type='text' name='player"+ displayPlayer +"'></label><label>Played as:<select name=
		// 	'investigator"+ displayPlayer +"' class='selectpicker'>
  //       <option>Amanda Sharpe</option>
  //       <option>Bob Jenkins</option>
  //       <option>Mandy Thompson</option> 
  //       <option>Ashcan Pete</option>
  //      </select></label><label><input type='radio' name='loan"+ displayPlayer +"' value='1'>
  //      Bank Loan/Bankrupt</label><label><input type='radio' name='loan"+ displayPlayer +"' 
  //      value='0' checked>No Loan</label><label>Number of Eldersigns Used:<input type='number' 
  //      name='elder"+ displayPlayer +"' value='0' min='0'></label><label>Number of Gate Trophies:
  //      <input type='number' name='gate"+ displayPlayer +"' value='0' min='0'></label><label>Number 
  //      of Monster Trophies:<input type='number' name='monster"+ displayPlayer +"' value='0' min='0'>
  //      </label><label><input type='radio' name='survive"+ displayPlayer +"' value='1' checked>I 
  //      survived!</label><label><input type='radio' name='survive"+ displayPlayer +"' value='0'>I 
  //      was Devoured</label></div>";

    $("#scoreForm").append(playerDom);

	}

	return {
		calculateScore: calculateScore,
		getGameValues: getGameValues,
		addPlayer: addPlayer
	}

}); //END DEFINE FUNCTION