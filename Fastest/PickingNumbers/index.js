function pickingNumbers(a) {
    // Write your code here 
    let arr = [];
    a.forEach(x=>arr[x]=(arr[x]||0)+1);
    let max = Number.NEGATIVE_INFINITY;
    arr.forEach((x,y)=>{
        const ismax = x + (arr[y+1]||0);
        if(ismax>max) max=ismax;
    });
    return max;
}

//hackerank - Algorithm Implementation 