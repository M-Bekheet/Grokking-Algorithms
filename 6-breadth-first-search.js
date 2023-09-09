/*
  Breadth First Search:
  - It works on graph and is used for: (finding the shortest path between 2 nodes & making sure that it does exist or not)
  - Time Complexity: O(number of nodes + number of edges)
  - Graph is a data structure between nodes through edges.
  - Edges are the linkage between nodes and could be directed if it's a 1 way edge A --> B and can be indirected if it's a 2 way edge A <---> B
  - Tree is a unique type of Graph in which the nodes are connected to each other in a directed way and no back-up in the reverse direction.
    Tree Example:
         A
        ↙ ↘
        B  C
          ↙↘
          D E
*/

/* 
  > Example: Find the mango seller in your network
*/

// Assumed graph
const network = {
  You: ["Jack", "Emy", "Alice"],
  Jack: [],
  Adam: ["Michelle"],
  Michelle: [],
  Michael: ["Michelle"],
  Emy: ["Jack", "Michael"],
  Alice: ["Adam"],
};

// Assumed Condition
const isSeller = (name) => name[name.length - 1] === "m";

// return the closest mangoes seller if found
const breadthFirstSearch = (name) => {
  const loop = (listToSearch = [], checkedBefore) => {
    if (listToSearch.length === 0) return "Not found";
    const [current, ...rest] = listToSearch;

    if (checkedBefore.has(current)) {
      return loop(rest, checkedBefore);
    }

    if (isSeller(current)) {
      return `${current} is the mangoes seller`;
    }

    checkedBefore.add(current);

    // Add personsFriends to the end of the listToSearch to loop through after finishing the `rest`
    const personFriends = network[current];

    return loop([...rest, ...personFriends], checkedBefore);
  };

  return loop(network[name], new Set());
};

// ================ //

function breadthFirstSearchBookVersion(name) {
  let listToSearch = network[name];
  const searched = new Set();
  while (listToSearch.length) {
    const person = listToSearch.shift(); //deque
    if (!searched.has(person)) {
      if (isSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      } else {
        searched.add(person);
        listToSearch.push(...network[person]);
      }
    }
  }
  return false;
}

console.log(breadthFirstSearch("You"));
// console.log(breadthFirstSearchBookVersion("You"));
