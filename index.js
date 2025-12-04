// Array to store picked numbers
let pickedNumbers = [];    // list of squares already used
let lastPicked = null;     // stores the ID of the most recent square


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

            // Turn old newest green
            if (lastPicked !== null) {
                document.getElementById(lastPicked.toString()).style.backgroundColor = 'green';
            }

            // Turn new newest orange
            cell.style.backgroundColor = 'orange';

            // Update last picked
            lastPicked = id;

            if (!pickedNumbers.includes(id)) {
                pickedNumbers.push(id);
            }

        } else {
            alert("Cell not found!");
        }

        input.value = '';
    });
});



function random() {
    console.log("Choosing a random square...");

    let randomInt = Math.floor(Math.random() * 49) + 1;

    while (pickedNumbers.includes(randomInt)) {
        randomInt = Math.floor(Math.random() * 49) + 1;
    }

    // Turn old newest green
    if (lastPicked !== null) {
        document.getElementById(lastPicked.toString()).style.backgroundColor = 'green';
    }

    pickedNumbers.push(randomInt);

    const cell = document.getElementById(randomInt.toString());
    if (cell) {
        cell.style.backgroundColor = "orange";  // new newest
    }

    // Update newest
    lastPicked = randomInt;

    console.log("Random orange square ID:", randomInt);
}



// Not used anymore, but kept for you if needed later
function cycle(){
    if(lastnumber !== 0){
           document.getElementById(lastnumber).style.backgroundColor = "green"; 
    }
}



function openWebsite(url) {
    window.open(url, '_blank');
}



function Save() {
    if (pickedNumbers.length === 0) {
        alert("No squares picked yet!");
        return;
    }
    alert("Copy and save this to load later: " + pickedNumbers.join(", "));
}



function Load() {
    const input = prompt("Enter your saved state (comma-separated IDs):");
    if (!input) return;

    const numbers = input.split(",").map(num => parseInt(num.trim(), 10));

    // Turn everything green first
    numbers.forEach(id => {
        const cell = document.getElementById(id.toString());
        if (cell) {
            cell.style.backgroundColor = "green";
            if (!pickedNumbers.includes(id)) pickedNumbers.push(id);
        }
    });

    // Last loaded becomes newest (orange)
    const last = numbers[numbers.length - 1];
    if (last) {
        document.getElementById(last.toString()).style.backgroundColor = "orange";
        lastPicked = last;
    }

    console.log("Loaded squares:", pickedNumbers);
}



function reset(){
    if(confirm("Are you sure you want to reset?")){
        location.reload(); 
    }
}
