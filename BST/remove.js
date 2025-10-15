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
        getmin(node){
            if(!node)return null;
            while(node.left){
                node = node.left
            }
            return node;
        }

        remove(key){

             // Step 1: find the node and its parent
            let parent = null;
            let current = this.root;
            while(current && current.data !== key){
                 parent = current;
            
                if(key < current.data)current = current.left;
                else current = current.right;

            }
                
        
            if(!current)return false;

             // Case 1: Node is a leaf
             if(!current.left  &&  !current.right){
                if(!parent) this.root = null;
                else if(parent.left === current)parent.left = null;
                else parent.right = null;
             }

             // Case 2: Node has one child
else if(!current.left || !current.right){
    const child = current.left  ? current.left:current.right;
    if(!parent)this.root = child;
    else if(parent.left === current)parent.left = child;
    else parent.right = child;
}
// Case 3: Node has two children
else{
let successorParent = current;
let successor = current.right;
while(successor.left){
    successorParent = successor;
    successor = successor.left;
}
current.data  = successor.data;

if(successorParent.left === successor)
    successorParent.left = successor.right;
else 
    successorParent.right = successor.right;

}
return true;

        }
    } 

    const bst = new Node();
bst.root = new ListNode(10);
bst.root.left = new ListNode(5);
bst.root.right = new ListNode(15);
bst.root.left.left = new ListNode(2);

console.log(bst.remove(2));  // true  (leaf)
console.log(bst.remove(5));  // true  (one child)
console.log(bst.remove(10)); // true  (two children)
console.log(bst.remove(50)); // false (not found)