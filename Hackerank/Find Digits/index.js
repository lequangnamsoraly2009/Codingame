function findDigits(n) {
    // Write your code here
    let arr = String(n).split('');
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(n%Number(arr[i])===0 && arr[i]!=0){
            count+=1;
        }
    }
    return count;
}