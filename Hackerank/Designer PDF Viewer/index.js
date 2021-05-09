function designerPdfViewer(h, word) {
    // Write your code here
    word = word.split('');
    let arrIndex = [];
    for(let i=0;i<word.length;i++){
        arrIndex.push(word[i].charCodeAt(0)-97);
    }
    let newArr = arrIndex.map(x=>h[x]);
    return Math.max.apply(Math, newArr)*word.length;
}