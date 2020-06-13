// Easy Challenge: First Reverse

// Create a function that takes a string parameter and returns the string in reversed order. 

// Sample Test Cases
// Input: 'coderbyte'
// Output: etybredoc

// Input: 'I Love Code'
// Output: edoC evoL I

// front to back

let frontFirstReverse = str => {
    let reversed = '';
    for(let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log(frontFirstReverse('coderbyte'));

// back to front

let backFirstReverse = str => {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(backFirstReverse('I Love Code'));

// with method

let methodFirstReverse = str => {
    return str.split('').reverse().join('');
}

console.log(methodFirstReverse('First Reverse'))