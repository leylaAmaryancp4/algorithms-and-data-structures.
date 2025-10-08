class Deq{
    constructor(buckets = 4, bucketSize  = 8){
        this.buckets = buckets;
        this.bucketSize = bucketSize;
        this.map = new Array(buckets).fill(null).map(()=> new Array(bucketSize).fill(null));
       
        this.middle = Math.floor(buckets / 2);
        this.front_Bucket = this.middle;
        this.back_Bucket = this.middle;
        
        this.frontIndex = Math.floor(bucketSize / 2);
        this.backIndex = this.frontIndex + 1;
    }

    resize(){
        const newBuckets = this.buckets * 2;
        const newMap = new Array(newBuckets).fill(null).map(()=> new Array(this.bucketSize).fill(null));
        const offset = Math.floor((newBuckets - this.buckets) / 2);
        for(let i = 0; i < this.buckets; ++i){
            newMap[i + offset] = this.map[i];
        }
        
        this.front_Bucket += offset;
        this.back_Bucket += offset;
        this.buckets = newBuckets;
        this.map = newMap;
        
        return this;
        

    }
        

        push_front(val){
            this.frontIndex--;
            if(this.frontIndex < 0){
                this.front_Bucket--;
                this.frontIndex = this.bucketSize - 1;
                if(this.front_Bucket < 0){
                   this.resize();
                   this.front_Bucket = 0;
                }
                }
                this.map[this.front_Bucket][this.frontIndex] = val;
                return this;
        }
        push_back(val){
            this.backIndex++;
            if(this.backIndex >=  this. bucketSize){
                this.back_Bucket++;
                this.backIndex = 0;
                if(this.back_Bucket >=this.buckets){
                 this.resize();
                 this.back_Bucket = this.buckets - 1;

                }
            }
            this.map[this.back_Bucket][this.backIndex] = val;
            
            return this;
        }
        pop_front(){
        const val = this.map[this.front_Bucket][this.frontIndex];
        if(val === null) return null;

        this.map[this.front_Bucket][this.frontIndex] = null;
        this.frontIndex++;
        if(this.frontIndex >= this.bucketSize){
            this.front_Bucket++;
            this.frontIndex = 0;
        }
        return val;
        }

        pop_back(){
            const val = this.map[this.back_Bucket][this.backIndex];
            if(val === null) return null;
             this.map[this.back_Bucket][this.backIndex] = null;
             this.backIndex--;
             if(this.backIndex < 0){
                this.back_Bucket--;
                this.backIndex = buketSize - 1;

             }
             return val;

        }
         
    }   
    
let obj = new Deq();
obj.push_front(1);
obj.push_front(2);
obj.push_front(3);
obj.push_front(4);
obj.push_front(5);
obj.push_front(6);
obj.push_front(7);
obj.push_front(30)
obj.push_back(8);
obj.push_back(9);
obj.push_back(10);
obj.push_back(11);
obj.pop_front();
obj.pop_front();
obj.pop_front();
obj.pop_back();
console.log(obj);



