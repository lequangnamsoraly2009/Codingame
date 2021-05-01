// The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
// 01 Test 1
// Input
// Hello, world!
// Expected output 
// 6
// 02 Test 2
// Input
// Hello there, I am a string.
// Expected output
// 13
// 03 Test 3
// Input
// Can you figure out the solution to this puzzle?
// Expected output
// 23
// 04 Test 4
// Input
// You can do it! I believe in you!
// Expected output
// 16

// Solution
const a = readline();
console.log(Math.trunc(a.length/2))

// pass 100% unit tests