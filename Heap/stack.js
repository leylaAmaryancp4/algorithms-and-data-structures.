class Stack{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    push(val){
        this.items.push(val);
    }
    pop(){
        return this.items.pop();
    }
    top(){
        return this.items.length - 1;
    }
    peek(){
        if(this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
    
}

let obj = new Stack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
obj.push(5)
console.log(obj);
console.log(obj.pop())
console.log(obj.peek());
