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
};

const G = new module.exports.Graph();

G.addVertex('tokyo');
G.addVertex('usa');
G.addVertex('taiwan');
G.addEdge('tokyo', 'usa');
G.addEdge('tokyo', 'taiwan');
G.removeEdge('tokyo', 'usa');
G.removeVertex('taiwan');

console.log(G.adjacencyList);
