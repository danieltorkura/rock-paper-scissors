let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const pick = Math.floor(Math.random() * choices.length)
    return choices[pick]
}

function convertToWord(letter) {
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(4).sub();
    const smallCompWord = 'comp'.fontsize(5).sub();
    const userChoice_border = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + ' beats ' + convertToWord(computerChoice) + smallCompWord + ' You Win.'
    userChoice_border.classList.add('green-glow')
    setTimeout(function() { userChoice_border.classList.remove('green-glow') }, 300)
}


function lose(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(4).sub()
    const smallCompWord = 'comp'.fontsize(5).sub()
    const userChoice_border = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + ' loses to ' + convertToWord(computerChoice) + smallCompWord + ' You Lost.'
    userChoice_border.classList.add('red-glow')
    setTimeout(function() { userChoice_border.classList.remove('red-glow') }, 300)
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(4).sub()
    const smallCompWord = 'comp'.fontsize(5).sub()
    const userChoice_border = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + ' equals ' + convertToWord(computerChoice) + smallCompWord + ' Na draw.'
    userChoice_border.classList.add('brown-glow')
    setTimeout(function() { userChoice_border.classList.remove('brown-glow') }, 300)
}

function gameBegin(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        gameBegin('r')
    }) 
    
    paper_div.addEventListener('click', function() {
        gameBegin('p')
    }) 
    
    scissors_div.addEventListener('click', function() {
        gameBegin('s')
    }) 
}


main()
