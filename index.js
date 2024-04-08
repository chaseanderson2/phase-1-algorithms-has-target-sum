function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
The first for loop iterates over each element in the array, which takes O(N) time, where N 
is the number of elements in the array. The second nested for loop also iterates over the 
remaining elements in the array, but the number of iterations decreases with each iteration 
of the outer loop. The number of iterations for the inner loop can be approximated to N/2 + 
N/3 + N/4 + ... + N/N. This series is known as the harmonic series and its sum is 
approximately O(log N). Within the nested loops, the check array[i] + array[j] === target 
takes O(1) time. Therefore, the overall time complexity of the hasTargetSum function is 
O(N * log N).
*/

/* 
  create function that takes an array and target as an argument {
    create a nested loop {
      check over each element in the array {
        check over the remaining elements in the array {
          check if the current pair of numbers add up to the target {
            if a pair is found, return true
          }
        }
      }
    }
    if a pair is not found, return false
  }
    
*/

/*
  For my solution, i decided to use a nested loop to iterate over each pair of numbers inside
  of the array to see if their sum is the same as the target number. The first thing my nested
  loop does is iterate over each element in the array. Then it will iterate over the remaining
  elements in my array. After that, it looks to see if the current pair of numbers have a sum 
  that is equal to the target number. After it checks to see if any of the pairs add up to the
  target sum, it will return true if one or more sets do. It will return false if none of them
  add up to the target sum.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 5, 6, 10], 11));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 4, 6, 8], 15));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
