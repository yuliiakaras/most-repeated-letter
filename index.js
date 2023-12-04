const fs = require('fs');

function findMostRepeatedLetter(filePath) {
    const text = fs.readFileSync(filePath, 'utf-8');

    const charCount = new Map();

    text.toLowerCase().split('').forEach(char => {
        if (/[a-z]/.test(char)) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    });

    let mostRepeatedLetter = '';
    let mostRepeatedCount = 0;

    charCount.forEach((count, char) => {
        if (count > mostRepeatedCount) {
            mostRepeatedCount = count;
            mostRepeatedLetter = char;
        }
    });

    return mostRepeatedLetter;
}

if (process.argv.length > 2) {
    const filePath = process.argv[2];
    console.log('Most repeated letter in', filePath, 'is', findMostRepeatedLetter(filePath));
} else {
    console.log('Please provide a file path. Example usage: node index.js text.txt');
}

module.exports = findMostRepeatedLetter;

