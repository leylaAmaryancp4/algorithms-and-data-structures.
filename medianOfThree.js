function medianOfThree(arr,start,end){
    let pivot = Math.floor((start + end)/2);
    if(arr[start] > arr[pivot])
    {
        [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
    }
    if(arr[start] > arr[end])
        {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
        if(arr[pivot] > arr[end]){
        [arr[pivot], arr[end]] = [arr[end],arr[pivot]];
        }
        return portition(arr,start,end);
    
}

function quickSort(arr,start,end){
    if(start < end){
    let pivotIndex = medianOfThree(arr,start,end);
    quickSort(arr,start,pivotIndex- 1 );
    quickSort(arr,pivotIndex + 1, end)
    }
}

function portition(arr,start,end){
    let pivotValue=arr[end];
    let i = start - 1;
    for(let j = 0; j <= end - 1; ++j){
        if(arr[j] <= pivotValue){
            i++;
            [arr[i],arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

let arr = [8, 3, 1, 7, 9, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // [1, 3, 5, 7, 8, 9]