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

let num = checkDigitsInName('!@#');
console.log(num);
