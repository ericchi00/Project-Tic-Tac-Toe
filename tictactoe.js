const Player = (marker) => {
    return { marker };
};


//gameBoard logic 
const gameBoard = (() => {
    const gameBoardArray = ["", "", "", "", "", "", "", "", ""];

    //determine who wins
    function win() {
        if (gameBoardArray[0] === 'X' && gameBoardArray[1] === 'X' && gameBoardArray[2] === 'X') {
            return 'Player X wins';
        } else if (gameBoardArray[0] === 'X' && gameBoardArray[3] === 'X' && gameBoardArray[6] === 'X') {
            return 'Player X wins';
        } else if (gameBoardArray[0] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[8] === 'X') {
            return 'Player X wins';
        } else if (gameBoardArray[1] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[7] === 'X') {
            return 'Player X wins';
        } else if (gameBoardArray[2] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[6] === 'X') {
            return 'Player X wins';
        } else if (gameBoardArray[2] === 'X' && gameBoardArray[5] === 'X' && gameBoardArray[8] === 'X') {
            return 'Player X wins';
        } else if (gameBoardArray[3] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[5] === 'X') {
            return 'Player X wins';
        } else if (gameBoardArray[0] === 'O' && gameBoardArray[1] === 'O' && gameBoardArray[2] === 'O') {
            return 'Player O wins';
        } else if (gameBoardArray[0] === 'O' && gameBoardArray[3] === 'O' && gameBoardArray[6] === 'O') {
            return 'Player O wins';
        } else if (gameBoardArray[0] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[8] === 'O') {
            return 'Player O wins';
        } else if (gameBoardArray[1] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[7] === 'O') {
            return 'Player O wins';
        } else if (gameBoardArray[2] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[6] === 'O') {
            return 'Player O wins';
        } else if (gameBoardArray[2] === 'O' && gameBoardArray[5] === 'O' && gameBoardArray[8] === 'O') {
            return 'Player O wins';
        } else if (gameBoardArray[3] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[5] === 'O') {
            return 'Player O wins';
        }
    }

    return { gameBoardArray, win }
})()


//module for dom methods & functions
const displayController = (() => {
    const box = document.querySelectorAll('.box');
    const playerTurn = document.querySelector('.playerTurn');
    const player1 = Player('X');
    const player2 = Player('O');
    let count = 1; //odd = player1's turn, even = player2's turn


    addEventListener();
    function addEventListener() {
        Array.from(box).forEach(box => {
            box.addEventListener('click', addMarker);
        })
    }
    function removeEventListener() {
        Array.from(box).forEach(box => {
            box.removeEventListener('click', addMarker);
        })
    }
    //adds marker to gameBoard and updates count
    function addMarker() {
        const index = this.closest('.box').getAttribute('data-count');
        if (count % 2 !== 0) {
            this.closest('.box').textContent = player1.marker;
            this.closest('.box').removeEventListener('click', addMarker);
            gameBoard.gameBoardArray[index] = player1.marker;
            playerTurn.textContent = "Player O's turn.";
            ++count;
            if (typeof gameBoard.win() !== 'undefined') {
                playerTurn.textContent = gameBoard.win();
                removeEventListener();
            } else if (count >= 10) {
                playerTurn.textContent = "It's a tie";
            }
        } else if (count % 2 === 0) {
            this.closest('.box').textContent = player2.marker;
            this.closest('.box').removeEventListener('click', addMarker);
            gameBoard.gameBoardArray[index] = player2.marker;
            playerTurn.textContent = "Player X's turn.";
            ++count;
            if (typeof gameBoard.win() !== 'undefined') {
                playerTurn.textContent = gameBoard.win();
                removeEventListener();
            } else if (count >= 10) {
                playerTurn.textContent = "It's a tie";
            }
        }
    }
})()
