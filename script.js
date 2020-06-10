const fs = require('fs');
const book = '2600-0.txt';

fs.readFile(book, 'utf8', (err, str) => {

    // Cast string to lower case
    str = cleanString(str);
    
    const words = splitString(str);
    
    let wordsObj = {};

    words.forEach(el => {
        // Do not count empty spaces.
        if (el.trim() == '') return;

        wordsObj.hasOwnProperty(el) ? wordsObj[el]++ : wordsObj[el] = 1;

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

const cleanString = str => {
    const regex = /[.,"();*#\[\]?!@%_“$:”0-9‘]/g;
    return str.toLowerCase().replace(regex, '');
}