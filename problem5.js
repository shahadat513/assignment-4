function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input"
    }
    let averageTime = 0;

    for (let num of waitingTimes) {
        averageTime = averageTime + num / waitingTimes.length;
    }

    let serial = (serialNumber - 1) - waitingTimes.length;

    let serialTime = serial * Math.round(averageTime);
    return serialTime;

}

let previous = waitingTime([13, 2], 6);
console.log(previous);
