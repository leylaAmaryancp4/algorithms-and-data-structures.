function rand(arr,start,end){
    let pivot = Math.floor(Math.random()*(end - start + 1)) + start;
    [arr[pivot], arr[end]] = [arr[end], arr[pivot]]
    return partion(arr,start,end);
}

function partion(arr,start, end){
    let pivotValue = arr[end];
    let i = start - 1;
    for(let j = start; j <= end - 1; ++j){
        if(arr[j] <= pivotValue){
            i++;
            [arr[i], arr[j]] = [arr[i], arr[j]];
            
            
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}
function quickSort(arr,start,end){
    if(start < end){
        let partionIndex=rand(arr,start,end);
        quickSort(arr,start ,partionIndex - 1);
        quickSort(arr,partionIndex + 1,end);
    }
}
let arr = [8,3,1,7,9,5];
 quickSort(arr, 0,arr.length - 1);
console.log(arr);
