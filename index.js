// Code your solutions in this file
const message = [];
function writeCards(nameArray, eventName) {
    for (let i=0; i < nameArray.length; i++) {
        message.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number --;
    }
}