/*
  Dijkstra Algoirthm:
  - It works on **weighted** graphs and is used for: (finding the shortest path between nodes that are weighted)
  - No negative weights allowed
  - For negative weight graphs, consider Bellman Ford Algorithm
  - Particularly used in scenarios like routing and network optimization
  - Its steps:
    1- Initialization: Start with a source node that has a 0 weight(distance). Set other nodes to have Infinity weights.
    2- Select the node with the smallest tentative distance from the set of unvisited nodes as the current node.
    3- Explore Neighbors: For the current node, consider all of its neighbors. Calculate their tentative distances through the current node. If the newly calculated tentative distance is smaller than the current assigned value, update it.
    4- Mark as Visited: After considering all the neighbors of the current node, mark it as visited and remove it from the set of unvisited nodes.
    5- Repeat: Continue this process until you have visited all nodes or if the smallest tentative distance among the unvisited nodes is infinity (indicating that there is no path between the source node and the remaining unvisited nodes).

    Optimal Path: Once you've visited all nodes, you have the shortest path from the source node to all other nodes in the graph.
*/

/* 
  Example: Trading a book for a piano
*/

const graph = {
  book: {
    poster: 0,
    LP: 5,
  },
  poster: {
    drum: 35,
    guitar: 30,
  },
  LP: {
    guitar: 15,
    drum: 20,
  },
  drum: {
    piano: 10,
  },
  guitar: {
    piano: 20,
  },
};

// Initialization
const costs = {
  book: 0, //Source Node "Your Start Point" (Step 1)
  poster: Infinity,
  drum: Infinity,
  guitar: Infinity,
  LP: Infinity,
  piano: Infinity,
};

const parents = {};
const processed = [];

function dijkstra() {
  // The best next node (Step 2)
  let node = findTheLowestCostNode(costs);

  while (node) {
    let cost = costs[node];
    const neighbors = graph[node];

    // Explore Neighbors (Step 3)
    for (let neighbor in neighbors) {
      const newCost = cost + neighbors[neighbor];
      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    }
    // Mark as visited (Step 4)
    processed.push(node);

    //Repeat the while loop with the next node (Step 5)
    node = findTheLowestCostNode(costs);
  }
  drawPath();
}

function findTheLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const node in costs) {
    if (costs[node] < lowestCost && !processed.includes(node)) {
      lowestCost = costs[node];
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

// just for clarity
function drawPath() {
  console.log("Piano Cost: " + costs.piano);
  let targetNode = "piano";
  let path = "";
  while (targetNode) {
    path += targetNode;
    targetNode = parents[targetNode];
    if (targetNode) path += " <== ";
  }
  console.log(path);
}

dijkstra();
