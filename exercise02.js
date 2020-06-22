// Easy Challenge: First Factorial

// Create a function that takes a number parameter and returns the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). 

// Sample Test Cases
// Input:4
// Output:24

// Input:8
// Output:40320

let firstFactorial = num => {
    let factorial = 1;
    for(let i = num; num > 0; num--){
        factorial *= num
    }
    return factorial;
}

console.log(firstFactorial(8));