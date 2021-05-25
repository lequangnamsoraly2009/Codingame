function chocolateFeast(n, c, m) {
    // Write your code here
    let numberEatChoco = Math.trunc(n/c);
    let wraps = numberEatChoco;
    while(wraps>=m){
        numberEatChoco += Math.trunc(wraps/m);
        wraps = Math.trunc(wraps/m) + wraps%m;
    }
    return numberEatChoco;
}