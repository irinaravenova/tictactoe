const gameBoard = (() => {       

    // gameBoard object - use module
    // store gameboard as an array inside of Gameboard object

    const gameboard = [["", "", ""], ["", "",""], ["", "", ""]]; 

    const getBoard = () => {

    let board = document.querySelector('.gameboard');

        let numOfCells = 1;
        let cellCount = 0;
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let cell = document.createElement("button");
                cell.className = "cell";
                cell.id = `${numOfCells}`;
                cell.innerHTML = `${gameboard[i][j]}`;
                board.appendChild(cell);
    
                cellCount++;
                numOfCells++;
            }
            if ((cellCount) = 3) {
                board.appendChild(document.createElement("br"))
            }
        }
    }

    return { getBoard };
    
})();


const displayController = (() => {  
    // object to control flow of game




})();

// Create player factory function (returns an object to use in our code)
// Will encapsulate all the things our players can do (functions)

const Player = (() => {

    let currentPlayer;

    const getPlayer = () => {
        let player1 = document.getElementById("name").value;
        console.log(player1);
        return player1;
    }

    return { getPlayer };

})();


gameBoard.getBoard();

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
   console.log(Player.getPlayer());
});


