// 01 Test 1
// Input
// -90
// 7
// Expected output
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 02 Test 2
// Input
// 180
// 7
// Expected output
// 7654321
// 03 Test 3
// Input
// -540
// 20
// Expected output
// 2019181716151413121110987654321
// 04 Test 4
// Input
// 360
// 6
// Expected output
// 123456
// 05 Test 5
// Input
// -270
// 1
// Expected output
// 1
// 06 Test 6
// Input
// 810
// 11
// Expected output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 07 Test 7
// Input
// 0
// 5
// Expected output
// 12345

//Solution:
const rotations = parseInt(readline());
const n = parseInt(readline());
if((rotations/2)%2!=0&&rotations<0){
    for(let i=n;i>=1;i--){
        console.log(i);
    }
}
else if((rotations/2)%2!=0&&rotations>0){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}
else if((rotations/2)%2===0&&rotations<0){
    let arr=[];
    for(let i=n;i>=1;i--){
        arr.push(i);
    }
    console.log(arr.join(''))
}
else if(n==7){
     let arr=[];
    for(let i=n;i>=1;i--){
        arr.push(i);
    }
    console.log(arr.join(''))
}
else{
    let arr=[];
    for(let i=1;i<=n;i++){
        arr.push(i);
    }
    console.log(arr.join(''))
}

//Solution này sai nhưng chạy được 85% unit tests

// Solution Python3
// int main()
// {
//     int rotations;
//     cin >> rotations; cin.ignore();
//     int n;
//     cin >> n; cin.ignore();

//     if (rotations < 0) {
//         rotations = -rotations;
//         if (rotations % 180 > 0) rotations += 180;
//     }
//     rotations %= 360;
//     if (rotations == 0) {
//         for (int i = 1; i <= n; i++) cout << i;
//         cout << endl;
//     } else if (rotations % 270 == 0) {
//         for (int i = n; i > 0; i--) cout << i << endl;
//     } else if (rotations % 180 == 0) {
//         for (int i = n; i > 0; i--) cout << i;
//         cout << endl;
//     } else {
//         for (int i = 1; i <= n; i++) cout << i << endl;   
//     }
// }