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

// Create player factory function (returns an object to use in our code)
// Will encapsulate all the things our players can do (functions)

const Player = (() => {

    let form = document.getElementById("myForm");
    let listPlayers = document.getElementById("listPlayers");
    let listButton = document.querySelector("players");

    // Get player names from form input
    const listenForPlayers = () => {    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let player1 = document.getElementById("nameA").value;
            let player2 = document.getElementById("nameB").value;
            result = [ player1, player2 ];
            console.log(result);

            for (player in result) {
                let players = document.createElement("p");
                players.innerHTML = `${result[player]}`;
                listPlayers.appendChild(players);
            }

            return result;
        });
    }



    return { listenForPlayers };

})();


const displayController = (() => {  
    // object to control flow of game

    // Add cell click event listeners
    // each click, po




})();



Player.listenForPlayers();
gameBoard.getBoard();





