function minimumDistances(a) {
    let min =a.length;
    for(let i=0;i<a.length-1;i++){
        for(let j = i+1;j<a.length;j++){
            if(a[i]==a[j] && j-i < min){
                min = j-i;
            }
        }
    }
    if(min === a.length){
        return -1;
    } 
    return min;

}