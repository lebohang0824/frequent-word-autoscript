const fs = require('fs');
const book = '2600-0.txt';

fs.readFile(book, 'utf8', (err, str) => {

    const words = splitString(str.toLowerCase());

    let wordsObj = {};

    words.forEach(element => {
        // Do not count empty spaces.
        if (element.trim() == '') return;

        if (wordsObj.hasOwnProperty(element)) {
            wordsObj[element]++;
        } else {
            wordsObj[element] = 1;
        }
    });

    let word, count = 0;

    for (const prop in wordsObj) {
        if (wordsObj[prop] > count) {
            word = prop;
            count = wordsObj[prop];
        }
    }

    console.log(word, count);

});

const splitString = str => {
    return str.split(/\s+/);
}