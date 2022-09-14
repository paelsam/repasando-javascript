/**
 * CARDS:
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


// Patrón Módulo

/**
 * Función anónima: nos crea un nuevo scope 
 * haciendo que nuestro código no sea accesible dentro del scope global
 * */

const myModule = (() => {
    'use strict'

    // Document: querySelector and getElementById
    const $ = document,
        $all = (element) => $.querySelectorAll(element),
        $id = (id) => $.getElementById(id);

    // HTML References
    const btnAsk = $id('ask'),
        btnStop = $id('stop'),
        btnNewGame = $id('new-game'),
        divResults = $id('results');

    const points = $all('small'),
        playersCards = $all('.div-cards');


    // Baraja de cartas: 
    let deck = [];
    const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'K', 'Q', 'J'];

    // Game feactures
    let playersPoints = [];


    // Function that starts the game
    const startGame = (players = 2) => {
        deck = createDeck();
        playersPoints = [];

        for (let i = 0; i < players; i++) {
            playersPoints.push(0);
        }

        divResults.innerText = '';

        points.forEach( element => element.innerText = 0 );
        playersCards.forEach( element => element.textContent = '' );

        btnAsk.disabled = false;
        btnStop.disabled = false;
    }


    // Funcion que crear baraja de cartas aleatoriamente
    const createDeck = () => {
        // Vaciamos el deck
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (const type of types) {
                deck.push(i + type);
            }
        }
        for (const special of specials) {
            for (const type of types) {
                deck.push(special + type);
            }
        }
        return _.shuffle(deck);
    }


    // Esta funcion permite tomar una carta al jugador
    const askCard = () => {
        // Numero aleatorio entre 0 y el numero de valores de la baraja
        const indexCard = _.random(0, deck.length - 1),
            card = deck[indexCard];
        // Eliminado la carta de la baraja
        deck.splice(indexCard, 1);
        // Función anónima que se ejecutaŕa cuando no haya cartas. 
        return card ? card : (() => { throw "There are not cards" })();
    }


    // Ponerle valor a las cartas
    const cardValue = (card) => {
        // Substring: Nos extrae el string dependiendo del rango que pusimos.
        const value = card.substring(0, card.length - 1);
        // isNaN: Evalua si el valor es un numero o no.
        /** 
         * J, Q, K = 10
         * A = 11 o 1
        */
        // Con Number() Convertimos el numero (String) a numero (Number)
        return (isNaN(value)) ?
            (value === 'A') ? 11 : 10
            : Number(value);
    }

    // Turn: The firts is player and the last is computer 

    const accumulatePoints = (card, playerTurn) => {
        playersPoints[playerTurn] += cardValue(card);
        points[playerTurn].textContent = playersPoints[playerTurn];
        return playersPoints[playerTurn]
    }

    const createCard = (card, playerTurn) => {
        const cardImg = $.createElement('img');
        cardImg.src = `assets/cartas/${card}.png`; // 2D, 3C
        cardImg.alt = "Card";
        cardImg.classList.add("card");
        playersCards[playerTurn].appendChild(cardImg);
    }

    const winnerDecider = () => {
        
        const [mininumPoints, computerPoints] = playersPoints;

        setTimeout(() => {
            if (mininumPoints === computerPoints) {
                alert('DRAW');
            } else if (mininumPoints > 21) {
                alert('YOU LOSE, COMPUTER WINS');
            } else if (computerPoints > 21 || mininumPoints === 21) {
                alert('YOU WIN');
            }  else {
                alert('COMPUTER WINS');
            }
        }, 100);
    }

    // Computer's turn 

    const computerTurn = (mininumPoints) => {

        /** 
        *   !WARN: No declarar esta variable con const ya que 
        *   !podemos crear un bucle infinito :u (Por experiencia)
        */ 
        let computerPoints = 0;
        do {
            const card = askCard();
            computerPoints = accumulatePoints(card, playersPoints.length - 1);
            createCard(card, playersPoints.length - 1); 
        } while ((computerPoints <= mininumPoints) && (mininumPoints < 21));

        winnerDecider();
    }



    // Events 
    btnAsk.addEventListener('click', () => {

        const card = askCard();

        const playerPoints = accumulatePoints(card, 0);

        createCard(card, 0);

        if (playerPoints > 21) {
            // console.info('%c Sorry, you lost 👺', "color: red; font-size: 15px; font-weight: bold;");
            divResults.innerText = "Sorry, you lost 👺"
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints);
        } else if (playerPoints === 21) {
            divResults.innerText = "You Win! You got Lucky 👹"
            divResults.classList.add( 'text-success' )
            // console.info("%c 21, You got Lucky 👺", "color: green; font-size: 15px; font-weight: bold;")
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints);
        }

    })

    btnStop.addEventListener('click', () => {
        btnAsk.disabled = true;
        btnStop.disabled = true;

        const player = playersPoints[0];

        computerTurn( player );
    })

    btnNewGame.addEventListener('click', () => {
        startGame();
    })

    // Pasando mi función que será pública.
    return {
        iniciarJuego: startGame
    }

})();




