/* ---------------------------------------------------------------- */
/*                              괄호 유효성                             */
/* ---------------------------------------------------------------- */

/**
 * str = '[[({ })]]()'
 * 문자열을 반복문으로 돈다 -> o(n)
 * 열린 모양이라면 ([, (, {) 배열에 담는다
 *  -> 열린 모양의 괄호를 미리 만들어 놓고 비교한다? indexOf -> o(n)
 *  -> 답) 조건문으로 직접 문자열 비교하기
 *  -> 추가) 열린 모양의 괄호를 객체로 비교한다 -> o(1)
 * 닫힌 모양이라면 배열의 마지막 모양과 비교한다
 *  -> 같음 : pop()
 *  -> 다름 : return false
 *
 */

const validParentheses = (str) => {
  const arr = [];
  if (str.length % 2) return false;

  [...str].forEach((s) => {
    if (s === "{" || s === "(" || s === "[") arr.push(s);

    if (s === "}") {
      if (arr[arr.length - 1] === "{") {
        arr.pop();
      } else {
        return false;
      }
    }
    if (s === ")") {
      if (arr[arr.length - 1] === "(") {
        arr.pop();
      } else {
        return false;
      }
    }
    if (s === "]") {
      if (arr[arr.length - 1] === "[") {
        arr.pop();
      } else {
        return false;
      }
    }
  });

  return arr.length === 0;
};

console.log(validParentheses("[[{}]]()"));
console.log(validParentheses("[[{}]]("));
console.log(validParentheses("()[]{}"));

/* ---------------------------------------------------------------- */
/*                               짧은 버전                             */
/* ---------------------------------------------------------------- */
const validParentheses2 = (str) => {
  const arr = [];
  const par = { ")": "(", "}": "{", "]": "[" };
  if (str.length % 2) return false;

  for (s of str) {
    if (["(", "{", "["].includes(s)) arr.push(s);
    else if (par[s] && par[s] !== arr.pop()) return false;
  }

  return arr.length === 0;
};

console.log(true, validParentheses2("[[{}]]()"));
console.log(false, validParentheses2("[[{}]]("));
console.log(true, validParentheses2("()[]{}"));
console.log(false, validParentheses2("((())"));
console.log(true, validParentheses2("{}[()]([])"));
console.log(false, validParentheses2("{()}())"));
