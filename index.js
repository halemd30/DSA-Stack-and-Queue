class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node();
      return;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    if (!this.top) {
      console.log("stack is empty");
    }

    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

// 2 useful methods for a stack
function peek() {}

function isEmpty(Stack) {
  return stack.top === null;
}

function dispaly() {}
