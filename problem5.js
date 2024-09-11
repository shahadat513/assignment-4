function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) && typeof serialNumber !== 'number'){
        return "Invalid Input"
    }
    for (let i = 0; i < waitingTimes.length; i++) {
        let element = waitingTimes[i];
        element = element++
        console.log(element);
        
    }

}

let previous = waitingTime([ 3, 5, 7, 11, 6 ], 10);
console.log(previous);
