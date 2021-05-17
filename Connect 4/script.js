//construct a dynamic 6 x 7
//assign 0 for unoccupied
//user clicks button to send player1 piece or player 2 piece
//piece will go to the bottom a column first empty space from bottom
//once occupied array is updated to 1 for player 1 and 2 for player 2
//if four occupied pieces of 1 or 2 match in a row - announce winner
//iterate through each column and if the column spot of each row has consecutive 1 or 2 - announce winner
//diagonal iterate through diagnoal piece to see if there is a consevutive four of 1 or 2 - announce winner
//once winner is announced - button to reload page 

const array = [
    [0, 0, 0, 1, 0, 0, 1],
    [0, 44, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

const players = [1, 2];
const current = Math.floor(Math.random() * players.length);

window.onload = function play() {
    console.log(players[current]);
    if (players[current] == 1){
        document.getElementById('p1').classList.toggle('p1on');
    } else {
        document.getElementById('p2').classList.toggle('p2on');
    }
}

function game(clicked_id){
    console.log(document.getElementById(clicked_id).id);
    let column = document.getElementById(clicked_id).id;
    console.log(column);
    for (let i = 0; i<= 5; i++){
        if (array[i][column-1] !== 0){
            console.log(array[i][column-1])
            break
        } else {
            console.log('all zeros')
        }
    }
}
