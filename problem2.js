function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email"
    }
    let ele = email.split('@')
    let first = ele[0]
    let last = ele[1]
    return (first + ' sent you an email from ' + last);
}

const mail = sendNotification('fahim234.hotmail.com');
console.log(mail);
