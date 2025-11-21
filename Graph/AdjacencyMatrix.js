class GraphMatrix{
    constructor(size,directed = false){
        this.size = size
        this.directed = directed
        this.matrix = Array.from({length: size}, ()=>Array(size).fill(0))
    }


    addVertex(){
        this.size++;

        //add colums
        for(let  i = 0; i < this.matrix.length; ++i){
            this.matrix[i].push(0);
}

//add rows
let newRow = Array(this.size).fill(0);
this.matrix.push(newRow);
    }

    addEdge(u,v){
        if( u < 0 || u >= this.size ||  v < 0 || v >= this.size){
            console.log("invalid vertex", u, v)
            return
        }
        this.matrix[u][v] = 1;

        if(!this.directed)
            this.matrix[v][u] = 1;
        


    }
    bfs(start){
        const queue = [start];
        let visited = Array(this.size).fill(0);
        let arr = []
        while(queue.length > 0){
            const item = queue.shift()
            if(visited[item])continue
            visited[item] = 1;
            arr.push(item)
            for(let i = 0; i < this.size; ++i){
if(this.matrix[item][i] !== 0  && !visited[i]){
    queue.push(i);

            }
        }

    }
    return arr;
}

dfsVertex(start){
    const visited = Array(this.size).fill(0);
    let arr = [];
    var dfs =(vertex)=>{
        if(visited[vertex])return ; // already visited

        visited[vertex ] = 1;// mark as visited
        arr.push(vertex);


        // Visit all neighbors
        for(let i = 0; i < this.matrix.length; ++i){
            if(this.matrix[vertex][i] !== 0 && !visited[i]){
                dfs(i);  // recursive call
            }
        }
    }
    dfs(start)
    return arr;


}

//Remove vertex:
 removeVertex(v){
    if(v < 0 || v >= this.size){
        console.log(" Not valid input")
        return
    }
    let n = this.size;
    let newMatrix = [];
    let r =  0;
    for(let i = 0; i < n; ++i){
        if(i === v )continue;
        newMatrix[r] = [];
        let c = 0;
        for(let j = 0; j < n; ++j){
            if(j === v)continue
            newMatrix[r][c] = this.matrix[i][j];
            c++
    }
    r++
 }
 this.matrix = newMatrix;
 this.size--;
  

}
 //
hasCycle(){
    let visited = Array(this.size).fill(0);
    let stack = Array(this.size).fill(0);
const dfs = (v) =>{
    visited[v] = 1;
    stack[v] = 1;

    for(let i = 0; i < this.size; ++i){
        if(this.matrix[v][i] === 1){
            if(!visited[i] && dfs(i)){
                return true;
            } else if(stack[i]){
                return true;
        }
    }
}
stack[v] = 0;
return false;


}
 for(let i = 0; i < this.size; ++i){
    if(!visited[i] && dfs(i))return true;

 }
 return false;
}




// Print adjacency matrix
print(){
        console.table(this.matrix);
    }
}
 let obj = new GraphMatrix(4);
 obj.addEdge(0,1);
 obj.addEdge(1,2)
 obj.addEdge(2,3);
 obj.addEdge(3,0);
 obj. addVertex();
  let result = obj.bfs(0)
  let res = obj.dfsVertex(0);
  console.log(result);
  console.log(res)
  obj.print();
  obj.removeVertex( 1)
  console.log(obj.hasCycle());
 obj.print();
 
 
 //output
 /*[ 0, 1, 3, 2 ]
[ 0, 1, 2, 3 ]
┌─────────┬───┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │
├─────────┼───┼───┼───┼───┼───┤
│ 0       │ 0 │ 1 │ 0 │ 1 │ 0 │
│ 1       │ 1 │ 0 │ 1 │ 0 │ 0 │
│ 2       │ 0 │ 1 │ 0 │ 1 │ 0 │
│ 3       │ 1 │ 0 │ 1 │ 0 │ 0 │
│ 4       │ 0 │ 0 │ 0 │ 0 │ 0 │
└─────────┴───┴───┴───┴───┴───┘
true
┌─────────┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │
├─────────┼───┼───┼───┼───┤
│ 0       │ 0 │ 0 │ 1 │ 0 │
│ 1       │ 0 │ 0 │ 1 │ 0 │
│ 2       │ 1 │ 1 │ 0 │ 0 │
│ 3       │ 0 │ 0 │ 0 │ 0 │
└─────────┴───┴───┴───┴───┘
*/


