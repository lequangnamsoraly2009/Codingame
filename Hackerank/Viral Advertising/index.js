function viralAdvertising(n) {
    // Write your code here
    let likeSum = 2;
    let next=2;
    for(let i=2;i<=n;i++){
        next*=3;
        likeSum += Math.trunc(next/2);
        next = Math.trunc(next/2);
    }
    return likeSum;
}