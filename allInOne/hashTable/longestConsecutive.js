/* ---------------------------------------------------------------- */
/*                        가장 길게 연속되는 숫자 찾기                       */
/* ---------------------------------------------------------------- */
/* ------------------------- 1. 해시 테이블 사용 ------------------------- */
/**
 * nums = [100,4,200,1,3,2]
 * 정렬을 사용하지 않고 딕셔너리에 메모하여 다음 연속 숫자가 있는지 확인
 */
const longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  let res = 0;
  const numSet = new Set(nums);
  console.log(numSet);
  const memo = {};
  for (let num of nums) memo[num] = 1;
  for (let num of nums) {
    // 시간복잡도 감소를 위해 연속된 수의 첫번째 요소인지 판별
    if (!(num - 1 in memo)) {
      let count = 1;
      let target = num + 1;
      while (target in memo) {
        count++;
        target++;
      }
      res = Math.max(count, res);
    }
  }
  return res;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([]));

/* --------------------------- 2. 정렬 사용 --------------------------- */
/**
 * 정렬
 * 정렬된 배열 반복문 실행
 *  - 현재 숫자 + 1이 다음 숫자인지
 *    - 다음 숫자라면 res.현재숫자 +1
 *    - 아니라면 res.현재숫자 = 1
 */
const longestConsecutiveSort = (nums) => {
  if (!nums.length) return 0;
  let res = {};
  let firstNum = 0;
  nums.sort((a, b) => a - b); // o(n log n)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) res[firstNum] += 1;
    else {
      firstNum = nums[i];
      res[firstNum] = 1;
    }
  }
  return Math.max(...Object.values(res));
};

console.log(longestConsecutiveSort([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSort([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutiveSort([]));

/* --------------------------- 3. set 활용 -------------------------- */
const longestConsecutiveSet = (nums) => {
  if (!nums.length) return 0;
  let res = 0;
  const numSet = new Set(nums);
  for (let num of nums) {
    // 시간복잡도 감소를 위해 연속된 수의 첫번째 요소인지 판별
    if (!numSet.has(num - 1)) {
      let count = 1;
      let target = num + 1;
      while (numSet.has(target)) {
        count++;
        target++;
      }
      res = Math.max(count, res);
    }
  }
  return res;
};

console.log(longestConsecutiveSet([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSet([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutiveSet([]));
