function theHurdleRace(k,height){
    // Write your code here
    height.sort((x,y)=>x-y);
    if(height[height.length-1]>k){
        return height[height.length-1]-k;
    }else{
        return 0;
    }
}