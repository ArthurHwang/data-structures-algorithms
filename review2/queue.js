class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.unshift(value);
  }

  dequeue(value) {
    this.data.pop();
  }
}

const queue = new Queue();

console.log(queue);

module.exports = Queue;
