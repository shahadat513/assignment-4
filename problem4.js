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

const value = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true };
console.log(calculateFinalScore(value));
