/* -------------------------------------------------------------------------- */
/*                                   다중 포인터                                 */
/* -------------------------------------------------------------------------- */
// 정열된 배열
// 배열의 고유 값을 반환

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let first = 0;

  // 첫번째 인덱스와 마지막 인덱스 비교
  for (let second = 1; second < arr.length; second++) {
    if (arr[first] !== arr[second]) {
      // 값이 다르면 first의 값을 second의 값으로 변경
      first++;
      arr[first] = arr[second];
    }
  }
  return first + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// arr[0] - arr[1] 을 비교함
// 같음 : first + 1
// 다름 : res + 1, first = second
