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

function game(clicked_id) {
    while ((document.getElementById('w1').innerHTML !== "Player 1 - Winner") && (document.getElementById('w2').innerHTML !== "Player 2 - Winner")) {
        let column = document.getElementById(clicked_id).id;
        //console.log(column);

        for (let i = 0; i <= 5; i++) {
            if (array[5][column - 1] === 0) {
                if (players[current] === 1) {
                    //console.log('zero1');
                    array[5][column - 1] = 1;
                    document.getElementById('r' + 6 + 'c' + column).classList.replace('space', 'one');
                    //console.log(array);
                    players[current] = 2;
                    document.getElementById('p2').classList.add('p2on');
                    document.getElementById('p1').classList.remove('p1on');
                    return;
                } else {
                    //console.log('zero2');
                    array[5][column - 1] = 2;
                    document.getElementById('r' + 6 + 'c' + column).classList.replace('space', 'two');
                    //console.log(array);
                    players[current] = 1;
                    document.getElementById('p2').classList.remove('p2on');
                    document.getElementById('p1').classList.add('p1on');
                    return;
                }
            } else if (array[i][column - 1] === 1 || (array[i][column - 1] === 2)) {
                if (players[current] === 1) {
                    //console.log('one');
                    array[i - 1][column - 1] = 1;
                    document.getElementById('r' + (i) + 'c' + column).classList.replace('space', 'one');
                    //console.log(array);
                    players[current] = 2;
                    document.getElementById('p2').classList.add('p2on');
                    document.getElementById('p1').classList.remove('p1on');
                    return;
                } else {
                    //console.log('two');
                    array[i - 1][column - 1] = 2;
                    document.getElementById('r' + (i) + 'c' + column).classList.replace('space', 'two');
                    //console.log(array);
                    players[current] = 1;
                    document.getElementById('p2').classList.remove('p2on');
                    document.getElementById('p1').classList.add('p1on');
                    return;
                }
            }
        }
    }
}

function checkWinner(clicked_id) {
    //check horizontal winner
    var str = [];
    var str1 = [];
    var str2 = [];
    var str3 = [];
    var str4 = [];
    var str5 = [];
    var str6 = [];
    var c = [];
    let column = document.getElementById(clicked_id).id;
    for (let x = 0; x <= array.length - 1; x++) {
        c.push(array[x][column - 1]).toString();
        for (let y = 0; y <= array[x].length - 1; y++) {
            str.push(array[x][y]);
        }
    }

    str1 = str.slice(0, 7).join('');
    str2 = str.slice(7, 14).join('');
    str3 = str.slice(14, 21).join('');
    str4 = str.slice(21, 28).join('');
    str5 = str.slice(28, 35).join('');
    str6 = str.slice(35, 42).join('');

    if (str6.match(/1111/g) || str5.match(/1111/g) || str4.match(/1111/g) || str3.match(/1111/g) || str2.match(/1111/g) || str1.match(/1111/g)) {
        console.log('winner is player one');
        return;
    } else if (str6.match(/2222/g) || str5.match(/2222/g) || str4.match(/2222/g) || str3.match(/2222/g) || str2.match(/2222/g) || str1.match(/2222/g)) {
        console.log('winner is player two');
        document.getElementById('w2').innerHTML = "Player 2 - Winner";
        return;
    }

    //check diagonal winner
    var yLen = array.length;
    var xLen = array[0].length;
    var maxLen = Math.max(xLen, yLen);
    var temp = [];
    var temp2 = [];

    for (var a = 0; a <= (2 * (maxLen - 1)); a++) {

        for (var y = yLen - 1; y >= 0; y--) {
            var x = a - y;
            if (x >= 0 && x < xLen) {
                temp.push(array[y][x]);
            }
            var z = a - (yLen - y - 1);
            if (z >= 0 && z < xLen) {
                temp2.push(array[y][z])
            }
        }
    }

    //diagonal top left to bottom right: temp1
    var diag1 = [];
    var diag2 = [];
    var diag3 = [];
    var diag4 = [];
    var diag5 = [];
    var diag6 = [];
    var dop1 = [];
    var dop2 = [];
    var dop3 = [];
    var dop4 = [];
    var dop5 = [];
    var dop6 = [];

    diag1 = temp.slice(6, 10).join('');
    diag2 = temp.slice(10, 15).join('');
    diag3 = temp.slice(15, 21).join('');
    diag4 = temp.slice(21, 27).join('');
    diag5 = temp.slice(27, 32).join('');
    diag6 = temp.slice(32, 36).join('');
    dop1 = temp2.slice(6, 10).join('');
    dop2 = temp2.slice(10, 15).join('');
    dop3 = temp2.slice(15, 21).join('');
    dop4 = temp2.slice(21, 27).join('');
    dop5 = temp2.slice(27, 32).join('');
    dop6 = temp2.slice(32, 36).join('');

    if (diag1.match(/1111/g) || diag2.match(/1111/g) || diag3.match(/1111/g) || diag4.match(/1111/g) || diag5.match(/1111/g) || diag6.match(/1111/g)) {
        console.log('winner is player one');
        document.getElementById('w1').innerHTML = "Player 1 - Winner";
        return;
    } else if (diag1.match(/2222/g) || diag2.match(/2222/g) || diag3.match(/2222/g) || diag4.match(/2222/g) || diag5.match(/2222/g) || diag6.match(/2222/g)) {
        console.log('winner is player two');
        document.getElementById('w2').innerHTML = "Player 2 - Winner";
        return;
    }

    if (dop1.match(/1111/g) || dop2.match(/1111/g) || dop3.match(/1111/g) || dop4.match(/1111/g) || dop5.match(/1111/g) || dop6.match(/1111/g)) {
        console.log('winner is player one');
        document.getElementById('w1').innerHTML = "Player 1 - Winner";
        return;
    } else if (dop1.match(/2222/g) || dop2.match(/2222/g) || dop3.match(/2222/g) || dop4.match(/2222/g) || dop5.match(/2222/g) || dop6.match(/2222/g)) {
        console.log('winner is player two');
        document.getElementById('w2').innerHTML = "Player 2 - Winner";
        return;
    }

    //check vertical winner
    let cStr = '';
    cStr = c.join('');
    //console.log(cStr);
    if (cStr.match(/1111/g)) {
        console.log('winner is player 1 ');
        document.getElementById('w1').innerHTML = "Player 1 - Winner";
        return;
    } else if (cStr.match(/2222/g)) {
        console.log('winner is player 2');
        document.getElementById('w2').innerHTML = "Player 2 - Winner";
        return;
    } else {
        return;
    }
}

