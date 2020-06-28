module.exports.Queue = class {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue = (element) => {
    this.storage[this.tail] = element;
    this.tail++;
  };

  dequeue = () => {
    const removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  };
};
