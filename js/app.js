//global var establish for game board
window.gameMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
//global var for player needed

window.player = "x";


//checkers for win no loss possible on move

function checkVert() {

    window.gameMatrix.forEach(row => {
        let count = 0;

        row.forEach(block => {
            if (block === "x") {
                countX++
            }
            if (countX === 3) {
                return checkForWinner(x)
            }
            if (countY === 3) {
                return checkForWinner(y)
            }
        })
    });
}

function checkHori() {
    let count = 0;

};


function checkDiag() {
    //     let count = 0;

}
function displayWinner() {

}

//board checker to init follow fn, log winner, send to message
function checkForWin(player) {
    // const winner = false;
    // //if winner 
    // if winner

}

function updateBoard(position) {
    position = JSON.parse(position);
    console.log(window.gameMatrix[position[0]][position[1]], 'here')
    window.gameMatrix[position[0]][position[1]] = "x"
    console.log(window.gameMatrix)
}

document.querySelectorAll('.block').forEach(element => {
    element.addEventListener('click', () => updateBoard(element.id));
})


