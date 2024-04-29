// Write a program that takes a character as input and prints 1, 0, or -1 according to the following rules.


// 1, if the character is an uppercase alphabet (A - Z).
// 0, if the character is a lowercase alphabet (a - z).
// -1, if the character is not an alphabet.


// Example:

// Input: The character is 'a'.

// Output: 0

// Explanation: The input character is lowercase, so our answer is 0.

function main(inputstr) {
    let charCode = inputstr.charCodeAt(0)
    if (charCode >= 65 && charCode <= 90) {
        console.log(1)
    } else if (charCode >= 97 && charCode <= 122) {
        console.log(0)
    } else {
        console.log(-1)
    }
}

main('a');
main('A');
main('1');
main('-');

