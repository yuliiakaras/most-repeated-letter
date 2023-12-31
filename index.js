function findMostRepeatedLetter(text) {

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

module.exports = findMostRepeatedLetter;

