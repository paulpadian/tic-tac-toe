//global var establish for game board
window.gameMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
//global var for player needed

window.player = "x";
window.winner= undefined;


//checkers for win no loss possible on move

function checkVert() {
    
    window.gameMatrix[0].forEach((col, index) => {
        if (col === window.player) {
            if(window.gameMatrix[1][index] === window.player && window.gameMatrix[2][index] === window.player) {
            window.winner = "x"
            displayWinner();                
            }
        }
    });

};

function checkHori() {
  
    window.gameMatrix.forEach(row => {
        let count = 0;
    
        row.forEach(block => {
            if (block === window.player) {
                count++
            }
            if (count === 3) {
                window.winner = "x"
                displayWinner()
            }
        })
    });

};


function checkDiag() {
    
}

function checkBoard(){
    if(winner) {
        return displayWinner();
    }
    if(!window.winner) {
        checkHori();
    } 
    if(!window.winner) {
        checkVert();
    }

}

function displayWinner() {
    console.log(`${window.winner} has won the game`)

}

//board checker to init follow fn, log winner, send to message
function checkForWinner() {
    return checkBoard();
}

function updateBoard(position) {
    position = JSON.parse(position);
    window.gameMatrix[position[0]][position[1]] = window.player;
    console.log(window.gameMatrix)
    checkForWinner();
    if(window.player === "x") {
        window.player = "y"
    } else [
        window.player = "x"
    ]

}

document.querySelectorAll('.block').forEach(element => {
    element.addEventListener('click', () => updateBoard(element.id));
})


