"use strict";

// Kode med Klaus

let userChoice
let compChoice
let winner;

document.querySelector(".rock").addEventListener("click", klikRock)
document.querySelector(".paper").addEventListener("click", klikPaper)
document.querySelector(".scissors").addEventListener("click", klikScissors)

const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")

function klikRock() {
  // console.log("ROCK")
  userChoice = "rock"
  computerChooses()
}

function klikPaper() {
  // console.log("PAPER")
  userChoice = "paper"
  computerChooses()
}

function klikScissors() {
  // console.log("SCISSORS")
  userChoice = "scissors"
  computerChooses()
}

function computerChooses() {
  // console.log("COMPUTER CHOOSES user choice:", userChoice)
  const randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber === 0) {
    compChoice = "rock"
  } else if (randomNumber === 1) {
    compChoice = "paper"
  } else {
    compChoice = "scissors"
  }

  console.log("userChoice", userChoice)
  console.log("compChoice", compChoice)
  determineWinner()
}

function determineWinner() {
  if (userChoice === compChoice) {
    winner = "none"
  } else if (userChoice === "rock") {
    if (compChoice === "paper") {
      winner = "comp"
    } else if (compChoice === "scissors") {
      winner = "user"
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      winner = "user"
    } else if (compChoice === "scissors") {
      winner = "comp"
    }
  } else {
    if (compChoice === "rock") {
      winner = "comp"
    } else if (compChoice === "paper") {
      winner = "user"
    }
  }

  console.log("The winner is: ", winner)
  randomAnimation()
}

function randomAnimation() {
  player1.addEventListener("animationend", handAnimationEnd)
  player1.classList.add("shake")
  player2.classList.add("shake")
}


function handAnimationEnd() {
  console.log("hand")
  player1.classList.remove("shake")
  player2.classList.remove("shake")

  if (userChoice === "rock") {

    player1.classList.add("rock")

  } else if (userChoice === "paper") {

    player1.classList.add("paper")

  } else {

    player1.classList.add("scissors")

  }
  if (compChoice === "rock") {

    player2.classList.add("rock")

  } else if (userChoice === "paper") {

    player2.classList.add("paper")

  } else {

    player2.classList.add("scissors")
  }

}

function removeRPCClasses() {
  player1.classList.remove("rock", "paper", "scissors")
  player2.classList.remove("rock", "paper", "scissors")

}
