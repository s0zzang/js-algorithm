/* ---------------------------------------------------------------- */
/*                            더 따뜻한 날 찾기                            */
/* ---------------------------------------------------------------- */

/**
 * 온도 배열이 주어짐
 * 스택 배열 선언
 * 온도 배열을 순회하는 반복문
 * 온도가 스택의 마지막 온도보다
 *  - 높으면 스택의 마지막 온도 pop
 *  - 낮으면 스택의 마지막 온도로 push
 * 며칠만에 따뜻해졌는지 확인하기 위해 push할 때 인덱스 함께 저장하기
 *  - 정답 배열에 온도 인덱스 - 스택의 마지막 인덱스 값 저장
 */

const dailyTemperatures = (temp) => {
  const stack = [];
  const res = Array(temp.length).fill(0);
  for (let i = 0; i < temp.length; i++) {
    while (stack.length && stack[stack.length - 1].temp < temp[i]) {
      res[stack[stack.length - 1].day] = i - stack[stack.length - 1].day;
      stack.pop();
    }
    stack.push({ day: i, temp: temp[i] });
  }
  return res;
};

console.log(dailyTemperatures([73, 71, 69, 67, 72, 74]));

/* ---------------------------------------------------------------- */
/*                          pop의 반환값 활용                           */
/* ---------------------------------------------------------------- */
const dailyTemperatures2 = (temp) => {
  const stack = [];
  const res = Array(temp.length).fill(0);
  for (let i = 0; i < temp.length; i++) {
    while (stack.length && stack[stack.length - 1].temp < temp[i]) {
      const { day } = stack.pop();
      res[day] = i - day;
    }
    stack.push({ day: i, temp: temp[i] });
  }
  return res;
};

console.log(dailyTemperatures2([73, 71, 69, 67, 72, 74]));
console.log(dailyTemperatures2([30, 40, 50, 60]));
