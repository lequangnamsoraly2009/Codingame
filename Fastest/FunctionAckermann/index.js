// Return the output of the Ackermann function.


// If at least one of the numbers given is negative, return -1.

// Ackermann function:
// if M = 0: return n + 1
// if N = 0: return Ackermann function of M - 1, 1
// Default: return Ackermann function of (M - 1, Ackermann function of(M, N - 1))
// Input
// The variables M and N
// Output
// The output of the Ackermann function
// Constraints
// -1 ≤ M < 3
// -1 ≤ N ≤ 100
// Example
// Input
// 0 99
// Output
// 100

//Solution
var inputs = readline().split(' ');
const m = parseInt(inputs[0]);
const n = parseInt(inputs[1]);

const Ac = (m,n)=>{
    if(m===0){
        return(n+1);
    }
    if(m<0||n<0){
        return -1;
    }
    if(n===0){
        return Ac(m-1,1);
    }
    return Ac(m-1,Ac(m,n-1));
}

console.log(Ac(m,n));


//Pass 100% unit tests