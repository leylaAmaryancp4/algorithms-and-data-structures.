class GraphList{
    constructor(size, isDirected = false){
        this.size = size;
        this.isDirected = isDirected;
        this.list = Array.from({length: size}, ()=>[])
    }
    addVertex(){
        this.list.push([])
        this.size++;
    }
    addEdge(u, v){
        if(u < 0 || u >= this.size || v < 0 || v >= this.size){
            console.log("invalid input", u, v)
            return;
        }
        this.list[u].push(v);
        if(!this.isDirected){
            this.list[v].push(u);
        }

    }

    bfs(start){
        if(start < 0 || start>= this.size)return[];
        
        const visited =  Array(this.size).fill(false);
        const queue = [start];
        let result = [];
        while(queue.length > 0){
            let item = queue.shift();
            if(visited[item])continue;

            visited[item] = true;
            result.push(item)

            for(let neighbor of this.list[item]){
                if(!visited[neighbor])queue.push(neighbor);
            }

        }
        return result;
    }

    dfs(start){
        if(start < 0 || start > this.size)return [];
        let visited = Array(this.size).fill(false);
        let result = [];

        const dfsVisit = (v)=>{
            if(visited[v])return;
                visited[v] = true;
                result.push(v)

                for(let neighbor of this.list[v]){
                    dfsVisit(neighbor)
                }
        }
        dfsVisit(start);
        return result;
    }

removeVertex(v){
    if(v < 0|| v >= this.size){
        console.log("invalid vertex", v);
        return;
    }
    for(let i = 0; i < this.size; ++i){
        this.list[i] = this.list[i].filter(neighbor =>neighbor !== v);

    }

    this.list.splice(v, 1);
    this.size--;

    for(let i = 0; i < this.size; ++i){
        this.list[i] = this.list[i].map(neighbor=>(neighbor > v ? neighbor - 1 : neighbor));
    }
    
}


    print(){
        this.list.forEach((neighbors, i) =>{
            console.log(`${i}:[${neighbors.join(',')}]`)
        })
    }

}
 const g = new GraphList(4, false);
 
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 3);

g.addVertex();
g.addEdge(3, 4);

g.print();

console.log("BFS from 0:", g.bfs(0)); 
console.log("DFS from 0:", g.dfs(0));

g.removeVertex(2);
g.print();

/*
0:[1,2]
1:[0,2]
2:[0,1,3]
3:[2,4]
4:[3]

BFS from 0: [ 0, 1, 2, 3, 4 ]
DFS from 0: [ 0, 1, 2, 3, 4 ]
// after remove Vertex
0:[1]
1:[0]
2:[3]
3:[2]
*/ 

