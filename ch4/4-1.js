/*
         1.9 String Rotation Master Solution
*/
/*        Testing Functions        */
function Graph() {
  this.nodes = [];
}

Graph.prototype.node = function(node) {
  this.nodes.push(node);
}

function Node(val) {
  this.val = val;
  this.edges = [];
}

Node.prototype.edge = function(node) {
  this.edges.push(node);
}

const graph = new Graph();

const SF = new Node('San Francisco');
const LA = new Node('Los Angeles');
const VEGAS = new Node('Vegas');
const NY = new Node('New York');
const SEATTLE = new Node('Seattle');
const PORTLAND = new Node('Portland');
const CHICAGO = new Node('Chicago');
const AUSTIN = new Node('Austin');
const PITTSBURGH = new Node('Pittsburgh');

graph.node(SF);
graph.node(LA);
graph.node(VEGAS);
graph.node(NY);
graph.node(SEATTLE);
graph.node(PORTLAND);
graph.node(CHICAGO);
graph.node(AUSTIN);
graph.node(PITTSBURGH);

SF.edge(LA);
SF.edge(VEGAS);
SF.edge(AUSTIN);
SF.edge(SEATTLE);
SF.edge(NY);
LA.edge(SF);
LA.edge(VEGAS);
LA.edge(AUSTIN);
VEGAS.edge(AUSTIN);
VEGAS.edge(PORTLAND);
AUSTIN.edge(CHICAGO);
AUSTIN.edge(NY);
AUSTIN.edge(PORTLAND);
NY.edge(CHICAGO);
NY.edge(SF);
NY.edge(SEATTLE);
NY.edge(LA);
SEATTLE.edge(PORTLAND);
SEATTLE.edge(SF);
SEATTLE.edge(CHICAGO);
CHICAGO.edge(NY);
CHICAGO.edge(AUSTIN);
PITTSBURGH.edge(NY);
PITTSBURGH.edge(CHICAGO);





/*           Individual Solutions                    */


// BRYAN

// input two nodes, source first, destination second

// starting at the source search for a route to get to the second

// if found return true, if not return false
        <-
a  -> b  -> d
  <-  |
      > c-> e

// Define findPath
function findPath(source, dest, graph, edge) {
  // if edge flag missing mark as root
  var root = edge !== undefined ? false : true;
  // mark node as visited
  source.visited = true;
  // is this the node i'm looking for
  if(source.val === dest.val){
    // if this is the node clean and return true
    source.visited = false;
    return true;
    // if this is not the node
  } else {
    // does this node have edges
    if(!source.edges.length){
      // if no return false
      return false;
    } else {
      // if yes iterate over edges
      for(let i = 0; i < source.edges.length; i++) {
        // call findPath on each edge not visited
        if(source.edges[i].visited === true) continue;
        if(findPath(source.edges[i], dest, null, true)) {
          // if path found
          // clean node
          source.visited = false;
          // return true
          return true;
        }
        // if not continue
      }
    }
  }
  // clean the graph
  if(root === true){
    graph.nodes.forEach((node) => node.visited = false);
  }
  // if no paths on edges return false
  return false;
}


// DELPHINE

function doesRouteExist(graph, startNode, endNode) {
//initialize a 'visited' object that's empty, and flag 'exists' starts at false
  var visited = {}, exists = false;
  //subroutine: takes current node as arg
  var checkConnections = function(currentNode) {
    //base case: if current node has no connections or connections all visited
    if (!currentNode.edges.length) {
    //return;
      return;
    }
    //mark current node as visited
    visited[currentNode.val] = true;
    //loop through current node's connections
    for (var i = 0; i < currentNode.edges.length; i++) {
      //if connection's value is same as endNode value
      if (currentNode.edges[i].val === endNode.val) {
        // set exists to true
        exists = true;
        // return
        return;
      }
      //if connection was not visited
      if (!visited[currentNode.edges[i].val]) {
        //call subroutine on connection
        checkConnections(currentNode.edges[i]);
      }
    }
  };
  //call subroutine with args
  checkConnections(startNode);
  //return exists flag
  return exists;
}
