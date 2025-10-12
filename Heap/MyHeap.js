class MyHeap{
    constructor(comparator = (a,b)=>a - b){
        this.heap = [];
        this.comparator = comparator;
}

isEmpty(){
    return this.heap.length === 0;
}
getParentIndex(index){
    return Math.floor((index - 1) / 2);
    }
getLeftIndex(index){
    return 2 * index  + 1;
}
getRightIndex(index){
    return 2 * index + 2;
}
swap(i,j){
    [this.heap[i], this.heap[j]] = [this.heap[j],this.heap[i]];
}
push(val){
    this.heap.push(val);
    this.heapifyUp();
}
pop(){
    if(this.isEmpty())return null;
    this.swap(0, this.heap.length - 1);
    let removed = this.heap.pop();
    this.heapifyDown();
    return removed;
}
peek(){
    return this.heap[0];
}

clear(){
    this.heap = [];
}
heapifyUp(){
let index = this.heap.length - 1;
while(index > 0){
let parentIndex = this.getParentIndex(index);
if(this.comparator(this.heap[index], this.heap[parentIndex]) < 0){
    this.swap(index,parentIndex);
    index = parentIndex;

}else{
    break;
}
}
}
heapifyDown(){
let index = 0;
let size = this.heap.length ;
while(this.getLeftIndex(index) < size){
    let smallest = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    if(right < size )
    if(this.comparator(this.heap[right], this.heap[smallest]) < 0){
        smallest = right;
    }
    if(this.comparator(this.heap[index], this.heap[smallest]) <= 0) break;
    this.swap(index, smallest)
    index = smallest;
}
}

}


const minHeap = new MyHeap();
minHeap.push(10);
minHeap.push(3);
minHeap.push(8);
minHeap.push(1);
console.log(minHeap.peek());  
console.log(minHeap.pop());   
console.log(minHeap.pop());  
console.log(minHeap.pop());   
console.log(minHeap.pop());  

const maxHeap = new MyHeap((a,b) => b - a);
maxHeap.push(5);
maxHeap.push(2);
maxHeap.push(9);
console.log(maxHeap.pop())