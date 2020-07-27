// Easy Challenge: Longest Word

// Create a function that takes a string parameter and returns the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume string will not be empty. 

// Sample Test Cases
// Input:"fun&!! time"
// Output:"time"

// Input:"I love dogs"
// Output:"love"

function longestWord(str){
    let longestWord = '';
    let words = str.split(' ');
    for(let word of words){
        let cleanWord = word.replace(/[^a-zA-Z]/gm, '')
        if(cleanWord.length > longestWord.length){
            longestWord = cleanWord
        }
    }
    return longestWord
}

console.log(longestWord("fun&!! time"))