class Node{
constructor(data,color = "RED"){
    this.data =  data;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null; 
}
    
}
 
class RBTree{
    constructor(){
        this.NIL = new Node(null, "BLACK");
        this.root = this.NIL;
    }

    insert(val){
        let node = new Node(val);
        node.left  = this.NIL;
            node.right = this.NIL;
        
            let y = null;
            let x = this.root

            while(x !== this.NIL){
                y = x;
                if(node.data < x.data){
                    x = x.left
                }else{
                    x = x.right
                }
            }

            node.parent = y;
            if(y === null){
                this.root = node;
            }else if(node.data < y.data){
                y.left = node;
            }else{
                y.right = node;
            }
            node.color = 'RED';
            this.fixInsert(node);

        }


        delete(data) {
        let node = this.search(data);
        if (node === this.NIL) return;

        let y = node;
        let yOriginalColor = y.color;
        let x;

        if (node.left === this.NIL) {
            x = node.right;
            this.rbTransplant(node, node.right);
        }

        else if (node.right === this.NIL) {
            x = node.left;
            this.rbTransplant(node, node.left);
        }

        else {
            y = this.minimum(node.right);
            yOriginalColor = y.color;
            x = y.right;

            if (y.parent === node) x.parent = y;
            else {
                this.rbTransplant(y, y.right);
                y.right = node.right;
                y.right.parent = y;
            }

            this.rbTransplant(node, y);
            y.left = node.left;
            y.left.parent = y;
            y.color = node.color;
        }

        if (yOriginalColor === "BLACK") {
            this.fixDelete(x);
        }
    }

    rbTransplant(u, v) {
        if (u.parent === null) this.root = v;
        else if (u === u.parent.left) u.parent.left = v;
        else u.parent.right = v;

        v.parent = u.parent;
    }


    fixDelete(x) {
        while (x !== this.root && x.color === "BLACK") {

            if (x === x.parent.left) {
                let w = x.parent.right;

                // Case 1
                if (w.color === "RED") {
                    w.color = "BLACK";
                    x.parent.color = "RED";
                    this.leftRotate(x.parent);
                    w = x.parent.right;
                }

                // Case 2
                if (w.left.color === "BLACK" && w.right.color === "BLACK") {
                    w.color = "RED";
                    x = x.parent;
                }

                else {

                    // Case 3
                    if (w.right.color === "BLACK") {
                        w.left.color = "BLACK";
                        w.color = "RED";
                        this.rightRotate(w);
                        w = x.parent.right;
                    }

                    // Case 4
                    w.color = x.parent.color;
                    x.parent.color = "BLACK";
                    w.right.color = "BLACK";
                    this.leftRotate(x.parent);
                    x = this.root;
                }
            }

            else { // Mirror case

                let w = x.parent.left;

                if (w.color === "RED") {
                    w.color = "BLACK";
                    x.parent.color = "RED";
                    this.rightRotate(x.parent);
                    w = x.parent.left;
                }

                if (w.right.color === "BLACK" && w.left.color === "BLACK") {
                    w.color = "RED";
                    x = x.parent;
                }

                else {
                    if (w.left.color === "BLACK") {
                        w.right.color = "BLACK";
                        w.color = "RED";
                        this.leftRotate(w);
                        w = x.parent.left;
                    }

                    w.color = x.parent.color;
                    x.parent.color = "BLACK";
                    w.left.color = "BLACK";
                    this.rightRotate(x.parent);
                    x = this.root;
                }
            }
        }

        x.color = "BLACK";
    }


         fixInsert(node) {

        while (node.parent && node.parent.color === 'RED') {

            let grandParent = node.parent.parent;

            // Parent is LEFT child
            if (node.parent === grandParent.left) {

                let uncle = grandParent.right;

                // CASE 1
                if (uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    grandParent.color = 'RED';
                    node = grandParent;
                }

                
                else {

                    // CASE 2
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }

                    // CASE 3
                    node.parent.color = 'BLACK';
                    grandParent.color = 'RED';
                    this.rightRotate(grandParent);
                }
            }

            // Parent is RIGHT child 
            else {

                let uncle = grandParent.left;

                if (uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    grandParent.color = 'RED';
                    node = grandParent;
                }

                else {

                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }

                    node.parent.color = 'BLACK';
                    grandParent.color = 'RED';
                    this.leftRotate(grandParent);
                }
            }
        }

        this.root.color = 'BLACK';
    }

    // Right rotate
    rightRotate(y) {
        let x = y.left;
        y.left = x.right;
        if (x.right !== this.NIL) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (y.parent === null) {
            this.root = x;
        } else if (y === y.parent.left) {
            y.parent.left = x;
        } else {
            y.parent.right = x;
        }
        x.right = y;
        y.parent = x;
    }

    leftRotate(x) {
        let y = x.right;
        x.right = y.left;
        if (y.left !== this.NIL) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

     search(data) {
        let node = this.root;
        while (node !== this.NIL) {
            if (data === node.data) return node;
            node = data < node.data ? node.left : node.right;
        }
        return this.NIL;
    }

    minimum(node) {
        while (node.left !== this.NIL) node = node.left;
        return node;
    }

    leftRotate(x) { /* same as before */ }
    rightRotate(y) { /* same as before */ }
}


    

let tree = new RBTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
console.log(tree);
tree.delete(20)
console.log(tree);
tree.search(10);




