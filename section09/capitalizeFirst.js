/* -------------------------------------------------------------------------- */
/*                                     재귀                                     */
/* -------------------------------------------------------------------------- */
// capitalizeFirst라는 재귀 함수를 작성하시오.
// 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.

function capitalizeFirst(arr) {
  if (!arr.length) return false;
  const toUpperCase = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  if (arr.length === 1) return toUpperCase;
  return [toUpperCase].concat(capitalizeFirst(arr.slice(1)));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

/* ----------------------------------- 솔루션 ----------------------------------- */
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
