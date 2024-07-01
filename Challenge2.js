function checkingSpeed(speed) {
    const speedLimit = 70;
    const suspensionPoints = 12;

    if(speed <= speedLimit){
        console.log("The speed is okay")
    } else {
        let demeritPoints = calculateDemeritPoints(speed, speedLimit);
        console.log("Suspension Points:", demeritPoints);

        if (demeritPoints >= suspensionPoints) {
            console.log("Your license is suspended");
        }
    }
}

function calculateDemeritPoints(speed, speedLimit) {
    const pointAboveEvery5Km = 1;
    const kilometersAbove = speed -speedLimit;
    return Math.floor(kilometersAbove / 5) * pointAboveEvery5Km;
}

const prompt = require('prompt-sync')();
    const carSpeed = parseFloat(prompt("Enter car speed."));
checkingSpeed(carSpeed)