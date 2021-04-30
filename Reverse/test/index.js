// n = 4
// 1234
// +123
// ++12
// +++1

//n=1
//1

//n=2
//12
//+1

//solution
const n = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let t = '';
for(let i=1; i <= n; i++ ) {
    t += ''+i;
}
console.log(t)
for(let j = 0; j < n-1; j++) {
    t = '+'+t;
    let r = t.substr(0, n)
    console.log(r)
}

//pass 100% unit test