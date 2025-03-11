// Stack using linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0; // Track size of the stack
    }

    push(elem) {
        let node = new Node(elem);
        node.next = this.top;
        this.top = node;
        this.size++; // Increment the size when pushing an element
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return null; // Optionally throw an error instead
        }
        let elem = this.top.data;
        this.top = this.top.next;
        this.size--; // Decrease the size when popping an element
        return elem;
    }

    peek() {
        return this.top ? this.top.data : null; // Return top element or null if stack is empty
    }

    isEmpty() {
        return this.top === null; // Check if the stack is empty
    }

    size() {
        return this.size; // Return the current size of the stack
    }

    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return;
        }
        let current = this.top;
        let stackContents = [];
        while (current) {
            stackContents.push(current.data);
            current = current.next;
        }
        console.log(stackContents.join(' -> ')); // Optional: display stack in a more readable format
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.printStack(); // Output: 4 -> 3 -> 2 -> 1
