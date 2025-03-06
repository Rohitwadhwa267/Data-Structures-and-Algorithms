// implement stack in js 



class Stack {
    constructor() {
        this.items = [];
        this.max = 5;
        this.top = -1;
    }

    size() {
        return this.items.length;
    }
    push(element) {
        if (this.top < this.max - 1) {
            this.top++;
            this.items[this.top] = element;
        }
        else {
            console.log('Stack is full');
        }
    }
    pop() {
        if (this.top === -1) {
            console.log('Stack is empty');
        }
        else {
            this.top--;
            return this.items[this.top + 1];
        }
    }
    peek() {
        if (this.top === -1) {
            console.log('Stack is empty');
        }
        else {
            return this.items[this.top];
        }
    }
    isEmpty() {
        return this.top === -1;
    }
    printStack() {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.items[i]);
        }
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.printStack();