// Input
// First Line: Diameter of jar: d (float)
// Second Line: Hand width: h (float)
// Third Line: Number of cookies in the jar: n (int)
// Fourth Line: Hand width increase per cookie: s (float)
// Output
// Int: Maximum number of cookies to retrieve in one grab without getting stuck
// (total new hand width <= d)
// Constraints
// h <= d
// 0 <= n
// 0 < s, h, d
// Example
// Input
// 6.0
// 4.0
// 20
// 0.5
// Output
// 4

//Solution
const d = parseFloat(readline());
const h = parseFloat(readline());
const n = parseInt(readline());
const s = parseFloat(readline());


let arr = [];
for(let i=0;i<=n;i++){
    if(n==0){
        arr.push(0);
    }
    else if(i>(-n + d -h)/(-s)||i<=(d-h)/s){
        arr.push(i);
    }
    else if(n<=d){
        arr.push(n);
    }
}

console.log(arr[arr.length-1])


// Pass 100% unit tests

