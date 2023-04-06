
totalScore = {playerScore: '0' , computerScore: '0'}

const rpsBtns = document.querySelectorAll('.rpsBtn')

    rpsBtns.forEach(rpsBtns => {
        rpsBtns.onclick = () => onClickRPS(rpsBtns.value)
    })

const endgameBtn = document.getElementById('reset')
endgameBtn.onclick = () => endgame(totalScore)

function getrandom () {

    const random = ['rock' , 'paper' , 'scissor']
    const randomChoice = Math.floor(Math.random()*3)
    return random[randomChoice]

}

function getResult (playerChoice , computerChoice) {
    let score
    if(playerChoice == computerChoice) {
        score = 0
    }

    else if (playerChoice == 'rock' && computerChoice == 'scissor'){
        score = 1
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        score = 1
    }
    else if (playerChoice == 'scissor' && computerChoice == 'paper'){
        score = 1
    }

    else {
        score = -1
    }

    return score

}

function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const computerChoice = getrandom()
    console.log({computerChoice})
    const score = getResult(playerChoice , computerChoice)
    if(score == '1'){
        totalScore['playerScore'] = Number(totalScore['playerScore']) + 1
        totalScore['computerScore'] = Number(totalScore['computerScore']) - 1
    }
    else if(score == '-1'){
        totalScore['computerScore'] = Number(totalScore['computerScore']) + 1
        totalScore['playerScore'] = Number(totalScore['playerScore']) - 1
    }
    
    showresult(score, playerChoice, computerChoice)
    console.log(totalScore)
}

function showresult (score, playerChoice, computerChoice) {

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    if (score == -1) {
        resultDiv.style.boxShadow = "0 0 30px #E96479"
        resultDiv.innerText = '- You Lose! -'
    }
    else if (score == 0) {
        resultDiv.style.boxShadow = "0 0 30px #FCFFE7"
        resultDiv.innerText = '- Its a tie! -'
    }
    else {
        resultDiv.style.boxShadow = "0 0 30px #03C988"
        resultDiv.innerText = '- You won -'
    }

    handsDiv.innerText = `👨 ${playerChoice} vs 🤖 ${computerChoice}`
    playerScoreDiv.innerText = `Your Score:  ${totalScore.playerScore} |  Computer Score: ${totalScore.computerScore}`

}

function endgame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

const darkBtn = document.getElementById('icon')
darkBtn.onclick = () => {
    document.body.classList.toggle("dark-theme")
}


    

