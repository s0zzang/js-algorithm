/* -------------------------------------------------------------------------- */
/*                           다중 포인터 - isSubsequence                         */
/* -------------------------------------------------------------------------- */
// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다.
// 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

// Time Complexity - O(N + M)
// Space Complexity - O(1)

/* --------------------------------- 다중 포인터 --------------------------------- */
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
}

/* --------------------------------- for .. of -------------------------------- */
function isSubsequence2(str1, str2) {
  let i = 0;

  for (let char of str2) {
    if (char === str1[i]) i++;
    if (i === str1.length) return true;
  }

  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
