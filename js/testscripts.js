function Player() {
  this.score = 0;
  this.lastroll = 0;
  // this.lastroll2 = [];
  // this.lastroll4 = [];
  //  this.newArray = [];
  //  this.newArray2 = [];
}

// player1.prototype.AddScore = function() {
//   this.score += getRandomInt(6);
// }

let newPlayer = new Player(0, 0, []);
let newPlayer2 = new Player(0, 0, []);



// function getRandomInt(max) {
//   return Math.ceil(Math.random() * 6);
// }

Player.prototype.GetInt = function (max) {
  this.lastroll = Math.ceil(Math.random() * 6);
}

// Player.prototype.GetInt2 = function (max) {
//   let newArray = this.lastroll2.push(Math.ceil(Math.random() * 6));
//   let newArray1 = this.lastroll4.push(Math.ceil(Math.random() * 6));
//   console.log('hello');
// }



// Player.prototype.AddScore2 = function () {
//   if ((this.lastroll2.toString() != "1") && (this.lastroll4.toString() != "1")) {
//     this.score += (parseInt(this.lastroll2) + parseInt(this.lastroll4));
//   } else if ((this.lastroll2.toString() != "1") || (this.lastroll4.toString() != "1")) {
//     this.score = this.score;
//   } else {
//     this.score = 0;
//   }

// }

Player.prototype.AddScore = function () {
  if (this.lastroll != 1) {
    this.score += this.lastroll;
  } else {
    // this.score = this.score;
  }

}

Player.prototype.DecideWin = function (num, num1) {
  if (newPlayer.score > newPlayer2.score) {
    return "player one wins";
  } else if (newPlayer.score < newPlayer2.score) {
    return "player two wins";
  } else {
    return "it is a tie, fight to the death";
  }
}

$(document).ready(function () {
  $("#button1").click(function (event) {
    event.preventDefault();
    newPlayer.GetInt();
    newPlayer.AddScore();
    $("#p1score").html(newPlayer.score);
    console.log(newPlayer);

  });
  // $("#buttonz").click(function (event) {
  //   event.preventDefault();
  //   newPlayer.GetInt2();
  //   newPlayer.AddScore2();
  //   $("#p1score").html(newPlayer.score);
  //   console.log(newPlayer);

  // });

  // $("#buttonx").click(function (event) {
  //   event.preventDefault();
  //   newPlayer2.GetInt2();
  //   newPlayer2.AddScore2();
  //   $("#p2score").html(newPlayer2.score);
  //   console.log(newPlayer2);

  // });

  $("#button2").click(function (event) {
    event.preventDefault();
    newPlayer2.GetInt();
    newPlayer2.AddScore();
    $("#p2score").html(newPlayer2.score);
    console.log(newPlayer2);
  });
  $("#button3").click(function (event) {
    event.preventDefault()
    $("#winner").html(newPlayer.DecideWin(newPlayer.score, newPlayer2.score));
    newPlayer.score = 0;
    newPlayer2.score = 0;
    $("#p1score").html(newPlayer.score);
    $("#p2score").html(newPlayer2.score);
  });
});







// // Business Logic for ScoreCard ------

// function ScoreCard () {
//   this.players = {};
//   this.currentId = 0;
// }

// ScoreCard.prototype.addPlayer = function(player) {
//   player.id = this.assignId();
//   this.players[player.id] = player;
// };

// ScoreCard.prototype.assignId = function() {
//   this.currentId += 1; //should this just asign two ids?
//   return this.currentId;
// };

// ScoreCard.prototype.findPlayer = function(id) {
//   if (this.players[id] != undefined) {
//     return this.players[id];
//   }
//   return false;
// }

// // ScoreCard.prototype.deletePlayer = function(id) {
// //   if (this.players[id] === undefined) {
// //     return false;
// //   }
// //   delete this.players[id];
// //   return true; 
// // };

// // UI Logic ------

// let scoreCard = new ScoreCard();

// function displayPlayerScore(scoreCardToDisplay) {
//   let playersList = $("ul#players");
//   let htmlForPlayerInfo = "";
//   Object.keys(scoreCardToDisplay.players).forEach(function(key) {
//     const player = scoreCardToDisplay.findPlayer(key);
//     htmlForPlayerInfo += "<li id=" + player.id + ">" + player.firstName + "</li>";
//   });
//   playersList.html(htmlForPlayersList);
// }

// function showScore(playerId) {
//   const player = scoreCard.findPlayer(playerId);
//   $("#show-score").show();
//   $(".first-name").html(player.firstName);
//   let buttons = $("#buttons");
//   buttons.empty();
//   buttons.append();
    
//   };

// $(document).ready(function() {
//   $("button#dice-button").click(function(event){
//     event.preventDefault();
//     let rollDice = rollDice(7);
//     console.log(rollDice)
//   })
// })


// $(document).ready(function(){var o=[],e=$("#dice__cube"),i=1e3*e.css("transition-duration").split(",")[0].replace(/[^-\d\.]/g,"");function n(a){var t=e.attr("class").split(" ")[0],s="show-"+a;e.removeClass(),t==s?(e.addClass(s+" show-same"),setTimeout(function(){e.removeClass("show-same")},i)):e.addClass(s),o.push(a)}$("#dice__btn").on("click ",function(){var a,t,s,o=(a=1,t=6,Math.floor(Math.random()*t+a));1==o?n("front"):2==o?n("back"):3==o?n("right"):4==o?n("left"):5==o?n("top"):6==o&&n("bottom"),(s=$("#dice__audio")[0]).pause(),s.currentTime=0,s.play()})});


// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// var a,t,s,o=(a=1,t=6,Math.floor(Math.random()*t+a));

// function showScore(playerId) {
//   const player = ScoreCard.findPlayer(playerId);
//   $("#show-score").show();
//   $("#btn").click(function(){
//     $("#test3").val("Dolly Duck");
  
//     if(span.innerHTML === ""){
//       span.parentElement.remove();
//       //console.log('its empty',span.innerHTML)
//     }
//   })
//   let buttons = $("#buttons");
//   buttons.empty();
//   buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
// }


// $("#btn1").click(function(){
//   $("#test1").text("Hello world!");
// });
// $("#btn2").click(function(){
//   $("#test2").html("<b>Hello world!</b>");
// });
// $("#btn3").click(function(){
//   $("#test3").val("Dolly Duck");
// });

// function Player(firstName, totalScore) {
//   this.firstName = firstName;
//   this.totalScore = totalScore;
//   console.log(Player);
// }

// let scoreCard = new ScoreCard();
// const player1 = new Player("Manuel");
// const player2 = new Player("Donovan");
// scoreCard.addPlayer(player1);
// scoreCard.addPlayer(player2);

// $('#displayRollDice').empty();