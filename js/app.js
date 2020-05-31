//global var establish for game board
window.gameMatrix = [
    [null, null, null]
    [null, null, null]
    [null, null, null]
]; 
//global var for player needed

//checkers for win no loss possible on move

function checkVert(e){
    window.gameMatrix.forEach(element => console.log(element));
}

function checkHori(){

}


funtion checkDiag(){

}

//board checker to init follow fn, log winner, send to message
function checkForWin(player) {
    const winner = false; 

    if winner
}

function updateBoard() {
    const currentPlayer = 

}

document.querySelectorAll('.game').forEach(element => {
    element.addEventListener('click', updateBoard(element.value));
})


