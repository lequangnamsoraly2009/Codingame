// Mario is marching to the castle to save the princess. In the last phase he has to jump over a number of pillars of different heights. When Mario jumps from a lower pillar to a higher pillar, he has to use High Jump. When he jumps to a pillar of lower or same height, he has to use Low Jump.
// Your task is to find out how many High Jumps and Low Jumps Mario has to do.
// Input
// Line 1: An integer N representing the number of pillars. Mario is now standing on the first pillar.
// Line 2: A sequence of N integers separated by space, representing the height H of each pillar Mario has to overcome.
// Output
// Number of High Jumps and Low Jumps, separated by a space.
// Constraints
// 2 ≤ N ≤ 25
// 0 ≤ H ≤ 12
// Example
// Input
// 5
// 4 7 2 3 7
// Output
// 3 1

//Solution

const N = parseInt(readline());
var inputs = readline().split(' ');
let h =0,l=0;
let arr = [];
for (let i = 0; i < N; i++) {
    const H = parseInt(inputs[i]);
    arr.push(H);
}


for(let j=0;j<arr.length-1;j++){
    for(let i=j+1;i<j+2;i++){
        if(arr[j]<arr[i]){
            h+=1;
        }
        else{
            l+=1;
        }
    }
}

console.log(h,l);

// Pass 100% unit tests
