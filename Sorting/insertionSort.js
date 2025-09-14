//amen tarr nayum e naxordin ev hamematum
//insertion sortum swap cenk anum ayl shift:
function insertion(arr){
   for(let i = 1; i < arr.length; ++i){
    let key = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
   }
return arr;
}

let arr=[30, 6, 4, 10];
insertion(arr);
console.log(arr);


