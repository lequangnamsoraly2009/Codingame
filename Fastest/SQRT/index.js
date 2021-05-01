// Given a number N and another number P, find the biggest integer M such that P^M ≤ N

// For example, if N is 33, and P is 2, the output will be 5, as 2^5=32
// Input
// Line 1: An integer N
// Line 2: An integer P
// Output
// Line 1: An integer M, the biggest power of P
// Constraints
// 0 < N,P ≤ 2³¹-1
// Example
// Input
// 33
// 2
// Output
// 5

//solution


const N = parseInt(readline());
const P = parseInt(readline());

c=0;
let res=false
do {
    if(Math.pow(P,c+1)<=N){
    c++
    } else {
        res=true
    }
} while (res==false);


console.log(c);


// Pass 100% unit tests