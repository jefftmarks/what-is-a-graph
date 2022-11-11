[["a", "b", "c"], ["b", "d"]]

class Graph {
  constructor(paths) {
		this.graph = {};
		
		paths.forEach((path) => {
			for (let i = 0; i < path.length; i++) {
				// if key doesn't currently exist in graph
				if (!this.graph[path[i]]) {
					this.graph[path[i]] = new Set();
				}
				// if previous adjacent element, add to set
				if (path[i - 1]) {
					this.graph[path[i]].add(path[i - 1]);
				}
				// if next adjacent element, add to set
				if (path[i + 1]) {
					this.graph[path[i]].add(path[i + 1]);
				}
			}
		})
		
  }

  isAdjacent(vertexA, vertexB) {
		if (this.graph[vertexA]) {
			return this.graph[vertexA].has(vertexB);
		}
  }

  // array is an adjacency list
  addVertex(vertex, array) {
		this.graph[vertex] = new Set(array);
		array.forEach((el) => {
			if (!this.graph[el]) {
				this.graph[el] = new Set(vertex);
			} else {
				this.graph[el].add(vertex);
			}
		})
  }
}

if (require.main === module) {
  // add your own tests in here
  let graph = new Graph([]);

  console.log("Expecting: {}");
  console.log(graph.graph);

  console.log("");

  graph = new Graph([["a", "b", "c"], ["b", "d"]]);

  console.log('Expecting: { a: { "b" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b" }}');
  console.log(graph.graph);

  console.log("");

  console.log("Expecting: true");
  console.log(graph.isAdjacent("a", "b"));

  console.log("");

  console.log("Expecting: false");
  console.log(graph.isAdjacent("a", "c"));

  console.log("");

  graph.addVertex("e", ["a", "d"]);
  console.log('Expecting: { a: { "b", "e" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b", "e" }, e: { "a", "d" } }');
  console.log(graph.graph);

  console.log("")
}

module.exports = Graph;

// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * For each element in paths array:
 * Iterate through path:
 * 	- create new key with element and value of empty set
 * 	- add to that set any element before or after current element in path
 */
