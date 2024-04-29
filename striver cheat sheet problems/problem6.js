// Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately.
// Digits mean numbers, not places! That is, if the given integer is "132456", even digits are 2, 4, and 6, and odd digits are 1, 3, and 5.
// Constraints
// 0<= 'n' <=10000
// Example :
// Input: 'n' = 132456
// Output: 12 9
// Explanation:
// The sum of even digits = 2 + 4 + 6 = 12
// The sum of odd digits = 1 + 3 + 5 = 9
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function isEven(num){
    return num%2 === 0
}


function even_odd_sum(num){
    //Return an array of evensum & oddsum like {evensum , oddsum};
    let even_sum = 0;
    let odd_sum = 0;
    let n = num;
    while(n > 0){
        rem = n%10;
        if(isEven(rem)){
            even_sum += rem;
        }else{
            odd_sum += rem;
        }
        n = Math.trunc(n/10)
    }
    return [even_sum, odd_sum]
}

let result = even_odd_sum(123456)
console.log(result[0] + ' ' + result[1])
