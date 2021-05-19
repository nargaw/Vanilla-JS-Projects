//construct a dynamic 6 x 7
//assign 0 for unoccupied
//user clicks button to send player1 piece or player 2 piece
//piece will go to the bottom a column first empty space from bottom
//once occupied array is updated to 1 for player 1 and 2 for player 2
//if four occupied pieces of 1 or 2 match in a row - announce winner
//iterate through each column and if the column spot of each row has consecutive 1 or 2 - announce winner
//diagonal iterate through diagnoal piece to see if there is a consevutive four of 1 or 2 - announce winner
//once winner is announced - button to reload page 

var array = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];

const players = [1, 2];
const current = Math.floor(Math.random() * players.length);
console.log(players[current]);

// window.onload = function play() {
//     if (players[current] === 1){
//         document.getElementById('p1').classList.toggle('p1on');
//     } else {
//         document.getElementById('p2').classList.toggle('p2on');
//     } return;
// }

function game(clicked_id){
    let column = document.getElementById(clicked_id).id;
    console.log(column);
    for (let i=0; i<=5; i++){
        if (array[5][column-1] === 0) {
            if (players[current] === 1){
                console.log('zero1');
                array[5][column-1] = 1;
                document.getElementById('r'+6+'c'+column).classList.replace('space', 'one');
                console.log(array);
                players[current] = 2;
                document.getElementById('p2').classList.add('p2on');
                document.getElementById('p1').classList.remove('p1on');
                return;
            } else {
                console.log('zero2');
                array[5][column-1] = 2;
                document.getElementById('r'+6+'c'+column).classList.replace('space', 'two');
                console.log(array);
                players[current] = 1;
                document.getElementById('p2').classList.remove('p2on');
                document.getElementById('p1').classList.add('p1on');
                return;
                }
        } else if (array[i][column-1] === 1 || (array[i][column-1] === 2)){
            if(players[current] === 1){
                console.log('one');
                array[i-1][column-1] = 1;
                document.getElementById('r'+(i)+'c'+column).classList.replace('space', 'one');
                console.log(array);
                players[current] = 2;
                document.getElementById('p2').classList.add('p2on');
                document.getElementById('p1').classList.remove('p1on');
                return;
            } else {
                console.log('two');
                array[i-1][column-1] = 2;
                document.getElementById('r'+(i)+'c'+column).classList.replace('space', 'two');
                console.log(array);
                players[current] = 1;
                document.getElementById('p2').classList.remove('p2on');
                document.getElementById('p1').classList.add('p1on');
                return;
            }
        }
    }
}
