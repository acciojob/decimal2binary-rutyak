function threeSum(nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        // Found an exact match, return the target sum
        return closestSum;
      } else if (sum < target) {
        // The sum is smaller than the target, move the left pointer
        left++;
      } else {
        // The sum is larger than the target, move the right pointer
        right--;
      }
    }
  }

  // Return the closest sum found
  return closestSum;
}

// Test the function with the given examp

