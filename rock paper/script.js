const totalScores = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
    const rpsCoice = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsCoice[randomNumber]
}


function getResult(playerChoice, computerChoice) {

if (playerChoice == computerChoice) {
    score = 0

} else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
} else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
} else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
} else {
    score = -1
}
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `You Lose!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById ('result')
  const handsDiv = document.getElementById ('hands')
  const playerScoreDiv = document.getElementById ('player-score')
    if (score == -1){
    resultDiv.innerText = "You Lose!"
  }else if (score = 0){
    resultDiv.innerText = "It's a tie!"
  }else {
    resultDiv.innerText = "You Win!"
  }

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScores['playerScore']}`
}

function onClickRPS(playerChoice) {
    console.log ({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalScores['playerScore'] += score
    console.log({score})
    console.log(totalScores)
    showResult(score, playerChoice, computerChoice)
    
}



function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons[0].onclick = () => console.log (rpsButtons[0].value)
  
    rpsButtons.forEach(rpsButtons => {
        rpsButtons.onclick = () => onClickRPS(rpsButtons.value)
    }) 
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScores)
}

function endGame() {
    totalScores['playerScore'] = 0
    totalScores['computerScore'] = 0
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
    
}

playGame()

