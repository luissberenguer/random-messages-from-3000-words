const commonWords = require('./commonWords');

const randomMsg = (wordsNum) => {
    let message = ''

    for (let i = 0; i < wordsNum; i++ ) {
        let randomNum = Math.floor(Math.random() * commonWords.length);
        message = message + commonWords[randomNum] + ' ';
    } 

    return message;
}

const num = process.argv[2]

console.log(randomMsg(num));