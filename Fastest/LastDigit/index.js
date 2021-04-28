// Goal
// Write last digit of number raised to the specified power.

// Input
// Integer N to raise
// Integer P power

// Output
// Integer R

// Constraints
// 0 < N < 10^19
// 0 < P < 10^6

// Example
// Input
// 7
// 2
// Output
// 9

// Noob Solution
const N = parseInt(readline());
const P = parseInt(readline());

let a = N**P;

console.log(a%10)

// -> Không chạy được unit test big number

// => 60% unit tests