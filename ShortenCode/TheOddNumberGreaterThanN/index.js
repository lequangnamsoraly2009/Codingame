//Print the odd numbers (N) of the given number greater than N. If the odd number (N) is already odd, print that number (N)
// Input
// M number of elements
// M lines: Number(N) 

//output
// M lines: The odd numbers

// Constraints
// 0 < M < 1000
// -100000000000 < N < 10000000000

// Example
//Input
// 5
// 3
// -10
// 1
// 4
// -11

// Output
// 3
// -9
// 1
// 5
// -11

//Solution
a=readline;M=+a();for(i=0;i<M;i++){N=+a();N<=0&&N%2==0||N>0&&N%2==0?print(N+1):print(N)}
//88 characters
// Pass 100% unit tests