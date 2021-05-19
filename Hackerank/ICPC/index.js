function ICPC(topic1,topic2){
    let arr1 = topic1.split('');
    let arr2 =topic2.split('');
    let sum =0;
    for(let i=0;i<arr1.length;i++){
        if((Number(arr1[i])&&Number(arr2[i])===1) || (Number(arr1[i])||Number(arr2[i])===1)){
            sum+=1;
        }
        
    }
    return sum;
} 

function acmTeam(topic) {
    // Write your code here
    let max = 0;
    let number = 0;
    let arrPush = [];
    for(let i=0;i<topic.length-1;i++){
        for(let j=i+1;j<topic.length;j++){
            if(ICPC(topic[i],topic[j])>=max){
                max = ICPC(topic[i],topic[j]);
                arrPush.push(max);
            }
        }
    }
    
    for(let i=0;i<arrPush.length;i++){
        if(arrPush[i]===max){
            number+=1;
        }
    } 
    return [max,number];
}