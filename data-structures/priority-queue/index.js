class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

module.exports.PriorityQueue = class {
  constructor() {
    this.values = [];
  }

  _swap = (idx1, idx2) => {
    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  };

  _bubbleUp = () => {
    let index = this.values.length - 1;

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.values[index].priority <= this.values[parentIdx].priority) break;
      else {
        this._swap(parentIdx, index);
        index = parentIdx;
      }
    }
  };

  _bubbleDown = () => {
    let parentIdx = 0;

    while (parentIdx < this.values.length) {
      let leftIdx = 2 * parentIdx + 1;
      let rightIdx = 2 * parentIdx + 2;
      const parentEl = this.values[parentIdx];
      const leftEl = this.values[leftIdx];
      const rightEl = this.values[rightIdx];

      if (
        leftEl &&
        parentEl.priority < leftEl.priority &&
        rightEl &&
        parentEl.priority < rightEl.priority
      ) {
        const largerPriority =
          leftEl.priority > rightEl.priority ? leftIdx : rightIdx;
        this._swap(parentIdx, largerPriority);
        parentIdx = largerPriority;
      } else if (leftEl && parentEl.priority < leftEl.priority) {
        this._swap(parentIdx, leftIdx);
        parentIdx = leftIdx;
      } else if (rightEl && parentEl.priority > rightEl.priority) {
        this._swap(parentIdx, rightIdx);
        parentIdx = rightIdx;
      } else {
        break;
      }
    }
  };

  enqueue = (value, priority) => {
    this.values.push(new Node(value, priority));
    this._bubbleUp();
  };

  dequeue() {
    if (!this.values.length) return [];
    this._swap(this.values.length - 1, 0);
    const oldNode = this.values.pop();
    this._bubbleDown();
    return oldNode;
  }
};
