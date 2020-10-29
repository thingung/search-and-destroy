'use strict';
//Complete this algo
const isLoop = (linkedlist) => {
	let firstNode = linkedlist.head
	let secondNode = firstNode.next;
	while(firstNode !== secondNode){
		if(firstNode === null || secondNode === null){
			return false
		}
		firstNode = firstNode.next
		secondNode = secondNode.next.next

	}
	return true
};


/*
EXTRA CREDIT:
Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!
*/
const findLoop = (linkedlist) => {

  let firstNode = linkedlist.head, secondNode = firstNode;
  let isLoop = false;
  
  // while the linked list doesn't terminate
  while (secondNode.next && secondNode.next.next) {
    
  	//increment node pointers following tortoise and hare strategy
    firstNode = firstNode.next;
    secondNode = secondNode.next.next;

    // if they meet, we have a loop!
    if (firstNode === secondNode) {
      isLoop = true;
      break;
    }
  }
	
  // if we have a loop, bring firstNode back to the head, and iterate at the same speed
  if (isLoop) {
    firstNode = linkedlist.head;
    while (firstNode !== secondNode) {
      firstNode = firstNode.next;
      secondNode = secondNode.next;
    }
    return firstNode;
  } else {
    return false;
  }
}


module.exports = {isLoop, findLoop}