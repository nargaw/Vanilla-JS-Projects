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

window.onload = function play() {
     if (players[current] === 1){
         document.getElementById('p1').classList.toggle('p1on');
     } else {
         document.getElementById('p2').classList.toggle('p2on');
     } return;
}
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
function checkWinner(clicked_id){
    //console.log(array.length);
    var str = [];
    var str1 = []; 
    var str2 = [];
    var str3 = [];
    var str4 = [];
    var str5 = [];
    var str6 = [];
    var c = [];
    let column = document.getElementById(clicked_id).id;
    for (let x = 0; x <= array.length -1; x++){
        c.push(array[x][column-1]).toString();
        for (let y = 0; y <= array[x].length-1; y++){
            str.push(array[x][y]);
        }
    }
    
    for (let i = 0; i<=6; i++){
        str1.push(str[0 + i]).toString();
        str2.push(str[7 + i]).toString();
        str3.push(str[14 + i]).toString();
        str4.push(str[21 + i]).toString();
        str5.push(str[28 + i]).toString();
        str6.push(str[35 + i]).toString();
    }
    let s6 = '';
    s6 = str6.join('');
    console.log(s6);
    let s5 = '';
    s5 = str5.join('');
    let s4 = '';
    s4 = str4.join('');
    let s3 = '';
    s3 = str3.join('');
    let s2 = '';
    s2 = str2.join('');
    let s1 = '';
    s1 = str1.join('');
    if (s6.match(/1111/g)||s5.match(/1111/g)||s4.match(/1111/g)||s3.match(/1111/g)||s2.match(/1111/g)||s1.match(/1111/g)){
        console.log('winner is player one');
        document.getElementById('w1').innerHTML = "Player 1 - Winner";
    } else if (s6.match(/2222/g)||s5.match(/2222/g)||s4.match(/2222/g)||s3.match(/2222/g)||s2.match(/2222/g)||s1.match(/2222/g)){
        console.log('winner is player two');
        document.getElementById('w2').innerHTML = "Player 2 - Winner";
    }

    let cStr = '';
    cStr = c.join('');
    console.log(cStr);
    if (cStr.match(/1111/g)){
        console.log('winner is player 1 ');
        document.getElementById('w1').innerHTML = "Player 1 - Winner";
    } else if (cStr.match(/2222/g)){
        console.log('winner is player 2');
        document.getElementById('w2').innerHTML = "Player 2 - Winner";
    } else {
        return;
    }
}
