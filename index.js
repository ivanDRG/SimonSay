var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
function nextSecuence(){
  var randomNumber = Math.floor(Math.random()*4)
  var randomChosenColor = $(buttonColor)[randomNumber];
  var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  sound.play();
  gamePattern.push(randomChosenColor);
}

$(".btn").click(function(event){
var userChosenColor = event.target.id;
var audio = new Audio("sounds/" + userChosenColor + ".mp3");
audio.play();
$("#" + userChosenColor).fadeOut(100).fadeIn(100);
userClickedPattern.push(event.target.id);
checkAnswer(userClickedPattern.length-1);
});
$(document).keydown(function(){
  if(level === 0){
    nextSecuence();
    $("#level-title").text("level " + level);
    level++;
  }
});
function checkAnswer (currentlevel){
  if(userClickedPattern[currentlevel] === gamePattern[currentlevel]){
    if(userClickedPattern.length == gamePattern.length){
      setTimeout(function () {
        nextSecuence();
      }, 1000);
      $("#level-title").text("level " + level);
      level++;
      userClickedPattern = [];
    }
    }else{
    level = 0;
    var audiog = new Audio("sounds/wrong.mp3");
    audiog.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("GAME OVER, press a key again...");
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    }
}
