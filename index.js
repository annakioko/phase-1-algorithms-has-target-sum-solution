function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (target === array[i] + array[i + j]) {
        return true;
      }
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
   O(n) * O(n) + 1 = O(n2) + 1
*/

/* 
  Add your pseudocode here
  iterate through the first array
  iterate through the second array which starts with the second element of the array
  take element of fisrt array and add it to second array
  if result is equal to target
  return true
  else return false;
*/

/*
  Add written explanation of your solution here
   Check if the sum of two numbers in array adds up to the number provided
  by taking each element in that array and adding it to the preceding element
  if they add up to the target provided the program returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
