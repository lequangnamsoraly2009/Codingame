function findMedian(arr) {
    // Write your code here
    arr.sort((x,y)=>x-y);
    return arr[(arr.length-1)/2]

}