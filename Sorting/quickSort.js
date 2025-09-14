function quickSort(arr, left = 0, right = arr.length - 1 ){
    if(left >= right) return;
    
    let pivot =  partition(arr, left, right);
    quickSort(arr,left, pivot - 1);
    quickSort(arr,pivot +  1, right);
    console.log(arr);
}

function partition(arr,left,right){
if(arr.length <= 1)return;
    let pivot = arr[right];
    let i = left - 1;
    for(let j = left;  j < right; ++j){
        if(arr[j] <= pivot){
            i++
            [arr[i],arr[j]] = [arr[j], arr[i]];
            
        }
    }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    
    
    return i + 1;
    
}

let arr = [8, 5, 7, 1, 3, 9];
quickSort(arr);
console.log(arr);