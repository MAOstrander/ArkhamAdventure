function chooseMe(checkedArray, numChoices) {
  var chosenPlayers = [];
  var random;

  for (var i = 0; i < numChoices; i++){
  // Get a random index from the array of checked investigators
  random = Math.floor(Math.random()* checkedArray.length);

  // Store which investigator that is
  chosenPlayers[i] = checkedArray[random];

  //Use splice to remove chosen player from selected array for next player
  checkedArray.splice(random, 1);
  }

  return chosenPlayers;
}

var yark = [];
$(document).ready(function() {

  function pickCharacters() {
    var numPlayers = $("#player-number").val();
    console.log("number of players", numPlayers);
    yark = $(':checkbox[name=investigator]').map(function () {
    if (this.checked) {
      return this.value;
    }
    });

    var chosen = chooseMe(yark, numPlayers);
    console.log("Hero:", chosen);
  };

  function pickAncientOne(){
  yark = $(':checkbox[name=ancientone]').map(function () {
    if (this.checked) {
      return this.value;
    }
  });
  var chosen = chooseMe(yark, 1);
  console.log("Enemy:", chosen);
  }

  $("#pickCharacters").click(pickCharacters);
  $("#pickAncientOne").click(pickAncientOne);

  $("#checkAllInv").click(function(event){
    $(':checkbox[name=investigator]').each(function() {
          this.checked = true;
      });
  }); //end


  $("#checkAllAO").click(function(event){
    if ($(this).is(":checked")){
      $('input:checkbox[name=ancientone]').each(function() {
        this.checked = true;
      });
      $('input:checkbox[name=check-control]').each(function() {
        this.checked = true;
      });
    } else {
      $('input:checkbox[name=ancientone]').each(function() {
        this.checked = false;
      });
      $('input:checkbox[name=check-control]').each(function() {
        this.checked = false;
      });
    }
  }); //end

  $("input[name='check-control']").click(function() {
    var selection = event.target.value;
    if ($("input[value='" + selection + "']").is(":checked")) { 
      console.log("selection", selection);
      $("input:checkbox[set='" + selection + "']").each(function() {
        this.checked = true;
      });
    } else {
      $("input:checkbox[set='" + selection + "']").each(function() {
        this.checked = false;
      });
    }
  });

  $("#pickAll").click(function(){
    pickCharacters();
    pickAncientOne();
  });


}); //end document ready function
