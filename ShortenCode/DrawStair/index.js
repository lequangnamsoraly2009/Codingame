// Cho 1 số nguyên N 
// Vẽ N bậc cầu thang 
// với "__" là mặc định 

//Input 
//3

//Output
//          __
//      __|
//   __|
//__|

//solution
n=+readline;
s="   ";
for(i=0;i<=n;i++){for(j=n;j>=0;j--){
        if(i==0&&j==n){
          print(s.repeat(n)+'__');
        }
        else if(i+j==n){
          print(s.repeat(n-i)+ '__|');
        }
    }
}

//=> 100% unit tests