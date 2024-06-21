/* -------------------------------------------------------------------------- */
/*                                     재귀                                     */
/* -------------------------------------------------------------------------- */
// 문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.

function reverse(str) {
  if (!str.length) return "";
  return str[str.length - 1].concat(reverse(str.slice(0, -1)));
}

reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'

/**
 * 문자열의 마지막 문자열 제거하는 방법 : 문자열.slice(0, -1)
 */
