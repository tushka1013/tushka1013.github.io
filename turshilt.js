const board_el = document.querySelector('#board');
const cell_els = document.querySelectorAll('#board .cell');
const combinations = [
    [0,1,2,3] ,
    [5,6,7,8] ,
    [10,11,12,13] ,
    [15,16,17,18] ,
    [20,21,22,23] ,
    [1,2,3,4] ,
    [6,7,8,9] ,
    [10,11,12,13] ,
    [14,15,16,17] ,
    [18,19,20,21] ,
    [0,5,10,15] ,
    [1,6,11,16] ,
    [2,7,12,17] ,
    [3,8,13,18] ,
    [4,9,14,19] ,
    [5,10,15,20] ,
    [6,11,16,21] ,
    [7,12,17,22] ,
    [8,13,18,23] ,
    [9,14,19,24] ,
    [0,6,12,18] ,
    [6,12,18,24] ,
    [4,8,12,16] ,
    [8,12,16,20] ,
    [5,11,17,23] ,
    [1,7,13,19]

];
let currentTurn;

setup();


function setup() {
    board_el.classList.remove('turn-x' , 'turn-o');
   
    for(let cell of cell_els) {
        cell.classList.remove('x' ,'o' );
        cell.addEventListener('click', fillCell , {once: true});
    }
    currentTurn = Math.round(Math.random(0 , 1)) == 1 ? 'x' : 'o';
    board_el.classList.remove('turn-x' , 'turn-o');
    board_el.classList.add('turn-' + currentTurn);
   
}
function fillCell() {
    this.classList.add(currentTurn);

    if(checkForWin()){
        const restart = confirm(currentTurn.toUpperCase() + " is the WINNER! Restart?")

        if(restart) setup();

    }else if(checkForDraw()){
        const restart = confirm("It's a draw! Restart?");

        if(restart) setup();
    }else{
        currentTurn = currentTurn == 'x' ? 'o' : 'x';
        board_el.classList.remove('turn-x' , 'turn-o');
        board_el.classList.add('turn-' + currentTurn);
    }
}
     

function checkForWin(){
    return combinations.some(combinations => {
        return combinations.every(c => {
            if(cell_els[c].classList.contains(currentTurn)){
                return true;
            }

            return false;
        });
    });
}

function checkForDraw() {
    return[...cell_els].every(c => {
        if(
        c.classList.contains('x') ||
        c.classList.contains('o')
        ) {
            return true;
        }
        return false;
    });
}

