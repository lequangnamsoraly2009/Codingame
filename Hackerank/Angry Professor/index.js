function angryProfessor(k, a) {
    // Write your code here
    let sum = 0;
    for(let i=0;i<a.length;i++){
        if(a[i]<0){
            sum+=1;
        }
    }
    return (a.length-sum<=k)?'YES':'NO';
}