var computerButtonColor;
var computerButtonSequence = [];
var userButtonSequence = [];
var randomNumber;
var level = 1;
var index = -1;
var numberOfRandomColors = 0;
$(document).ready(startKeypressEvents());

function playSound(buttonCol){
    $("#"+buttonCol).addClass("pressed");
    setTimeout(function(){
        $("#"+buttonCol).removeClass("pressed");
    }, 100);
    switch(buttonCol){
       case "green":
           var green = new Audio("sounds/green.mp3");
           green.play();
           break;
        case "red":
           var red = new Audio("sounds/red.mp3");
           red.play();
           break;
        case "yellow":
           var yellow = new Audio("sounds/yellow.mp3");
           yellow.play();
           break;
        case "blue":
           var blue = new Audio("sounds/blue.mp3");
           blue.play();
           break;
       default: console.log(event.target.id);
   }
}
function randomButtonSelection(){
    randomNumber = Math.floor(Math.random()*4);
    randomButton = $(".btn")[randomNumber];
    computerButtonColor = randomButton.id;
    computerButtonSequence.push(randomButton.id);
    numberOfRandomColors++;
    playSound(randomButton.id);
}

function stopClickEvents(){
    $(".btn").off("click");
    startKeypressEvents();
}

function enableClickEvents(){
    $(".btn").on("click", function(event){
        var buttonColor = event.target.id;
        userButtonSequence.push(buttonColor);
        playSound(buttonColor);
        index++;
        checkSequence(index);
    });
}

function startKeypressEvents(){
   $(document).on("keypress", function(){
    if($("h1").text()==="Press A Key to Start" || $("h1").text() === "Game Over, Press Any Key to Restart"){
        $("h1").text("Level "+level);
        randomButtonSelection();
        enableClickEvents();
    }
});
}
function checkSequence(ind){
  if(computerButtonSequence[ind] == userButtonSequence[ind]){
    if(ind == (numberOfRandomColors-1)){
      index = -1;
      userButtonSequence = [];
      setTimeout(function(){
        $("h1").text("Level "+(++level));
      },800);
      setTimeout(function(){
        randomButtonSelection();
      }, 1000);
    }else{
    }
  }else{
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    index = -1;
    level = 1;
    userButtonSequence = [];
    computerButtonSequence = [];
    numberOfRandomColors = 0;
    stopClickEvents();
  }
}
