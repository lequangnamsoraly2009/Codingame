// A number N is received.

// While N > 9:
// Make the sum of each digit in the number.

// Example :
// N = 999
// 9+9+9 = 27
// 2+7 = 9

// Output is 9.
// Input
// Line 1: N the number.
// Output
// A single digit <= 9
// Constraints
// 0 ≤ N ≤ 10 000 000 000 000 000
// Example
// Input
// 19
// Output
// 1

//Solution :
N=+readline();a=N=>{if(N<=9){return N;}else{b=String(N).split('');sum=0;for(i=0;i<b.length;i++){sum+=Number(b[i])}return a(sum);}};print(a(N))

// Pass 100% unit tests