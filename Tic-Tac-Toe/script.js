//logic
//start with blank tic tac toe board
//display current turn x or o
//onclick of grid run function and set the innerHtml to current turn
//unless grid space is empty don't put down x or o
//announce winner if three consecutive or diagnal grid have the same exact innerHTML
//highlight the winning row column or diagonal
//if no winner announce tie
//reset button to reload the page


const players = ["X", "O"];
const current = Math.floor(Math.random() * players.length);

window.onload = function play() {
    document.getElementById('current').innerHTML = "Current Turn: " + players[current];
    console.log(players[current]);
}

function ttt(clicked_id){
    // alert(clicked_id);
    if (document.getElementById(clicked_id).innerHTML === ''){
        document.getElementById(clicked_id).innerHTML = players[current];
    } else {
        return
    }
    if (players[current] === "O"){
        players[current] = 'X';
        document.getElementById('current').innerHTML = "Current Turn: " + players[current];
    } else {
        players[current] = 'O';
        document.getElementById('current').innerHTML = "Current Turn: " + players[current];
    }

    let one = document.getElementById("1").innerHTML;
    let two = document.getElementById("2").innerHTML;
    let three = document.getElementById("3").innerHTML;
    let four = document.getElementById("4").innerHTML;
    let five = document.getElementById("5").innerHTML;
    let six = document.getElementById("6").innerHTML;
    let seven = document.getElementById("7").innerHTML;
    let eight = document.getElementById("8").innerHTML;
    let nine = document.getElementById("9").innerHTML;

    if (one !== "" || two !== "" || three !== "" || four !== "" || five !== "" || six !== "" || seven !== "" || eight !== "" || nine !== ""){
        if (one === two && three === one){
            document.getElementById("winner").innerHTML = "The winner is: " + one;
       } else if (one === four && four === seven){
            document.getElementById("winner").innerHTML = "The winner is: " + one;
       } else if (one === five && one === nine){
            document.getElementById("winner").innerHTML = "The winner is: " + one;
       } else if (four === five && five === six){
            document.getElementById("winner").innerHTML = "The winner is: " + five;
       } else if (seven === eight && eight === nine){
            document.getElementById("winner").innerHTML = "The winner is: " + eight;
       } else if (two === five && five === eight){
            document.getElementById("winner").innerHTML = "The winner is: " + five;
       } else if (three === six && six === nine){
            document.getElementById("winner").innerHTML = "The winner is: " + three;
       } else if (three === five && three === seven){
            document.getElementById("winner").innerHTML = "The winner is: " + three;
       } else if (one !== "" && two !== "" && three !== "" && four !== "" && five !== "" && seven !== ""&& six !== "" && eight !== "" && nine !== "") {
           document.getElementById("winner").innerHTML = "The winner is: Tie"
       } else {
           return;
       }
    } 
}
