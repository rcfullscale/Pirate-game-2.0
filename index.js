// Array to store picked numbers
let pickedNumbers = [];    // Random green squares
let userChosen = [];       // Red squares




function labelToId(label) {
    label = label.toUpperCase();
    const letters = ['A','B','C','D','E','F','G'];
    const col = letters.indexOf(label[0]);
    const row = parseInt(label[1], 10); // assumes 1–7

    if (col === -1 || isNaN(row) || row < 1 || row > 7) return null;

    // Calculate numeric ID 1–49
    return row * 7 - 7 + col + 1;
}


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeButton');
    const input = document.getElementById('cellInput');

    button.addEventListener('click', () => {
        const label = input.value.trim().toUpperCase();
        const id = labelToId(label);

        if (!id) {
            alert("Invalid cell! Use format A1–G7.");
            return;
        }

        const cell = document.getElementById(id.toString());
        if (cell) {
            cell.style.backgroundColor = 'Green';
            userChosen.push(id); // Track red squares
        } else {
            alert("Cell not found!");
        }

        input.value = '';
    });
});


function random() {
    console.log("Choosing a random square...");

    let randomInt = Math.floor(Math.random() * 49) + 1;

    // Keep generating until the number is unique AND not a red square
    while (pickedNumbers.includes(randomInt) || userChosen.includes(randomInt)) {
        randomInt = Math.floor(Math.random() * 49) + 1;
    }

    pickedNumbers.push(randomInt);

    const cell = document.getElementById(randomInt.toString());
    if (cell) {
        cell.style.backgroundColor = "green";
    }

    console.log("Random green square ID:", randomInt);
}




//for furture use
function cycle(){
    if(lastnumber !== 0){
           document.getElementById(lastnumber).style.backgroundColor = "green"; 
    }
}

