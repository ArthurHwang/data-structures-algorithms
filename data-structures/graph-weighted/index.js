const { PriorityQueue } = require('../priority-queue');

module.exports.WeightedGraph = class {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  };

  addEdge = (vertex1, vertex2, weight) => {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  };

  dijkstra = (start, finish) => {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;
    debugger;
    // Build state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // done
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  };
};

const WG = new module.exports.WeightedGraph();

WG.addVertex('A');
WG.addVertex('B');
WG.addVertex('C');
WG.addVertex('D');
WG.addVertex('E');
WG.addVertex('F');

WG.addEdge('A', 'B', 4);
WG.addEdge('A', 'C', 2);
WG.addEdge('B', 'E', 3);
WG.addEdge('C', 'D', 2);
WG.addEdge('C', 'F', 4);
WG.addEdge('D', 'E', 3);
WG.addEdge('D', 'F', 1);
WG.addEdge('E', 'F', 1);

WG.addEdge('A', 'B', 9);
console.log(WG.dijkstra('A', 'E'));

console.log(WG.adjacencyList);
