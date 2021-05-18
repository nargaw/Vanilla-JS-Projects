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

window.onload = function play() {
    console.log(players[current]);
    if (players[current] === 1){
        document.getElementById('p1').classList.toggle('p1on');
    } else {
        document.getElementById('p2').classList.toggle('p2on');
    }
}

function game(clicked_id){
    let column = document.getElementById(clicked_id).id;
    //console.log(array[4][column-1]);
    //console.log(array);
    for (let i = 0; i<= 5; i++){
        if (array[i][column-1] === 1 || array[i][column-1] === 2){
            //console.log(array[i-1][column-1])
            //console.log(i);
            //console.log(column);
            console.log(document.getElementById('r'+i+'c'+column).id);
            
            console.log(array);
            if (players[current] === 1){
                array[i-1][column-1] = players[current];
                document.getElementById('r'+i+'c'+column).classList.replace('space', 'one');
                
                console.log(players[current]);
                players[current] = 2;
                document.getElementById('p2').classList.toggle('p2on');
                break;
            } else {
                array[i-1][column-1] = players[current];
                document.getElementById('r'+i+'c'+column).classList.replace('space', 'two');
                console.log(players[current]);
                players[current] = 1;
                document.getElementById('p1').classList.toggle('p1on');
                break;
            }
        } else {
            if (players[current] === 1){
                array[5][column-1] = players[current];
                document.getElementById('r'+6+'c'+column).classList.replace('space', 'one');
                document.getElementById('p1').classList.toggle('p1on');
                console.log(players[current]);
                players[current] = 2;
            } else {
                array[5][column-1] = players[current];
                document.getElementById('r'+6+'c'+column).classList.replace('space', 'two');
                document.getElementById('p2').classList.toggle('p2on');
                console.log(players[current]);
                players[current] = 1;
            }
        } 
    }  
}
