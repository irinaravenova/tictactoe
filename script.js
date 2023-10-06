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
    
    let cellsArray = ["", "", "", "", "", "", "", "", ""];


    // Create current player variable
    let currentPlayer;

    let form = document.getElementById("myForm");
    let players = document.querySelector(".players");
    let announcement = document.querySelector('.announce');


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

                if (typeof playersArray === 'undefined') {
                    alert('Please enter player names')
                    location.reload();
                }

                // Populate cell with player choice on click
                if ( currentPlayer == playersArray[0] ) {
                    e.target.innerHTML = "X";
                    let val = cell.id;
                    cellsArray[val-1] = "X";
                    console.log(cellsArray)
                }
                else if ( currentPlayer == playersArray[1] ) {
                    e.target.innerHTML = "O";
                    let val = cell.id;
                    cellsArray[val-1] = "O";
                    console.log(cellsArray)
                }

                // Switch players on click of cell
                ( currentPlayer == playersArray[0] ) ? 
                ( currentPlayer = playersArray[1] ) : 
                ( currentPlayer = playersArray[0] );

                console.log(currentPlayer);
                checkWinner();
                // displayController.checkWinner();
                return currentPlayer;
            }, {once : true})
        })
    }

    const checkWinner = () => {
        // Check array winning conditions
        // let cellsArray = ["", "", "", "", "", "", "", "", ""];

        if (cellsArray[0] == 'X' && cellsArray[1] == 'X' && cellsArray[2] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }
        if (cellsArray[0] == 'X' && cellsArray[3] == 'X' && cellsArray[6] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }
        if (cellsArray[0] == 'X' && cellsArray[4] == 'X' && cellsArray[8] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }
        if (cellsArray[2] == 'X' && cellsArray[5] == 'X' && cellsArray[8] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }
        if (cellsArray[1] == 'X' && cellsArray[4] == 'X' && cellsArray[7] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }
        if (cellsArray[2] == 'X' && cellsArray[4] == 'X' && cellsArray[6] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }
        if (cellsArray[3] == 'X' && cellsArray[4] == 'X' && cellsArray[5] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }
        if (cellsArray[6] == 'X' && cellsArray[7] == 'X' && cellsArray[8] == 'X') {
            players.innerHTML = `${playersArray[0]} wins!`;
        }

        //

        if (cellsArray[0] == 'O' && cellsArray[1] == 'O' && cellsArray[2] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }
        if (cellsArray[0] == 'O' && cellsArray[3] == 'O' && cellsArray[6] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }
        if (cellsArray[0] == 'O' && cellsArray[4] == 'O' && cellsArray[8] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }
        if (cellsArray[2] == 'O' && cellsArray[5] == 'O' && cellsArray[8] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }
        if (cellsArray[1] == 'O' && cellsArray[4] == 'O' && cellsArray[7] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }
        if (cellsArray[2] == 'O' && cellsArray[4] == 'O' && cellsArray[6] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }
        if (cellsArray[3] == 'O' && cellsArray[4] == 'O' && cellsArray[5] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }
        if (cellsArray[6] == 'O' && cellsArray[7] == 'O' && cellsArray[8] == 'O') {
            players.innerHTML = `${playersArray[1]} wins!`;
        }



    };

    return { listenForPlayers, switchPlayers, checkWinner };

})();


// const displayController = (() => {  
//     // Object to control flow of game
//     // let updatedGameboard = [["", "", ""], ["", "",""], ["", "", ""]]; 
//     // Function comparing cell contents to check for winner
//     const checkWinner = () => {
//         let cell = document.querySelectorAll(".cell");
//         cell.forEach((cell) => {
//             console.log(cell.id)
//         })
//     }
//     return { checkWinner };
// })();




gameBoard.getBoard();
Player.listenForPlayers();
Player.switchPlayers();
// displayController.checkWinner();



