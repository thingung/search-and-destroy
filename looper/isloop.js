'use strict';

//Complete this algo
// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 3 -> 4
// is 0 in node_list ?
   //no add it to the list
     // move to next node -> 1
// is 1 in node_list ?
  // no add it to the list
    // move to next node -> 2
// is 2 in node_list
    // no add it to the list
      // move to next node -> 3
// is 3 in node_list
// ...
// is 5 in node_list
  // no add it to the list
      // move to next node -> 3
// is 3 in node_list
  // yes
    // return true

const isLoop = (linkedlist) => {
  const node_list = {};
  let curr_node = linkedlist.head;
  while(curr_node !== null) {
    if(node_list[curr_node.value] === undefined) {
      node_list[curr_node.value] = curr_node
    } else {
      return true;
    }
    const temp = curr_node.next
    curr_node = temp;
  }
  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
