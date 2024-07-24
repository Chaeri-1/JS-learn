/**
 * DYR
 * D: Don't
 * R: Repeat
 * Y: Yourself
 */
function cal(num) {
  console.log((num * 10 / 2 % 3).toString());
}

cal(4);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 * 
 * 위의 예에서 Parameter: num, argument: 4
 */

function multiply(x, y = 10){
  console.log(x * y);
}

multiply(2, 4);
multiply(2); //y의 defaul값 10

//반환받기, return

function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

//Arrow 함수

const multiply = (x, y) => {
  return x*y
}

const multiply = (x, y) => x*y;
//위와 동일