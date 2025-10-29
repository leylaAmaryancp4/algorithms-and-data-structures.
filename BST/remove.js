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
        getMin(node){
            if(!node)return null;
            while(node.left){
                node = node.left
            }
            return node;
        }

         

        remove(value){
this.root = this._delete(this.root,value)
        }
    _delete(node,value){
        if(!node)return null;
        if(value < node.data){
            node.left = this._delete(node.left,value)
        }else if(value > node.data){
            node.right = this._delete(node.right, value);
        }else{
            if(!node.left || !node.right){
                return node.left || node.right;
        }
        const successor =this.getMin(node.right);
        node.data = successor.data;
        node.right  = this._delete(node.right, successor.data)
    }
    return node;


}
            
    }


     const bst = new Node();
bst.root = new ListNode(10);
bst.root.left = new ListNode(5);
bst.root.right = new ListNode(15);
bst.root.left.left = new ListNode(2);

bst.remove(2);  // true  (leaf)
bst.remove(5);  // true  (one child)
bst.remove(10); // true  (two children)
bst.remove(50); // false (not found)
console.log(bst.root);
