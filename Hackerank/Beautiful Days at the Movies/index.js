function beautifulDays(i, j, k) {
    // Write your code here
    let count=0;
    for(i;i<=j;i++){
        let arrI = String(i).split('').reverse();
        let a = Number(arrI.join(''));
        if((i-a)%k==0)count+=1;
    }
    return count;
}