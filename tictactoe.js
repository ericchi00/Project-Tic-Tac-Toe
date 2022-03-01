const Player = (marker) => {
    return { marker };
};


//gameBoard logic 
const gameBoard = (() => {
    const gameBoardArray = ["","","","","","","","",""];
    const box = document.querySelectorAll('.box');



    render();

    function render() {
        gameBoardArray.forEach((div, i) => {
            box[i].textContent = gameBoardArray[i];
        });
    }
    return { gameBoardArray }
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



    function addMarker() {
        const index = this.closest('.box').getAttribute('data-count');
        if (count % 2 !== 0) {
            this.closest('.box').textContent = player1.marker;
            playerTurn.textContent = "Player O's turn.";
            gameBoard.gameBoardArray[index] = player1.marker;
            ++count;
            this.closest('.box').removeEventListener('click', addMarker);
        } else if (count % 2 === 0) {
            this.closest('.box').textContent = player2.marker;
            playerTurn.textContent = "Player X's turn.";
            gameBoard.gameBoardArray[index] = player2.marker;
            ++count;
            this.closest('.box').removeEventListener('click', addMarker);
        }





        // for (i = 0; i <= gameBoard.gameBoardArray.length; i++) {
        //     if (gameBoard.gameBoardArray[i - 1] === player1.marker) {
        //         this.closest('.box') = player2.marker;
        //         playerTurn.textContent = "Player X's turn";
        //         gameBoard.gameBoardArray[player2.marker];
        //     }
        //     if (gameBoardArray[i-1] === player2.marker) {
        //         this.box.textContent = player1.marker;
        //         playerTurn.textContent = "Player O's turn";
        //     }
        // }
    }


})()
