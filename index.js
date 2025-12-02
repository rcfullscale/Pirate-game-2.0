// Array to store picked numbers
let pickedNumbers = [];

function random() {
    alert("The button was clicked!");
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

    console.log("Picked number:", randomInt);
    console.log("Picked numbers array:", pickedNumbers);
}
