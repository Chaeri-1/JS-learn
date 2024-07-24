/**
 * Hosting
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * 
 * var만 가능
 */
console.log('World');
console.log('-------');

console.log(name);
var name = '코드팩토리';
console.log(name);

//출력
//World
//-------
//undefined
//코드팩토리
