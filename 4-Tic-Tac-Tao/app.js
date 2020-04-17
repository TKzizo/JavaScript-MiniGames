document.addEventListener('DOMContentLoaded',() => {
    const squares = document.querySelectorAll('.grid div')
    let player = document.querySelector('h3')

    let currentPlayer = "PlayerX"

    squares.forEach(item => {
        item.addEventListener('click',() =>{
            if(!(item.classList.contains('taken'))){
                item.classList.add('taken')
                if(currentPlayer == "PlayerX"){
                    item.classList.add("PlayerX")
                    currentPlayer = "PlayerO"
                    player.textContent = currentPlayer
                }else {
                    item.classList.add("PlayerO")
                    currentPlayer = "PlayerX"
                    player.textContent = currentPlayer
                }
            }
        })
    })




})