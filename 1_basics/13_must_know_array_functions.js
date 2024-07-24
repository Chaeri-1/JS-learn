/**
 * Array Functions
 */

let numbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
]

console.log(numbers);

//push()
numbers.push('100');
console.log(numbers.push('100'));
console.log(numbers);

//pop()
console.log(numbers.pop());
console.log(numbers);
//마지막 값 반환
//마지막 값 삭제된 배열
console.log('------------------');
//shift()
console.log(numbers.shift());
console.log(numbers);
//첫번째 값 반환
//첫번째 값 삭제된 배열

//unshift()
//push()랑 같은데 맨 앞에 넣어준다

console.log(numbers.splice(0, 3))
console.log(numbers);

let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];
//concat()

console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
//push와의 차이. concat는 새로운 배열에 넣은 것

//slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

//spread operator
let iveMembers2 =[
  ...iveMembers,
  '채리'
]

console.log(iveMembers2);

//join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));

//sort() 오름차순 정렬
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse())

let num = [
  1,
  9,
  7,
  5,
  3,
];
console.log(num);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면(뒤로) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면(앞으로) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
num.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(num);
//반대로 하면 내림차순이 되겠지요? ㅎㅎ

//map()
console.log('------------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) =>{
  if(x === '안유진') {
    return `아이브: ${x}`;
  }else{
    return x;
  }
}));

//원래 배열을 바꾸지는 않는다

//filter()
console.log(numbers.filter((x) => x % 2 ===0));

//find() 가장 첫번째에 나오는 것만 반환. 즉 조건에 해당하는 값을 찾으면 나머지는 찾지 않음
//findIndex()

//ruduce()
console.log(numbers.reduce((p, n) => p + n, 0))