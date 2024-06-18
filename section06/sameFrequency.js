/* -------------------------------------------------------------------------- */
/*                           빈도수 세기 - sameFrequency                         */
/* -------------------------------------------------------------------------- */
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// Time: O(N)

function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  // 문자열로 변환
  a = a.toString();
  b = b.toString();
  if (a.length !== b.length) return false;

  // 자리수 확인
  if (a.length !== b.length) return false;

  // 빈도 객체 생성 및 세팅
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of a) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    // {1: 1, 8: 1, 2: 1}
  }
  for (let val of b) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    // {2: 1, 8: 1, 1: 1}
  }

  // 빈도 확인
  for (let key in frequencyCounter1) {
    // if (!key in frequencyCounter2) return false; : 없어도 됨
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
