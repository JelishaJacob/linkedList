class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0
    }

    // adding new node to the end of list
    append(value) {
        if (this.head === null) {
            const node = new Node(value);
            this.head = node;
            this.count++
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            const node = new Node(value);
            current.next = node;
            this.count++;
        }
    }
    // add new node at end
    prepend(value) {
        if (this.head === null) {
            const node = new Node(value);
            this.head = node;
            this.count++
        }
        else {
            const old = this.head;
            const node = new Node(value, old);
            this.head = node;
            this.count++;
        }
    }

    // size of linkedlist
    size() {
        return this.count
    }

    // display head node
    returnHead() {
        if (this.head !== null) {
            return this.head
        }
    }

    // display tail node
    tail() {
        let current = this.head
        while (current.next != null) {
            current = current.next
        }
        return current
    }

    // display node at given index
    at(index) {
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    // pop node from end
    pop() {
        if (this.head == null) {
            return 'Likedlist has no nodes'
        }
        else {
            let current = this.head
            let prev = current
            while (current.next != null) {
                prev = current
                current = current.next
            }
            prev.next = null
        }
    }

    // check wthether given value in linkedlist
    contains(value) {
        if (this.head === null) {
            return 'Linkedlist has no nodes';
        }
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // returns index of node containing value or null 
    find(value){
        if(this.head==null){
            return 'LinkedList has no nodes'
        }

        let current=this.head
        for(let i=0;i<this.count;i++){
            if(current.value==value){
                return i
            }
            current=current.next
        }
    }

    // to return linkedList as string
    toString(){
        let output=''
        let current=this.head
        while(current!=null){
            output+=`${current.value} ->`
            current=current.next
            
        }
        output+=`null`
        return output
    }

    // insert new given node value at given index
    insertAt(value,index){
        if(index>this.count){
            return 'invalid index'
        }
        if (this.head == null)
            return 'LinkedList has no nodes'

        let current=this.head
        let prev=current
        for(let i=0;i<index;i++){
            prev=current
            current=current.next
        }
        const node=new Node(value,current)
        prev.next=node
        this.count++
    }

    // remove node from given index
    removeAt(index){
        if(index>this.count){
            return 'invalid index'
        }
        if (this.head == null)
            return 'LinkedList has no nodes'
        
        let current=this.head
        let prev=current

        for(let i=0;i<index;i++){
            prev=current
            current=current.next
        }
        prev.next=current.next
        this.count--;
    }


}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


// Create a new linked list instance
const myList = new LinkedList();

// Append some values to the linked list
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.prepend(5)
console.log("Linked list : ",myList.toString());
myList.pop()
console.log("Linked list : ",myList.toString());
myList.insertAt(6,3)
console.log(myList.toString());

// Print the values of the linked list
console.log("Size of linkelist : ",myList.size());
console.log("Head Node : ",myList.returnHead());
console.log("Tail Node : ",myList.tail());
console.log("Node at Given index",myList.at(3));
// printLinkedList(myList)
console.log("CHheck whether value in linkedlist : ",myList.contains(3));
console.log("Index of given value in linkedlist : ",myList.find(3));
myList.removeAt(2)
console.log(myList.toString());



