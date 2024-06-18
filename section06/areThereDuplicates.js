/* -------------------------------------------------------------------------- */
/*               ₩빈도수 세기 / 다중 포인터 - areThereDuplicates                   */
/* -------------------------------------------------------------------------- */
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.
// 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

// 제약 조건:
// Time - O(n)
// Space - O(n)
// 보너스:
// Time - O(n log n)
// Space - O(1)

/* -------------------------------- 빈도 카운터 패턴 ------------------------------- */
function areThereDuplicates(...num) {
  // 배열로 만들기
  // const arr = [...num]; : 매개변수 받을 필요 없이 arguments로 하면 됨

  // 빈도 카운터 객체 생성
  const counter = {};
  for (let item of arguments) {
    counter[item] = (counter[item] || 0) + 1;
    if (counter[item] > 1) return true;
  }

  return false;
}

/* --------------------------------- 다중 포인터 --------------------------------- */
function areThereDuplicates2(...args) {
  // 순서대로 정렬
  args.sort((a, b) => a > b);

  // 포인트 지정
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }

  return false;
}

/* -------------------------------- one liner ------------------------------- */
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
  // Set(arguments) : arguments의 중복된 값을 제거하여 객체로 반환
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
