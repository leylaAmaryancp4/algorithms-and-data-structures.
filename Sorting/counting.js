function myCount(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = max - min + 1;
    let count = new Array(range).fill(0);

    for(let i = 0; i < arr.length; ++i){
        count[arr[i] - min]++;
}
for(let i = 1; i < range; ++i){
    count[i] += count[i- 1]
}

let result = [];
for(let i = 0; i < arr.length; ++i){
    let val = arr[i];
    count[val - min]--;
    result[count[val - min]] = val;
}
return result;

}

let array = [4, 1, 3, 4, 2, 1, 0, 3];
let result = myCount(array);
console.log(result);