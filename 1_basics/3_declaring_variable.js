/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 안씀
 * 2) let
 * 3) const
 */

var name = '채리채리';
console.log(name);

let uni = 'Hufs';
console.log(uni);

/**
 * let과 var로 선언하면
 * 값을 추후에 변경 가능
 */

uni = 'HUFS';
console.log(uni)

const city = 'Gunpo';
console.log(city);

//city = 'Seoul' 실행 불가

/**
 * 선언과 할당
 * 
 * 1) 변수 선언
 * 2) 할당
 * 동시에 가능. 선언만도 가능
 * 선언만 하면 undefined로 설정된다.
 * 하지만 const는 반드시 할당
 */


/**
 * Naming Conventions
 * 
 * 1) 일반적으로 영어/ 문자, 숫자 모두 사용 가능
 * 2) 특수기호 _, $ 사용 가능
 * 3) 숫자로 이름 시작 불가
 *  1Name, 2Hello
 * 4) 키워드는 변수명으로 사용 불가
 * 
 * 방식
 * 1) camelCase -> 가장 일반적
 * 2) snake_case -> 파이썬
 * 3) PascalCase -> C# 마으크로소프트 계열 언어에서 사용
 */
