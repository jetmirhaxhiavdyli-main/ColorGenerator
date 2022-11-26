let firstDiv = document.getElementById("firstDiv");
let generateHex = document.getElementById("generateHex");
let hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
generateHex.addEventListener('click', changeHex);

//run function on first div
function changeHex () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += hexValues[Math.floor(Math.random() * hexValues.length)];
    }

    firstDiv.style.backgroundColor = hex;
    document.getElementById('textValue').innerHTML = hex;
}

//copy to clipboard function*/





