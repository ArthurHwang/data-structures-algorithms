module.exports.Graph = class {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  };

  addEdge = (vertex1, vertex2) => {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  };

  removeEdge = (vertex1, vertex2) => {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (dest) => dest !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (dest) => dest !== vertex1
    );
  };

  removeVertex = (vertex) => {
    for (const key of Object.keys(this.adjacencyList)) {
      this.removeEdge(vertex, key);
    }
    delete this.adjacencyList[vertex];
  };

  DFSRecursive = (start) => {
    const result = [];
    const visited = {};
    const traverse = (vertex) => {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          traverse(neighbor);
        }
      });
    };
    traverse(start);
    return result;
  };

  DFSIterative = (start) => {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  };

  BFS = (start) => {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  };
};

const G = new module.exports.Graph();

G.addVertex('A');
G.addVertex('B');
G.addVertex('C');
G.addVertex('D');
G.addVertex('E');
G.addVertex('F');

G.addEdge('A', 'B');
G.addEdge('A', 'C');
G.addEdge('B', 'D');
G.addEdge('C', 'E');
G.addEdge('D', 'E');
G.addEdge('D', 'F');
G.addEdge('E', 'F');

// console.log(G.DFSRecursive('A'));
console.log(G.DFSIterative('A'));
console.log(G.BFS('A'));

// console.log(G.adjacencyList);
