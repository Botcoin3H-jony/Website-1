var correctNumber = generateRandomNumber()
var secondsRemaining = 20

var timer = setInterval(function() {
  secondsRemaining = secondsRemaining - 1

  document.getElementById("secondsRemaining").innerHTML = secondsRemaining

  if(secondsRemaining == 0) {
    restartGame()
  }
}, 1000)

function restartGame() {
  secondsRemaining = 20
  document.getElementById("secondsRemaining").innerHTML = secondsRemaining + ", new game, good luck!"
  
  correctNumber = generateRandomNumber()

  document.getElementById("usersGuess").value = ""
}

function generateRandomNumber() {
  return Math.round(Math.random() * 100) + 1
}

function submitGuess() {
  var guess = document.getElementById("usersGuess").value

  if(guess == correctNumber) {
    document.getElementById("result").innerHTML = "Correct, well done!"

    restartGame()
  }
  else if(guess > correctNumber) {
    document.getElementById("result").innerHTML = "Too high!"
  }
  else {
    document.getElementById("result").innerHTML = "Too low!"
  }
}