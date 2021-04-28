// Goal
// A diagonal of a polygon is defined as a segment joining any two non-consecutive vertices of the polygon.
// How many diagonals are there in a convex polygon with N vertices?
// Input
// N - the number of vertices
// Output
// D - the number of diagonals
// Constraints
// 3 ≤ N ≤ 134217728
// Example
// Input
// 4
// Output
// 2

//Solution 
const N = parseInt(readline());
console.log(N*(N-3)/2);

//Công thức tính số cạnh của đa giác N cạnh (n*(n-3))/2

//=>100% unit tests