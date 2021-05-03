// You must find the value of x in an equation of the type ax + b = y.
// If x is a decimal number, this value should be rounded to the nearest integer.
// Input
// A string S containing an equation of the type: a * x + b = y.
// Output
// The value of x, rounded to the nearest integer.
// Constraints
// 0 < a < 2^60
// 0 ≤ b, y < 2^60
// a, b, y are integers
// Example
// Input
// 2 * x + 2 = 8
// Output
// 3

//Solution


const S = readline().split(' ');

let x = (Number(S[6]) - Number(S[4])) / Number(S[0]);
if(x%10!=0){
    console.log(Math.trunc(x));
}
else{
console.log(x);}

//Pass 100% unit tests