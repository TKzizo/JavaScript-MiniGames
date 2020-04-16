document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name:'fraise',
            img: 'images/fraise.png'
        },  
        {
            name:'fraise',
            img: 'images/fraise.png'
        },
        {
            name:'noodle',
            img: 'images/noodle.png'
        },  
        {
            name:'noodle',
            img: 'images/noodle.png'
        },
        {
            name:'pastery',
            img: 'images/pastery.png'
        },  
        {
            name:'pastery',
            img: 'images/pastery.png'
        },
        {
            name:'pizza',
            img: 'images/pizza.png'
        },  
        {
            name:'pizza',
            img: 'images/pizza.png'
        },
        {
            name:'tarte',
            img: 'images/tarte.png'
        },  
        {
            name:'tarte',
            img: 'images/tarte.png'
        },
        {
            name:'pancake',
            img: 'images/pancake.png'
        },  
        {
            name:'pancake',
            img: 'images/pancake.png'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []

    //create board
    function createboard() {
        for (let i = 0; i < cardArray.length ; i++ ) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }


    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optioOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if ( cardChosen[0] === cardChosen[1] ) {
            alert('You found a match')
            cards[optioOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
            cardsWon.push(cardChosen)
        }else{
            cards[optioOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
        }
        cardChosen = []
        cardChosenId = []
        result.textContent = cardsWon.length
        if (cardsWon.lenght === cardArray.length/2){
            result.textContent = 'Congratulations you did them all'
        }
    }

    function flipcard(){
        var cardId = this.getAttribute('data-id')
        if (cardId !== cardChosenId[0]){
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src' , cardArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch , 500)
        }
     }
    }

    createboard()














})