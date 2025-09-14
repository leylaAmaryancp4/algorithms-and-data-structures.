//hamematum e arajin tarric aj amenapokr tiv; 
// orinak 3,2,4,1,8  arajin tarr 3 e amenapokr tiv 1;
function selection(arr){
    for(let i = 0; i < arr.length; ++i){
        let minindex = i;
        for(let j = i + 1; j < arr.length; ++j){
            if(arr[minindex] > arr[j]){
                minindex = j;
            console.log(arr)
            }
            if(minindex  != i){
                [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
                
            }
        }
    }
    return arr;
}

let arr = [5,8,7,1];
selection(arr);
console.log(arr);

