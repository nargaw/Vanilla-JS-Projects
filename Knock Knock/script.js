const json = `
    {
    "jokes": [
        {
            "id" : 1,
            "setup":"Owls say",
            "finish":"Yes, they do."
        },
        {
            "id" : 2,
            "setup":"To",
            "finish":"No, it’s to whom!"
        },
        {
            "id" : 3,
            "setup":"Kenya",
            "finish":"Kenya feel the love tonight?"
        },
        {
            "id" : 4,
            "setup":"Tennis",
            "finish":"Tennis five plus five!"
        },
        {
            "id" : 5,
            "setup":"Hike",
            "finish":"I didn't know you liked Japanese poetry!"
        },
        {
            "id" : 6,
            "setup":"Needle",
            "finish":"Needle little help getting in the door!"
        },
        {
            "id" : 7,
            "setup":"Gladys",
            "finish":"Gladys the weekend—no homework!"
        },
        {
            "id" : 8,
            "setup":"I am",
            "finish":"You tell me!!"
        },
        {
            "id" : 9,
            "setup":"Wooden shoe",
            "finish":"Wooden shoe like to know!"
        },
        {
            "id" : 10,
            "setup":"Snow!",
            "finish":"Snow laughing matter."
        },
        {
            "id" : 11,
            "setup":"Witch",
            "finish":"Witch one of you will give me some Halloween candy?"
        },
        {
            "id" : 12,
            "setup":"Ken",
            "finish":"Ken I come in? It's cold out here."
        },
        {
            "id" : 13,
            "setup":"Radio",
            "finish":"Radio not, here I come!"
        },
        {
            "id" : 14,
            "setup":"Howl",
            "finish":"Howl you know if you don't open the door?"
        },
        {
            "id" : 15,
            "setup":"An extraterrestrial",
            "finish":"Wait–how many extraterrestrials do you know?"
        },
        {
            "id" : 16,
            "setup":"Honeybee",
            "finish":"Honeybee a dear and open the door, please."
        },
        {
            "id" : 17,
            "setup":"Stopwatch",
            "finish":"Stopwatch you're doing and pay attention!"
        },
        {
            "id" : 18,
            "setup":"Spell",
            "finish":"W-H-O"
        },
        {
            "id" : 19,
            "setup":"Beets",
            "finish":"Beets me!"
        },
        {
            "id" : 20,
            "setup":"Pecan",
            "finish":"Pecan somebody your own size!"
        },
        {
            "id" : 21,
            "setup":"Ho-ho",
            "finish":"You know, your Santa impression could use a little work."
        },
        {
            "id" : 22,
            "setup":"Hanna",
            "finish":"...Hanna partridge in a pear tree!"
        },
        {
            "id" : 23,
            "setup":"Luke",
            "finish":"Luke through the keyhole to see!"
        },
        {
            "id" : 24,
            "setup":"Justin",
            "finish":"Justin the neighborhood and thought I'd come over."
        },
        {
            "id" : 25,
            "setup":"Isabelle",
            "finish":"Isabelle working, or should I keep knocking?"
        },
        {
            "id" : 26,
            "setup":"H",
            "finish":"Bless you!"
        },
        {
            "id" : 27,
            "setup":"Says",
            "finish":"Says me, that’s who!"
        },
        {
            "id" : 28,
            "setup":"Figs",
            "finish":"Figs the doorbell!"
        }
    ]
}
`;




// fetch("./jokes.json")
//     .then(response => 
//         json = response.json())
//     .then(data => console.log(data))


function tellJoke() {
    const knockKnock = JSON.parse(json);
    const index = Math.floor(Math.random() * knockKnock.jokes.length);
    console.log(index);
    console.log(knockKnock.jokes[index].setup);
    console.log(knockKnock.jokes[index].finish);
    var newBtn = document.createElement("BUTTON");
        document.body.appendChild(newBtn);
    var lastBtn = document.createElement("BUTTON");
        document.body.appendChild(lastBtn);
        lastBtn.classList.add('displayOff');
    var y = document.querySelector("#display").classList.toggle('displayOn');
    
    if (y == false){
        document.getElementById("display").innerHTML = "Knock Knock"
        document.getElementById("button").innerHTML = "Who's there?"
    } else {
        document.getElementById("display").innerHTML = knockKnock.jokes[index].setup;
        document.getElementById("button").classList.toggle('displayOff');
        newBtn.classList.add('newBtn')
        newBtn.innerHTML = knockKnock.jokes[index].setup + " who?"
        newBtn.onclick = function finishJoke() {
            document.getElementById("display").innerHTML = knockKnock.jokes[index].finish;
            newBtn.classList.add('displayOff');
            lastBtn.classList.toggle('displayOff');
            lastBtn.classList.add("newBtn");
            lastBtn.innerHTML = "Tell Me Another";
            lastBtn.onclick = function restart() {
                window.location.reload();
            };
        };
    }
    // let index = Math.floor(Math.random(KnockKnock.jokes.length))
    // console.log(index);
}
