'use strict';

// Complete this algo
const binarySearch = (array, target, left = 0, right = array.length) => {
  let toCheck = Math.floor((left + right) / 2);

  if (right < left) {
    return false;
  }

  if (array[toCheck] === target) {
    return true;
  } else if (array[toCheck] > target) {
    right = toCheck - 1;
    return binarySearch(array, target, left, right);
  } else {
    left = toCheck + 1;
    return binarySearch(array, target, left, right);
  }
};

/*
  EXTRA CREDIT:

  Can you augment the function above to run in constant O(1) space?
  This means, you cannot edit/copy the original array!
  How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
