function randColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    document.body.style.backgroundColor = color;
    document.getElementById("display").innerHTML = "Current Color: " + color;
    document.getElementById("display").style.color = color;
    document.getElementById("btn").style.color = color;
}
