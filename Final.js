function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";
    }

    const saving = income - expenses;
    const incomeTax = saving * .20;
    return incomeTax;
}

function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email"
    }
    let ele = email.split('@')
    let first = ele[0]
    let last = ele[1]
    return (first + ' sent you an email from ' + last);
}

function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if(element >='0' && element <= '9'){
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input"
    }
    let totalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        totalScore = totalScore + 20;
    }
    if (totalScore >= 80) {
        return true;
    }
        return false;
}

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