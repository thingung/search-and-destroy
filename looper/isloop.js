'use strict';

// Complete this algo
const isLoop = (linkedlist) => {
  let firstNode = linkedlist.head;
  let secondNode = firstNode.next;

  while (firstNode !== secondNode) {
    if (firstNode === null || secondNode === null) {
      return false;
    }

    firstNode = firstNode.next;
    secondNode = secondNode.next.next;
  }

  return true;
};

/*
  EXTRA CREDIT:

  Write a function findLoop() that consumes a linkedList with a loop
  This function should return the Node value the loop begins at
  Remember to write some test specs too!

*/

const findLoop = (linkedlist) => {
  const observedValues = {};

  let currNode = linkedlist.head;
  let prevNode;

  while (currNode) {
    if (observedValues[currNode.value]) return prevNode;
    else observedValues[currNode.value] = 1;

    prevNode = currNode;
    currNode = currNode.next;
  }

  return false;
};

module.exports = {
  isLoop,
  findLoop
};
