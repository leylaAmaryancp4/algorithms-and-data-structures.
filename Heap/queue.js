class Queue{
    constructor(){
        this.items = [];
        this.frontIndex = 0;
        this.backIndex = 0;

    }
    // Add element to end
    enqueue(val){
        this.items[this.backIndex++] = val;
        
    }
    // Remove element from front
    dequeue(){
        return this.items[this.frontIndex++];
    }
    isEmpty(){
        return this.items.length === 0;
    }
     // View front element
    front(){
        return this.items[this.frontIndex];
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.front());   
console.log(q.dequeue()); 
console.log(q.front());   
console.log(q.isEmpty());