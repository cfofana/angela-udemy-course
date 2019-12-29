var player1Number = Math.floor(Math.random() * 6) + 1;
var player2Number = Math.floor(Math.random() * 6) + 1;
var pathImg1 = "images/dice" + player1Number + ".png";
var pathImg2 = "images/dice" + player2Number + ".png";
document.querySelector(".img1").setAttribute("src", pathImg1);
document.querySelector(".img2").setAttribute("src", pathImg2);


if (player1Number > player2Number) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (player1Number < player2Number) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerText = "It's a tie!"
}

document.querySelector(".button").onclick = saySomething;

function saySomething(){
    alert("fkdljs");
}