//Đề
// Ta có 1 cái nền nhà có chiều dài là N và chiều rộng là M [N*M]. Gọi S là chiều dài của khối lập phương được đặt ở từng ô trong nền nhà
// Tính xem ta có thể xếp chồng các khối lập phương lên nhau với chiều cao có thể đạt được là bao nhiêu?
// Trên bản đồ N*M thì tương ứng với (.) là 1 ô rỗng và (o) in thường là 1 khối lập phương
// INPUT: 
// N là chiều dài, M là chiều rộng
// S là chiều cao của khối lập phương
// OUTPUT: 
// Chiều cao tối đa khi xếp các khối lập phương lại với nhau

// Ví dụ:
// Input:
// 3 3 
// 1
// . . o
// . . .
// o . .
// Output: 2 

//Solution: 
// Code Javascript:
var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const M = parseInt(inputs[1]);
const S = parseInt(readline());
let cout=0;
for (let i = 0; i < N; i++) {
    const row = readline();
    for(let j=0;j<M;j++){
        if(row[j]==='o'){
            cout+=1*S;
        }
    }
}
console.log(cout);

// Pass: 100% unit test
