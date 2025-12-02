// Array to store picked numbers
let pickedNumbers = [];
let lastnumber = 0

function random() {
    console.log("A message was logged to the console.");

    // Generate a random number 1–49
    let randomInt = Math.floor(Math.random() * 49) + 1;

    // Keep generating until the number is unique
    while (pickedNumbers.includes(randomInt)) {
        console.log("Number already picked, trying again...");
        randomInt = Math.floor(Math.random() * 49) + 1;
    }

    // Add the unique number to the array
    pickedNumbers.push(randomInt);

    document.getElementById(randomInt).style.backgroundColor = "Green";


    console.log("Picked number:", randomInt);
    console.log("Picked numbers array:", pickedNumbers);
}


//for furture use
function cycle(){
    if(lastnumber !== 0){
           document.getElementById(lastnumber).style.backgroundColor = "orange"; 
    }
}


// Converts a cell label like "C6" into the numeric ID 1–49
function labelToId(label) {
    label = label.toUpperCase(); // Ensure uppercase
    const letters = ['A','B','C','D','E','F','G'];
    const letter = label[0];
    const number = parseInt(label[1]); // Row number 1–7

    if (!letters.includes(letter) || isNaN(number) || number < 1 || number > 7) {
        return null; // Invalid input
    }

    // Calculate ID: (row-1)*7 + column index + 1
    const rowIndex = number - 1;
    const colIndex = letters.indexOf(letter);
    return rowIndex * 7 + colIndex + 1;
}

