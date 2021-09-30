const commonWords = require('./commonWords');

const randomMsg = (wordsNum = 10) => {
    let message = ''

    for (let i = 0; i < wordsNum; i++ ) {
        let randomNum = Math.floor(Math.random() * commonWords.length);
        message = message + commonWords[randomNum] + ' ';
    } 

    console.log(message);
    return message;
}

const num = process.argv[2]
randomMsg(num);

module.exports = { randomMsg };