const fs = require('fs');

const file = async () => {
    const file          = await fs.readFileSync('2600-0.txt', 'utf8');
    let words           = file.toLowerCase();
    let arrWords        = [];
    let freqWord        = ""; 
    let freqWordCount   = 0;
    
    // Split
    words = words.split(/(\s+)/);

    words.forEach(word => {
        if (word.trim() != "" && !arrWords.includes(word)) {
            
            arrWords.push(word);

            // Filter word from the array to count it's appearance.
            let currentWord = words.filter(selectedWord => selectedWord == word);

            console.log(word, " ", currentWord.length);

            // Set new found word with lot of appearance.
            if (currentWord.length > freqWordCount) {
                freqWord = word;
                freqWordCount = currentWord.length;
            }
        }
    });

    console.log("------------------------------");
    console.log(`The most frequent word is: "${freqWord}" appearing ${freqWordCount} times `);

}

file();