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

console.log(G.DFSRecursive('A'));

console.log(G.adjacencyList);
