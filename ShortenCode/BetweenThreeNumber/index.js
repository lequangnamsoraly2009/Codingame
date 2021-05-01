// Tìm số nằm giữa 3 số với số lượng dãy là N

// Input 
// 5
// 1 2 3
// 4 2 5
// 7 1 9
// 4 0 -1
// -2 5 1

// Output
// 1 
// 4
// 7
// 0
// 1

//Solution
// Short
N=+readline();a=[];for(i=0;i<N;i++) {s=readline().split(' ');X=+s[0];Y=+s[1];Z=+s[2];a.push(X,Y,Z);a.sort((x,y)=>x-y); print(a[1]);a.splice(0,3)}

// Full
const N=parseInt(readline());
let a=[];
for(let i=0;i<N;i++) 
{
    s=readline().split(' ');
    X=parseInt(s[0]);
    Y=parseInt(s[1]);
    Z=parseInt(s[2]);
    a.push(X,Y,Z);
    a.sort((x,y)=>x-y); 
    console.log(a[1]);
    a.splice(0,3);
}



// Pass 100% unit tests