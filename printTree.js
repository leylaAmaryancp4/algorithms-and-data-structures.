class Node{
constructor(val = 0, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
    
}
}

let root = new  Node(1);
root.left = new Node (2);
root.right =  new Node(3);


function print(node, space = 0, indent = 4){
    if(!node)return 0;
     space += indent;

     console.log(" ".repeat(space - indent) + node.val);

     if(node.right){
        console.log(" ".repeat(space - indent + 1) + "\\")
        print(node.right,space)
     }
     if(node.left){
        console.log(" " .repeat(space - indent + 1) + "/");
        print(node.left, space);
}
}
print(root);
