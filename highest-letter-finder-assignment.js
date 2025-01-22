let word = "biology";
function findMostFrequentLetter(word) {
    let letterCounts = {};

    for (let letter of word) {
        if (letterCounts[letter]) {
            letterCounts[letter]++;
        } else {
            letterCounts[letter] = 1;
        }
    }

    let maxLetter = '';
    let maxCount = 0;

    for (let letter in letterCounts) {
        if (letterCounts[letter] > maxCount) {
            maxCount = letterCounts[letter];
            maxLetter = letter;
        }
    }

    return maxLetter;
}

let result = findMostFrequentLetter(word);
console.log("The most frequent letter is:", result);
