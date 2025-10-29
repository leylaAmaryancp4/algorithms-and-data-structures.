class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.height =1;

}
}

class AVLTree{
    constructor(){
        this.root = null;
    }

    update(node){
        let left = this.getHeight(node.left);
        let right = this.getHeight(node.right);
        node.height = 1 + Math.max(left,right);

    }

    insert(val){
        this.root = this._insert(this.root, val);
    }
    _insert(current,val){
        if(!current){
            return new Node(val);
        }
    if(val < current.val){
        current.left = this._insert(current.left, val);
    }
    else if(val > current.val){
        current.right = this._insert(current.right, val);
    }else{
        return current;
    }
    this.update(current);


    let balance = this.getBalance(current);
        if(balance > 1 && val < current.left.val){
            return this.rightRotate(current);
        }
        if(balance < - 1 && val > current.right.val){
            return this.leftRotate(current);
        }
        if(balance > 1 && val > current.left.val){
            current.left = this.leftRotate(current.left);
            return this.rightRotate(current);
        }

        if(balance < -1 && val < current.right.val){
            current.right = this.rightRotate(current.right);
            return this.leftRotate(current);
        }

return current;

    }
    getHeight(node){
        if(!node)return 0;
        return node.height;
    }

    getBalance(node){
        if(!node)return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
//LL
    rightRotate(y){
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;

        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

return x;
    }

    //RR
    leftRotate(x){
      let y = x.right;
      let T2 = y.left;
      y.left = x;
      x.right = T2;
      
      x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
      y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
      return y;
        
}
}



let obj = new  AVLTree();
obj.insert(10);
obj.insert(20);
obj.insert(30);
obj.insert(40);
console.log(obj);
