/* -------------------------------------------------------------------------- */
/*                                   빈도수 세기                                 */
/* -------------------------------------------------------------------------- */
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다.
// 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)

// O(n^) : indexOf로 인해서
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  for (let str of str1) {
    if (str2.indexOf(str) < 0) return false;
    str2 = str2.replace(str, "");
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));

/* -------------------------------------------------------------------------- */
/*                                   빅오 해결법                                 */
/* -------------------------------------------------------------------------- */
// O(n) 해결법 : indexOf 사용 X, 문자열을 '객체'로 만들기
// for문이 중첩되지 않았음
function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};
  for (let i of first) lookup[i] ? (lookup[i] += 1) : (lookup[i] = 1);

  // first를 사용해서 만든 lookup을 second와 비교하여 이번엔 마이너스 하기
  for (let i = 0; i < second.length; i++) {
    if (!lookup[second[i]]) return false;
    lookup[second[i]] -= 1;
  }
  return true;
}
