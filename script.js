const gameBoard = (() => {       

    // gameBoard object - use module
    // store gameboard as an array inside of Gameboard object

    const getBoard = () => {

    let gameboard = [["", "", ""], ["", "",""], ["", "", ""]]; 

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
    
    // Create current player variable
    let currentPlayer;

    let form = document.getElementById("myForm");
    let players = document.querySelector(".players");

    // Get player names from form input 
    const listenForPlayers = () => {    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let buttonEl = e.target.children.submit;
            buttonEl.innerHTML = "Reset Game"
            let player1 = document.getElementById("nameA").value;
            let player2 = document.getElementById("nameB").value;
            playersArray = [ player1, player2 ];

            currentPlayer = player1;
            console.log(playersArray);
            console.log(currentPlayer);

            // List player names on screen
            for (player in playersArray) {
                let newPlayers = document.createElement("p");
                newPlayers.innerHTML = `${playersArray[player]}`;
                players.appendChild(newPlayers);
            }

            return playersArray;

        }, {once : true} );
    }

    // Switch between players
    const switchPlayers = () => {

        let cell = document.querySelectorAll(".cell");

        cell.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                e.preventDefault();

                // Populate cell with player choice on click
                if ( currentPlayer == playersArray[0] ) {
                    e.target.innerHTML = "X";
                }
                else if ( currentPlayer == playersArray[1] ) {
                    e.target.innerHTML = "O";
                }

                // Switch players on click of cell
                ( currentPlayer == playersArray[0] ) ? 
                ( currentPlayer = playersArray[1] ) : 
                ( currentPlayer = playersArray[0] );

                console.log(currentPlayer);
                displayController.checkWinner();
                return currentPlayer;
            })
        })


    }

    return { listenForPlayers, switchPlayers };

})();


const displayController = (() => {  
    // Object to control flow of game

    // let updatedGameboard = [["", "", ""], ["", "",""], ["", "", ""]]; 

    // Function comparing cell contents to check for winner
    const checkWinner = () => {
        let cell = document.querySelectorAll(".cell");

        cell.forEach((cell) => {
            console.log(cell.id)
        })
     
    }


    return { checkWinner };

})();




gameBoard.getBoard();
Player.listenForPlayers();
Player.switchPlayers();
displayController.checkWinner();



