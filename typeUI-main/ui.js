let arr = [];

function typeWriter(){
    var a = " " + document.getElementById("input").value;
    console.log(a.length)
    console.log(a);
    console.log(a.charAt(2));
    for(let i=0; i<=a.length-1; i++){
        document.getElementById("demo").innerHTML += a.charAt(i);
    }
    console.log(arr);
    document.getElementById("input").value="";
}

function changeClass(){
    var y = document.querySelector("#power").classList.toggle('powerOn');
    document.querySelector("#display").classList.toggle('displayOn');
    document.querySelector("#demo").classList.toggle('textOn');
    document.querySelector("#input").classList.toggle('inputOff');
    document.querySelector("#input").classList.toggle('inputOn');
    document.querySelector("#submit").classList.toggle('submitOn');
    var z = document.querySelector("#square").classList.toggle('squareOn');
    var class_added = document.querySelector("#rangle").classList.toggle('right-angleOn');
    if (class_added == true){
        console.log('class added')
    } else {
        arr=[];
        console.log('class removed')
    }
    if (y == false){
        document.getElementById("demo").innerHTML = "";
    } else {
        return true;
    }
}


