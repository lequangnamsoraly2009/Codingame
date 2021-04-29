// In this puzzle, you will be given the current point that your timer is at and the point that your timer will stop. Your task is to output the amount of time remaining in the timer.
// Input
// One Line: The current time position C; The position at which the timer stops S (m:ss)
// Output
// The time remaining in m:ss
// Example
// Input
// 0:00 0:01
// Output
// 0:01

//Solution
var inputs = readline().split(' ');
const C = inputs[0].split(':');
const S = inputs[1].split(':');
let D = [];
D[0] = S[0]-C[0];
if(Number(S[1])-Number(C[1])<0){
    D[1] = 60 + (Number(S[1])-Number(C[1]));
    D[0]-=1;
    if(D[1]<10){
        D[1] = '0'+D[1];
    }
}else{
    D[1] = Number(S[1])-Number(C[1]);
    if(D[1]<10){
        D[1] = '0'+D[1];
    }
}
console.log(D.join(':'));

//Pass 100% unit tests
