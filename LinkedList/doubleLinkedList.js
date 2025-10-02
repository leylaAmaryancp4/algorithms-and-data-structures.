class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  head = null;
  tail = null;
  size = 0;
  
  constructor(iterables) {
    if(iterables && Symbol.iterator in Object(iterables)){
      for(const item of iterables){
        this.push_back(item);

      }

    }

  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  clear() {
    this.head = this.tail = null;
    this.size = 0;
  }

  push_front(value) {
    const node = new Node(value);
    if(this.head === null){
      this.head = this.tail = node(value);
       }else{
        node.next = this.head;
        this.head.prev = node;
        this.head = node;

       }
       this.size++;
       return this;

    }
    
  
  push_back(value) {
    const node = new Node(value);
    if(this.head === null){
      this.head = this.tail =  node;
    }else{
      this.tail.next =  node;
  this.tail.next.prev = this.tail;
      this.tail = node;
    }
    this.size++;
    return this;
  }

  pop_front() {
    if(this.head === null)return undefined;
    
    const value = this.head.value;
      this.head = this.head.next;
      if(this.head)
{
  this.head.prev = null;
}else{
  this.tail = null;
}
this.size--;
      return value;
}
    

  pop_back() {
    if(this.head === null)return undefined;
    const value = this.tail.value;
    if(this.head === this.tail){
      this.head = this.tail = null;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    
    this.size--;
    return value;

    }

  front() {
    return this.head ? this.head.value : undefined;
  }
  back() {
    return this.tail ? this.tail.value : undefined;
  }

  at(index) {
    if(index < 0 || index >= this.size) return undefined;
    let current= this.head;
    for(let i = 0; i < this.size; ++i){
      if(i === index)return current.next;
      current = current.next;
    }
return undefined;
  }

  insert(index, value) {
    if(index < 0 || index > this.length)return undefined;
    if(index === 0)return this.push_front(value);
    if(index === this.size)return this.push_back(value);
    let current = this.head;
    for(let i = 0; i < this.size; ++i){
      if(i === index - 1){
        const newNode = new Node(value);
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        this.size++;
        return this;


      }
    }
  }
  erase(index) {
    if(index < 0 || index > this.length)return undefined;
    if(index === 0)return this.pop_front();
    if(index === this.size - 1)return this.pop_back();
    let current;
     if(index < this.size/ 2){
      current = this.head;
      for(let i = 0; i < index; ++i){
        current = current.next;
      }
    }else{
      current = this.tail;
    for(let i = this.size - 1; i > index; --i){
      current = current.prev;
    }
}
current.prev.next = current.next;
current.next.prev = current.prev;
this.length--;
return current.next;
    }
  
  remove(value, equals = Object.is) {
    if(this.head === null)return false;
    let current = this.head;
    while(current){
      if(equals(current.value, value)){
        if(current === this.head){
         this.pop_front();
        }else if(current === this.tail){
          this.pop_back();
          current = null;
        }else{
          current.next.prev = current.prev;
          current.prev.next = current.next;
          this.size--;

        }
        return true;
      }
      current = current.next;

    }
    return false;

  }
  reverse() {
    let current = this.head;
    let prev = null;
    this.tail = this.head;
    while(current){
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
    
  }
  sort(compareFn) {}


print(){
  let current = this.head;
  let arr =[];
  while(current){
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}
}



let obj = new LinkedList([1, 2, 3, 4]);
console.log(obj.print());
obj.push_front(0);
console.log(obj.print()); 
obj.pop_back();
console.log(obj.print()); 
obj.reverse();
console.log(obj.print()); 