function angryProfessor(k, a) {
    // Write your code here
    let sum = 0;
    for(const i of a){
        sum+= i<=0;
    }
    return sum>=k?'NO':'YES';
}
