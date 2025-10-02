class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(iterable){
        this.head = null;
        this.tail = null;
        this.length = 0;
        if(iterable){
            for(const item of iterable){
                this.push_back(item);
            }
        }
    }
        size(){
            return this.length;
        };
        isEmpty(){
            return this.length === 0;
        };
        clear(){
            this.head = this.tail = null;
            this.length = 0;
        };
        front(){
            return this.head ?this.head.value : undefined;
        };
        push_front(value){
            const newNode = new Node(value);
            if(this.head === null){
                this.head = this.tail = newNode;
            }else{
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
            }
        
        push_back(value){
            const newNode = new Node(value);
            if(this.tail === null){
                this.head = this.tail = newNode;
            }else{
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
            }
        
        pop_front(){
            if(this.head === null)return undefined;
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            if(this.length === 0)this.tail = null;
            return value;
        };
        pop_back(){
            if(this.tail === null) return undefined;
            if(this.length === 1){
                const value = this.tail.value;
                this.head = this.tail = null;
                this.length--;
                return value;
            }

            let current = this.head;
            while(current.next !== this.tail){
                current = current.next;
            }
            const value = this.tail.value;
            current.next = null;
            this.tail = current;
            this.length--;
            return value;
        };
        at(index){
            if(index > this.length || index < 0) return undefined;
            let current = this.head;
            for(let i = 0;i < index; i++){
                current = current.next;
            }
            return current.value;
        };
        insert(index, value){
            const newNode = new Node(value);
            if(index <= 0 || this.head === null){
                newNode.next = this.head;
                this.head = newNode;
                if(this.tail === null)
                    {this.tail = newNode;
                this.length++;
                    }
                return this;
            }
        };
        remove(){
            if(index < 0 || index > this.length - 1)return undefined;
            if(index === 0) return this.pop_front();
            if(index === this.length - 1)return this.pop_back();
            let current = this.head;
            for(let i = 0; i < index - 1; i++){
                current = current.next;
 }
        };
        erase(value){
            if(this.head === null)return false;
            if(this.head.value === value){
                this.pop_front();
                return true;
            }
            let current = this.head;
            while(current.next && current.next.value !== value){
                current = current.next;

            }
            if(current.next){
                if(current.next === this.tail){
                    this.tail = current;
                    this.length--;
                    return true;
                }
            }
            return false;

        };
        reverse(){
            let prev = null;
            let current = this.head;
            this.tail = this.head;
            while(current){
                const next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.head = prev;
            return this;
        };
        sort(comparFn =(a,b) =>a - b){
            this.head = this.merge(this.head,comparFn);

            let current  = this.head;
            while(current && current.next) current = current.next;
            this.tail = current;
            return this;
        }

        mergeTwoSortedLists(l1, l2, comparFn) {
        const dummy = new Node(null);
        let current = dummy;
        while (l1 && l2) {
            if (comparFn(l1.value, l2.value) <= 0) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = l1 || l2;
        return dummy.next;
    }


        merge(head, comparFn){ 
           if (!head || !head.next) return head; 

        // split list
        let [left, right] = this.splitList(head);

        // recursively sort halves
        left = this.merge(left, comparFn);
        right = this.merge(right, comparFn);

        // merge sorted halves
        return this.mergeTwoSortedLists(left, right, comparFn);
        };

        splitList(head) {
        let slow = head, fast = head, prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null; // cut list into two halves
        return [head, slow];
    }

        

        toArray(){
            const arr = [];
            let current = this.head;
            while(current){
                arr.push(current.value);
                current = current.next;
            }
            return arr;
        };
        
        [Symbol.iterator](){
            let current = this.head;
            return{
                next(){
                    if(current){
                        const value = current.value;
                        current = current.next;
                        return{value, done: false}
                    }else{
                       return{value : undefined, done: true}
                    }
                }
            }
        };


    
}

let list = new SinglyLinkedList([4, 1, 7, 3, 2]);
console.log("Before sort:", list.toArray()); 
// [4,1,7,3,2]

list.sort(); 
console.log("After sort:", list.toArray());  
// [1,2,3,4,7]

list.sort((a, b) => b - a); 
console.log("Descending:", list.toArray());  
// [7,4,3,2,1]