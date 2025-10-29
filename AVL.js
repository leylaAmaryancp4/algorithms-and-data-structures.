class Node{
    constructor(val = 0){
        this.left = null;
        this.right = null;
        this.hight = 1;
        this.val = val;

    }
}
class Tree{
        constructor(){
            this.root = null;
    }


    
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return;
}
let current = this.root;
while(true){
    if(current.val === val)return;
    if(val < current.val){
        current.left = newNode;
        return
    }else{
        current.right = newNode;
        return;
    }

}
         
}

getMin(node){
    while(node.left){
        node = node.left;
}
return node;
}

remove(val){
    this.root = this._delete(this.root,val)
}
_delete(node,val){
    if(!node)return node;
    if(val < node.val){
        node.left =this._delete(node.left,val)
    }else if(val > node.val){
        node.right = this._delete(node.right,val)
    }else{
        if(!node.left || !node.right){
            return node.left || node.right;
    }
    let successor = this.getMin(node.right);
    node.val = successor.val;
    node.right = this._delete(node.right,successor.val);

}
return node;
}


search(val){
    this.root = this._search(this.root, val)
}
_search(node, val){
    if(!node)return null;
    if(val < node.val){
        return this._search(node.left,val)
    }else if(val > node.val){
        return this._search(node.right,val)
    }else{
        return node;
    }
}
getHight(node){
    if(!node)return 0;
    return node.hight;
}
getBalance(node){
    if(!node)return 0;
    return this.getHight(node.left) - this.getHight(node.right);

}
}

let obj = new Tree();
obj.insert(10);
obj.insert(5);
obj.insert(15);
obj.insert(3);
console.log(obj);
obj.remove(5)
obj.search(15);
let res = obj.getHight(obj.root);
console.log(res);