
const sort = (arr) =>{
    let num = arr;

    for(let i=0; i<20; i++)
    {
        for(let j=i+1; j<20; j++){
            if(num[i]>num[j]){
                let temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }
        }
    }
}
let arr = [15,18,12,1,2,3,4,5,6,7,8,9,10,20,19,17,16,14,13,11];
sort(arr);
console.log(...arr);