const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
let score = document.getElementById("score")
let result = 0
let currenttime = timeleft.textContent

function randomSquare(){
    square.forEach(className =>{
        className.classList.remove('mole')
    })
    randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach(id =>{
    id.addEventListener('mouseup',() =>{
        if(id.id == hitPosition) {
            result = result +1
            score.textContent = result
        }
    })
})

//timer just to call the function doesn't have relation with countdown
function moveMole() {
    let timerId = null 
    timerId = setInterval(randomSquare,1000)
}

moveMole()

function countdown(){
    currenttime --
    timeleft.textContent = currenttime
    if(currenttime === 0 ){
        //must have same name as variable assigned to it 
        clearInterval(timer)
        alert("GAME OVER!! you Score is: "+result)

    }
}

let timer = setInterval(countdown,1000)