'use strict';

// Complete this algo

const binarySearch = (array, target) => {
	if(!Array.isArray(array)){
		return "-1"
	}
	if(typeof target !== "number") {
		return "error"
	}

	const midpoint = Math.floor(array.length / 2)
	if (array[midpoint] === target) {
		return true
	}

	if (array[midpoint] > target) {
		return binarySearch(array.slice(0, midpoint), target)
	} else if (array[midpoint] < target) {
		return binarySearch(array.slice(midpoint + 1), target)
	} else {
		return false
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
