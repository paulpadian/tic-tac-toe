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

}

function checkHori() {
  
    window.gameMatrix.forEach(row => {
        let count = 0;
    
        row.forEach(block => {
            if (block === "x") {
                count++
            }
            if (count === 3) {
                window.winner = "x"
                return displayWinner()
            }
        })
    });

};


function checkDiag() {
    //     let count = 0;

}
function checkBoard(){
    return checkHori();

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
    window.gameMatrix[position[0]][position[1]] = "x"
    console.log(window.gameMatrix)
    return checkForWinner();
}

document.querySelectorAll('.block').forEach(element => {
    element.addEventListener('click', () => updateBoard(element.id));
})


