function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        console.log(element);
        if(element >='0' && element <= '9'){
            return true;
        }
    }
    return false;
}

let num = checkDigitsInName('Name2024');
console.log(num);
