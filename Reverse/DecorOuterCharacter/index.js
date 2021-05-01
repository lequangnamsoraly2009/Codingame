// 01 Test 1
// Input
// HELLO * 2
// Expected output
// ***********
// ***********
// ** HELLO **
// ***********
// ***********
// 02 Test 2
// Input
// welcome * 1
// Expected output
// ***********
// * welcome *
// ***********
// 03 Test 3
// Input
// Awesome $ 4
// Expected output
// $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$
// $$$$ Awesome $$$$
// $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$

//Solution
var inputs = readline().split(' ');
const w = inputs[0];
const decor = inputs[1];
const outer = parseInt(inputs[2]);

for(let i =0;i<outer;i++){
    console.log(decor.repeat((w.length+outer*2+2)));
}

console.log(decor.repeat(outer)+' '+w+' '+decor.repeat(outer))

for(let i =0;i<outer;i++){
    console.log(decor.repeat((w.length+outer*2+2)));
}

//Pass 100% unit tests -> Top 4 - 5m46 