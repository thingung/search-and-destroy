'use strict';

// Complete this algo
// const minJumps = arr => {
//   if( arr[0] - (arr.length -1) >= 0) return 1;



// };

const minJumps = arr => {
	let jumps = arr.map(el => Infinity)
	jumps[0] = 0;

	for(let i = 1; i < jumps.length; i++){
    console.log("I: jumps at", i, ":", jumps)
		for(let j = 0; j <= i; j++){
    console.log("J: jumps at", j, ":", jumps)
			if(j + arr[j] >= i) {
				jumps[i] = Math.min(jumps[i], jumps[j] + 1)
			}
		}
	}
	return jumps[arr.length - 1];
};

module.exports = minJumps

module.exports = minJumps

// https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/

//  {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
/*
  n = 11
  res = max number possible
  for(i = 9; 9 >= 0; i--)
    if(9 + 8 >= 11 -1)
      sub_res = minJumps(arr, 10)


*/
// {1, 3, 5}
/*
  n = 3
  res = max number possible
  for(i = 3 - 2; 1 >= 0; i--):w

    if(1 + 1 >= 2)
      sub_res = minJumps(, 2)
        n = 2
                  res = max number poss8ible
                    for(i = 0; 0 >= 0; i--)
                      if(1 >= 1)
                        sub_res = 0
                          res = min(max, sub_res + 1)
                  return 1
      sub_res = 1
      if(2 != max possible)
        res = min(1 and max) = 1
      for(i = 1; 1 >= 0; i--)
        if(1 + 3 > =)

*/
