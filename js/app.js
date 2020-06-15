//global var establish for game board
window.gameMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
//global var for player needed

window.player = "x";
window.winner = undefined;

//checkers for win no loss possible on move click

function checkVert() {

    window.gameMatrix[0].forEach((col, index) => {
        if (col === window.player) {
            if (window.gameMatrix[1][index] === window.player && window.gameMatrix[2][index] === window.player) {
                window.winner = window.player
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
                window.winner = window.player
                displayWinner()
            }
        })
    });

};


function checkDiag() {
    if (window.gameMatrix[0][0] === window.player && window.gameMatrix[1][1] === window.player && window.gameMatrix[2][2] === window.player) {
        window.winner = window.player
        displayWinner();
    }
    if (window.gameMatrix[0][2] === window.player && window.gameMatrix[1][1] === window.player && window.gameMatrix[2][0] === window.player) {
        window.winner = window.player
        displayWinner();
    }
};

//math random for board location computer move

function checkBoard() {
    if (!window.winner) {
        checkHori();
    }
    if (!window.winner) {
        checkVert();
    }
    if (!window.winner) {
        checkDiag();
    }    
}

//conditional if statement for draw, x000xxxx0 xx000xx0x xx000xxx0 only conditions
let count = 0; 
function displayDraw(position) {
    count++
    if(count === 8) {
        document.getElementById("display").innerText = `It's a Tie!`
        document.querySelectorAll(".block").forEach(element => {
            element.style.pointerEvents = "none";
        });
    }
}
    


function displayWinner() {
    document.querySelectorAll(".block").forEach(element => {
        element.style.pointerEvents = "none";
    });
    console.log(`${window.winner} has won the game`)
    document.getElementById("display").innerText = `${window.player} has won the game!`    
}


//board checker to init follow fn, log winner, send to message
function displayPlayer() {
    document.getElementById("playerID").innerText = `${window.player}'s move`
}

function updateBoard(position) {
    document.getElementById(position).innerText = window.player

    position = JSON.parse(position);
    window.gameMatrix[position[0]][position[1]] = window.player;
    console.log(window.gameMatrix)
    checkBoard();
    displayDraw(position);
    //kind of want to break switcher into fn
    if (window.player === "x") {
        window.player = "o"
    } else {
        window.player = "x"
    }
    displayPlayer();

}

document.querySelectorAll('.block').forEach(element => {
    element.addEventListener('click', () => {
        if (!element.innerText) {
            updateBoard(element.id)
        }
    });
})










