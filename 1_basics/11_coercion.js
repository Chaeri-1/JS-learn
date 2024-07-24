/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

//명시화
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
let test = age + "";
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);
//이 부분은 기능적으로는 가능하지만 실제 코드 짤때 사용하면 개발자들끼리의 큰 소통 오류를 가져올 수 있다.
//버그를 만들지 않도록 알려주는 것이니 주의해서 발생하지 않도록 하자!

/**
 * 명시적 변환 몇가지 더 배우기
 */

console.log(typeof (99).toString, (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'))
console.log(typeof +'1', +'1'); // number 1

console.log('-----------------------')
/**
 * Boolean 타입으로의 변환
 */
console.log(!! 'x') //string 안에 값 있다면 true, 없으면 false

console.log(!!0); //false;
console.log(!!undefined); //false;
console.log(!!null); //false;

console.log(!!{}); //항상 true
console.log(!![]); //항상 true