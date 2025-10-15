class ListNode{
    constructor(data = 0, left = null, right = null){
        this.left = left;
        this.right = right;
        this.data = data;

    }
}
    class Node{
        constructor(){
            this.root = null;

        }
    
    insert(value){
    
            let newNode = new ListNode(value);
            if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
        if(value < current.data){
           if(!current.left){
current.left = newNode;
return;
        }
        current = current.left;
           
        }else if(value > current.data){
            if(!current.right){
                current.right = newNode;
                return;
            }
            current = current.right;
            
        }else{
            return;
        }
    }
    }

    contains(key){
        if(!this.root) return null;
        let current = this.root;
        while(current){
            if(key === current.data){
                return true;
            }else if(key < current.data){
                current = current.left;
            }else{
                current = current.right
            }
            
        }
        return false;
    }

    levelOrder(){
        let queue = [this.root];
        let result = [];
        while(queue.length){
            let size =  queue.length;
            let level = [];
            for(let i = 0; i < size; ++i){
                let current= queue.shift();
                level.push(current.data);
                if(current.left)queue.push(current.left);
                if(current.right)queue.push(current.right);
            }
                result.push(level);
            
        }
        return result;
    }
    inOrder(){
        let stack = [];
        let arr = [];
        let current = this.root;
        while(current != null || stack.length > 0){
            while(current !== null){
            stack.push(current)
        current = current.left;

            }
            current = stack.pop();
           arr.push(current.data)
        current = current.right;
        }
        return arr;
    }

    
    getHeight(){
        let queue = [this.root]
        let height = 0;
        
        while(queue.length){
let size = queue.length;
for(let i = 0; i < size; ++i){
    let current = queue.shift();
     if(current.left)queue.push(current.left);
    if(current.right)queue.push(current.right);
}
height++;
}
        return height;
    }


  
 
}


const obj = new Node();
obj.insert(10);
obj.insert(5);
obj.insert(15);
obj.insert(20);
obj.insert(7);
obj.insert(4);
let res = obj.levelOrder();
console.log(res);

let res1 = obj.inOrder();
console.log(res1);

let res3 = obj.getHeight();
console.log(`height is  ${res3}`);

console.log(obj)
console.log(obj.contains(5))
console.log(obj.contains(100));

