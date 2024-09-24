/* ---------------------------------------------------------------- */
/*                              for문 사용                            */
/* ---------------------------------------------------------------- */
const twoSum = (nums, target) => {
  let arr = nums.sort((a, b) => a - b);
  let [left, right] = [0, arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[left] !== arr[right]) {
      if (arr[left] + arr[right] > target) {
        right--;
      } else if (arr[left] + arr[right] < target) {
        left++;
      } else return true;
    } else {
      return false;
    }
  }
  return false;
};

console.log(twoSum([4, 1, 9, 7, 5, 3, 16], 14));
console.log(twoSum([2, 1, 5, 7], 4));

/* ---------------------------------------------------------------- */
/*                            while문 사용                            */
/* ---------------------------------------------------------------- */
const twoSum2 = (nums, target) => {
  let arr = nums.sort((a, b) => a - b);
  let [left, right] = [0, arr.length - 1];

  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else return true;
  }
  return false;
};

console.log(twoSum2([4, 1, 9, 7, 5, 3, 16], 14));
console.log(twoSum2([2, 1, 5, 7], 4));
