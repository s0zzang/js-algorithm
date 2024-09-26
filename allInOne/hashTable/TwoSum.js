/* ---------------------------------------------------------------- */
/*                        메모리 활용 : 객체 사용하기                       */
/* ---------------------------------------------------------------- */
/**
 * 더해서 두 숫자 합이 target인 값 찾기
 * 메모리 활용 : memo 객체를 만들기
 *
 * memo 객체에 nums 모두 저장
 * nums를 반복문으로 순회하며 더해서 target인 숫자가 있는지 확인
 *  - 있다면 true
 *  - 없다면 false
 */

const twoSum = (nums, target) => {
  const memo = {};
  for (let num of nums) memo[num] = null;
  for (let num of nums) {
    const partnerNum = target - num;
    if (partnerNum !== num && partnerNum in memo) return true;
  }
  return false;
};

console.log(twoSum([4, 1, 9, 7, 5, 3, 16], 14));
console.log(twoSum([4, 1, 9, 7, 3, 16], 14));
