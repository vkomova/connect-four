/* -----Variables----- */
var playerOneArray = [];
var playerTwoArray = [];

var redPlayerName;
var yellowPlayerName;

var turn = 1;

var hoverButton = document.getElementById("button");


/* -----Winning combos----- */
wins = [[35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [35, 28, 21, 14], [28, 21, 14, 7], [21, 14, 7, 0], [36, 29, 22, 15], [29, 22, 15, 8], [22, 15, 8, 1], [37, 30, 23, 16], [30, 23, 16, 9], [23, 16, 9, 2], [38, 31, 24, 17], [31, 24, 17, 10], [24, 17, 10, 3], [39, 32, 25, 18], [32, 25, 18, 11], [25, 18, 11, 4], [40, 33, 26, 19], [33, 26, 19, 12], [26, 19, 12, 5], [41, 34, 27, 20], [34, 27, 20, 13], [27, 20, 13, 6], [21, 15, 9, 3], [28, 22, 16, 10], [22, 16, 10, 4], [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5], [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6], [37, 31, 25, 19], [31, 25, 19, 13], [38, 32, 26, 20], [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39], [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40], [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [2, 10, 18, 26], [10, 18, 26, 34], [3, 11, 19, 27]];


/* -----Each slot on board defined----- */
//column one
var circle35 = document.getElementById('thirtyfive');
var circle28 = document.getElementById('twentyeight');
var circle21 = document.getElementById('twentyone');
var circle14= document.getElementById('fourteen');
var circle7 = document.getElementById('seven');
var circle0 = document.getElementById('zero');

//column two
var circle36 = document.getElementById('thirtysix');
var circle29 = document.getElementById('twentynine');
var circle22 = document.getElementById('twentytwo');
var circle15 = document.getElementById('fifteen');
var circle8 = document.getElementById('eight');
var circle1 = document.getElementById('one');

//column three
var circle37 = document.getElementById('thirtyseven');
var circle30 = document.getElementById('thirty');
var circle23 = document.getElementById('twentythree');
var circle16 = document.getElementById('sixteen');
var circle9 = document.getElementById('nine');
var circle2 = document.getElementById('two');

//column four
var circle38 = document.getElementById('thirtyeight');
var circle31 = document.getElementById('thirtyone');
var circle24 = document.getElementById('twentyfour');
var circle17 = document.getElementById('seventeen');
var circle10 = document.getElementById('ten');
var circle3 = document.getElementById('three');

//column five
var circle39 = document.getElementById('thirtynine');
var circle32 = document.getElementById('thirtytwo');
var circle25 = document.getElementById('twentyfive');
var circle18 = document.getElementById('eighteen');
var circle11 = document.getElementById('eleven');
var circle4 = document.getElementById('four');

//column six
var circle40 = document.getElementById('fourty');
var circle33 = document.getElementById('thirtythree');
var circle26 = document.getElementById('twentysix');
var circle19 = document.getElementById('nineteen');
var circle12 = document.getElementById('twelve');
var circle5 = document.getElementById('five');

//column seven
var circle41 = document.getElementById('fourtyone');
var circle34 = document.getElementById('thirtyfour');
var circle27 = document.getElementById('twentyseven');
var circle20 = document.getElementById('twenty');
var circle13 = document.getElementById('thirteen');
var circle6 = document.getElementById('six');


/* -----Functions----- */
function playerOneName() {
  redPlayerName = prompt("Please enter the first player's name. This player will use red game pieces.");
  if (redPlayerName !== null) {
    document.getElementById("player1").innerHTML =
    `Player 1: ${redPlayerName} &nbsp; &nbsp; &nbsp; &nbsp;`;
  }
};

function playerTwoName() {
  yellowPlayerName = prompt("Please enter the second player's name. This player will use yellow game pieces.");
  if (yellowPlayerName !== null) {
    document.getElementById("player2").innerHTML =
    `Player 2: ${yellowPlayerName} &nbsp; &nbsp; &nbsp;`;
  }
};

playerOneName();
playerTwoName();

function clickedButton() {
  button.style.border = '4px solid #1E90FF';
  button.style.color = '#F9F653' ;
  location.reload();
};

button.addEventListener("mouseover", function(event) {
  button.style.border = '4px solid #1E90FF';
  button.style.color = '#F9F653';
  setTimeout(function() {
    button.style.color = "";
    button.style.border = "";
  }, 1000);
}, false);

function playerNameHidden() {
  if (turn == 1) {
    document.getElementById("player2").style.visibility = "hidden";
    document.getElementById("player1").style.visibility = "visible";
  } else {
    document.getElementById("player1").style.visibility = "hidden";
    document.getElementById("player2").style.visibility = "visible";
    } 
};

function getWinner() {
  for (var i = 0; i < wins.length; i++) {
    if (playerOneArray.includes(wins[i][0]) && playerOneArray.includes(wins[i][1]) && playerOneArray.includes(wins[i][2]) && playerOneArray.includes(wins[i][3])) {
      alert("« Player 1 wins! Press 'ok' to refresh board »");
      location.reload();
    }
    if (playerTwoArray.includes(wins[i][0]) && playerTwoArray.includes(wins[i][1]) && playerTwoArray.includes(wins[i][2]) && playerTwoArray.includes(wins[i][3])) {
      alert("« Player 2 wins! Press 'ok' to refresh board »");
      location.reload();
    }
  }
};

function checkTie() {
  if (playerOneArray.length == 21 && playerTwoArray.length == 21) {
    alert("« It's a tie! Press 'ok' to refresh board »");
    location.reload();
  }
};

document.getElementById("gameboard").addEventListener("click", playerTurn);

function playerTurn(e) {
  if (e.target.classList.contains('column-one')) {
    if (circle35.style.backgroundColor == '') {
      if (turn == 1) {
        circle35.style.backgroundColor = "#BE3038";
        playerOneArray.push(35);
        turn *= -1;
      } else {
        circle35.style.backgroundColor = "#F9F653";
        playerTwoArray.push(35);
        turn *= -1;
      }
    } else if (circle28.style.backgroundColor == '') {
      if (turn == 1) {
        circle28.style.backgroundColor = "#BE3038";
        playerOneArray.push(28);
        turn *= -1;
      } else {
        circle28.style.backgroundColor = "#F9F653";
        playerTwoArray.push(28);
        turn *= -1;
      }
    } else if (circle21.style.backgroundColor == '') {
      if (turn == 1) {
        circle21.style.backgroundColor = "#BE3038";
        playerOneArray.push(21);
        turn *= -1;
      } else {
        circle21.style.backgroundColor = "#F9F653";
        playerTwoArray.push(21);
        turn *= -1;
      }
    } else if (circle14.style.backgroundColor == '') {
      if (turn == 1) {
        circle14.style.backgroundColor = "#BE3038";
        playerOneArray.push(14);
        turn *= -1;
      } else {
        circle14.style.backgroundColor = "#F9F653";
        playerTwoArray.push(14);
        turn *= -1;
      }
    } else if (circle7.style.backgroundColor == '') {
      if (turn == 1) {
        circle7.style.backgroundColor = "#BE3038";
        playerOneArray.push(7);
        turn *= -1;
      } else {
        circle7.style.backgroundColor = "#F9F653";
        playerTwoArray.push(7);
        turn *= -1;
      }
    } else if (circle0.style.backgroundColor == '') {
      if (turn == 1) {
        circle0.style.backgroundColor = "#BE3038";
        playerOneArray.push(0);
        turn *= -1;
      } else {
        circle0.style.backgroundColor = "#F9F653";
        playerTwoArray.push(0);
        turn *= -1;
      } 
    } else {
      alert("Click on a different column to place piece");
    }
  } else if (e.target.classList.contains('column-two')) {
    if (circle36.style.backgroundColor == '') {
      if (turn == 1) {
        circle36.style.backgroundColor = "#BE3038";
        playerOneArray.push(36);
        turn *= -1;
      } else {
        circle36.style.backgroundColor = "#F9F653";
        playerTwoArray.push(36);
        turn *= -1;
      }
    } else if (circle29.style.backgroundColor == '') {
      if (turn == 1) {
        circle29.style.backgroundColor = "#BE3038";
        playerOneArray.push(29);
        turn *= -1;
      } else {
        circle29.style.backgroundColor = "#F9F653";
        playerTwoArray.push(29);
        turn *= -1;
      }
    } else if (circle22.style.backgroundColor == '') {
      if (turn == 1) {
        circle22.style.backgroundColor = "#BE3038";
        playerOneArray.push(22);
        turn *= -1;
      } else {
        circle22.style.backgroundColor = "#F9F653";
        playerTwoArray.push(22);
        turn *= -1;
        }
    } else if (circle15.style.backgroundColor == '') {
      if (turn == 1) {
        circle15.style.backgroundColor = "#BE3038";
        playerOneArray.push(15);
        turn *= -1;
      } else {
        circle15.style.backgroundColor = "#F9F653";
        playerTwoArray.push(15);
        turn *= -1;
      }
    } else if (circle8.style.backgroundColor == '') {
      if (turn == 1) {
        circle8.style.backgroundColor = "#BE3038";
        playerOneArray.push(8);
        turn *= -1;
      } else {
        circle8.style.backgroundColor = "#F9F653";
        playerTwoArray.push(8);
        turn *= -1;
      }
    } else if (circle1.style.backgroundColor == '') {
      if (turn == 1) {
        circle1.style.backgroundColor = "#BE3038";
        playerOneArray.push(1);
        turn *= -1;
      } else {
        circle1.style.backgroundColor = "#F9F653";
        playerTwoArray.push(1);
        turn *= -1;
      }
    } else {
      alert("Click on a different column to place piece");
    }
  } else if (e.target.classList.contains('column-three')) {
    if (circle37.style.backgroundColor == '') {
      if (turn == 1) {
        circle37.style.backgroundColor = "#BE3038";
        playerOneArray.push(37);
        turn *= -1;
      } else {
        circle37.style.backgroundColor = "#F9F653";
        playerTwoArray.push(37);
        turn *= -1;
      }
    } else if (circle30.style.backgroundColor == '') {
      if (turn == 1) {
        circle30.style.backgroundColor = "#BE3038";
        playerOneArray.push(30);
        turn *= -1;
      } else {
        circle30.style.backgroundColor = "#F9F653";
        playerTwoArray.push(30);
        turn *= -1;
      }
    } else if (circle23.style.backgroundColor == '') {
      if (turn == 1) {
        circle23.style.backgroundColor = "#BE3038";
        playerOneArray.push(23);
        turn *= -1;
      } else {
        circle23.style.backgroundColor = "#F9F653";
        playerTwoArray.push(23);
        turn *= -1;
      }
    } else if (circle16.style.backgroundColor == '') {
      if (turn == 1) {
        circle16.style.backgroundColor = "#BE3038";
        playerOneArray.push(16);
        turn *= -1;
      } else {
        circle16.style.backgroundColor = "#F9F653";
        playerTwoArray.push(16);
        turn *= -1;
      }
    } else if (circle9.style.backgroundColor == '') {
      if (turn == 1) {
        circle9.style.backgroundColor = "#BE3038";
        playerOneArray.push(9);
        turn *= -1;
      } else {
        circle9.style.backgroundColor = "#F9F653";
        playerTwoArray.push(9);
        turn *= -1;
        }
    } else if (circle2.style.backgroundColor == '') {
      if (turn == 1) {
        circle2.style.backgroundColor = "#BE3038";
        playerOneArray.push(2);
        turn *= -1;
      } else {
        circle2.style.backgroundColor = "#F9F653";
        playerTwoArray.push(2);
        turn *= -1;
      }
    } else {
      alert("Click on a different column to place piece");
    }
  } else if (e.target.classList.contains('column-four')) {
    if (circle38.style.backgroundColor == '') {
      if (turn == 1) {
        circle38.style.backgroundColor = "#BE3038";
        playerOneArray.push(38);
        turn *= -1;
      } else {
        circle38.style.backgroundColor = "#F9F653";
        playerTwoArray.push(38);
        turn *= -1;
      }
    } else if (circle31.style.backgroundColor == '') {
      if (turn == 1) {
        circle31.style.backgroundColor = "#BE3038";
        playerOneArray.push(31);
        turn *= -1;
      } else {
        circle31.style.backgroundColor = "#F9F653";
        playerTwoArray.push(31);
        turn *= -1;
      }
    } else if (circle24.style.backgroundColor == '') {
      if (turn == 1) {
        circle24.style.backgroundColor = "#BE3038";
        playerOneArray.push(24);
        turn *= -1;
      } else {
        circle24.style.backgroundColor = "#F9F653";
        playerTwoArray.push(24);
        turn *= -1;
      }
    } else if (circle17.style.backgroundColor == '') {
      if (turn == 1) {
        circle17.style.backgroundColor = "#BE3038";
        playerOneArray.push(17);
        turn *= -1;
      } else {
        circle17.style.backgroundColor = "#F9F653";
        playerTwoArray.push(17);
        turn *= -1;
      }
    } else if (circle10.style.backgroundColor == '') {
      if (turn == 1) {
        circle10.style.backgroundColor = "#BE3038";
        playerOneArray.push(10);
        turn *= -1;
      } else {
        circle10.style.backgroundColor = "#F9F653";
        playerTwoArray.push(10);
        turn *= -1;
      }
    } else if (circle3.style.backgroundColor == '')  {
      if (turn == 1) {
        circle3.style.backgroundColor = "#BE3038";
        playerOneArray.push(3);
        turn *= -1;
      } else {
        circle3.style.backgroundColor = "#F9F653";
        playerTwoArray.push(3);
        turn *= -1;
      }
    } else {
      alert("Click on a different column to place piece");
    }
  } else if (e.target.classList.contains('column-five')) {
    if (circle39.style.backgroundColor == '') {
      if (turn == 1) {
        circle39.style.backgroundColor = "#BE3038";
        playerOneArray.push(39);
        turn *= -1;
      } else {
        circle39.style.backgroundColor = "#F9F653";
        playerTwoArray.push(39);
        turn *= -1;
      }
    } else if (circle32.style.backgroundColor == '') {
      if (turn == 1) {
        circle32.style.backgroundColor = "#BE3038";
        playerOneArray.push(32);
        turn *= -1;
      } else {
        circle32.style.backgroundColor = "#F9F653";
        playerTwoArray.push(32);
        turn *= -1;
      }
    } else if (circle25.style.backgroundColor == '') {
      if (turn == 1) {
        circle25.style.backgroundColor = "#BE3038";
        playerOneArray.push(25);
        turn *= -1;
      } else {
        circle25.style.backgroundColor = "#F9F653";
        playerTwoArray.push(25);
        turn *= -1;
      }
    } else if (circle18.style.backgroundColor == '') {
      if (turn == 1) {
        circle18.style.backgroundColor = "#BE3038";
        playerOneArray.push(18);
        turn *= -1;
      } else {
        circle18.style.backgroundColor = "#F9F653";
        playerTwoArray.push(18);
        turn *= -1;
      }
    } else if (circle11.style.backgroundColor == '') {
      if (turn == 1) {
        circle11.style.backgroundColor = "#BE3038";
        playerOneArray.push(11);
        turn *= -1;
      } else {
        circle11.style.backgroundColor = "#F9F653";
        playerTwoArray.push(11);
        turn *= -1;
      }
    } else if (circle4.style.backgroundColor == '') {
      if (turn == 1) {
        circle4.style.backgroundColor = "#BE3038";
        playerOneArray.push(4);
        turn *= -1;
      } else {
        circle4.style.backgroundColor = "#F9F653";
        playerTwoArray.push(4);
        turn *= -1;
      }
    } else {
      alert("Click on a different column to place piece");
    }
  } else if (e.target.classList.contains('column-six')) {
    if (circle40.style.backgroundColor == '') {
      if (turn == 1) {
        circle40.style.backgroundColor = "#BE3038";
        playerOneArray.push(40);
        turn *= -1;
      } else {
        circle40.style.backgroundColor = "#F9F653";
        playerTwoArray.push(40);
        turn *= -1;
      }
    } else if (circle33.style.backgroundColor == '') {
      if (turn == 1) {
        circle33.style.backgroundColor = "#BE3038";
        playerOneArray.push(33);
        turn *= -1;
      } else {
        circle33.style.backgroundColor = "#F9F653";
        playerTwoArray.push(33);
        turn *= -1;
      }
    } else if (circle26.style.backgroundColor == '') {
      if (turn == 1) {
        circle26.style.backgroundColor = "#BE3038";
        playerOneArray.push(26);
        turn *= -1;
      } else {
        circle26.style.backgroundColor = "#F9F653";
        playerTwoArray.push(26);
        turn *= -1;
      }
    } else if (circle19.style.backgroundColor == '') {
      if (turn == 1) {
        circle19.style.backgroundColor = "#BE3038";
        playerOneArray.push(19);
        turn *= -1;
      } else {
        circle19.style.backgroundColor = "#F9F653";
        playerTwoArray.push(19);
        turn *= -1;
      }
    } else if (circle12.style.backgroundColor == '') {
      if (turn == 1) {
        circle12.style.backgroundColor = "#BE3038";
        playerOneArray.push(12);
        turn *= -1;
      } else {
        circle12.style.backgroundColor = "#F9F653";
        playerTwoArray.push(12);
        turn *= -1;
      }
    } else if (circle5.style.backgroundColor == '') {
      if (turn == 1) {
        circle5.style.backgroundColor = "#BE3038";
        playerOneArray.push(5);
        turn *= -1;
      } else {
        circle5.style.backgroundColor = "#F9F653";
        playerTwoArray.push(5);
        turn *= -1;
      }
    } else {
      alert("Click on a different column to place piece");
    }
  } else if (e.target.classList.contains('column-seven')) {
    if (circle41.style.backgroundColor == '') {
      if (turn == 1) {
        circle41.style.backgroundColor = "#BE3038";
        playerOneArray.push(41);
        turn *= -1;
      } else {
        circle41.style.backgroundColor = "#F9F653";
        playerTwoArray.push(41);
        turn *= -1;
      }
    } else if (circle34.style.backgroundColor == '') {
      if (turn == 1) {
        circle34.style.backgroundColor = "#BE3038";
        playerOneArray.push(34);
        turn *= -1;
      } else {
        circle34.style.backgroundColor = "#F9F653";
        playerTwoArray.push(34);
        turn *= -1;
      }
    } else if (circle27.style.backgroundColor == '') {
      if (turn == 1) {
        circle27.style.backgroundColor = "#BE3038";
        playerOneArray.push(27);
        turn *= -1;
      } else {
        circle27.style.backgroundColor = "#F9F653";
        playerTwoArray.push(27);
        turn *= -1;
      }
    } else if (circle20.style.backgroundColor == '') {
      if (turn == 1) {
        circle20.style.backgroundColor = "#BE3038";
        playerOneArray.push(20);
        turn *= -1;
      } else {
        circle20.style.backgroundColor = "#F9F653";
        playerTwoArray.push(20);
        turn *= -1;
      }
    } else if (circle13.style.backgroundColor == '') {
      if (turn == 1) {
        circle13.style.backgroundColor = "#BE3038";
        playerOneArray.push(13);
        turn *= -1;
      } else {
        circle13.style.backgroundColor = "#F9F653";
        playerTwoArray.push(13);
        turn *= -1;
      }
    } else if (circle6.style.backgroundColor == '') {
      if (turn == 1) {
        circle6.style.backgroundColor = "#BE3038";
        playerOneArray.push(6);
        turn *= -1;
      } else {
        circle6.style.backgroundColor = "#F9F653";
        playerTwoArray.push(6);
        turn *= -1;
      }
    } else {
      alert("Click on a different column to place piece");
    }
  } else {
      alert("Click on a column to place piece »");
  }
  playerNameHidden();
  getWinner();
  checkTie();
};