module.exports.MaxBinaryHeap = class {
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
      if (this.values[index] < this.values[parentIdx]) break;
      this._swap(parentIdx, index);
      index = parentIdx;
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

      if (parentEl < leftEl && parentEl < rightEl) {
        const getLargerIdx = leftEl > rightEl ? leftIdx : rightIdx;
        this._swap(parentIdx, getLargerIdx);
        parentIdx = getLargerIdx;
      } else if (parentEl < leftEl) {
        this._swap(parentIdx, leftIdx);
        parentIdx = leftIdx;
      } else if (parentEl > rightEl) {
        this._swap(parentIdx, rightIdx);
        parentIdx = rightIdx;
      } else {
        break;
      }
    }
  };

  insert = (element) => {
    this.values.push(element);
    this._bubbleUp();
  };

  extractMax() {
    if (!this.values.length) return [];
    this._swap(this.values.length - 1, 0);
    const oldNode = this.values.pop();
    this._bubbleDown();
    return oldNode;
  }
};
