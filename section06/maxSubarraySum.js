/* -------------------------------------------------------------------------- */
/*                       Sliding Window - maxSubarraySum                      */
/* -------------------------------------------------------------------------- */
// 정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 maxSubarraySum이라는 함수를 작성하세요.
// 하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요. 아래 첫 번째 예제에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.

// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
  // 예외 처리
  if (arr.length < num) return null;

  // 창문 만들기
  let max = 0;
  for (let i = 0; i < num; i++) max += arr[i];

  // 창문 비교
  let temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(temp, max);
  }

  return max;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
