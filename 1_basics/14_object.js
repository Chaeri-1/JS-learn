/**
 * Object , 객체
 */

//key: value pair
let yujin = {
  name : '안유진',
  group: '아이브',
  dance: function(){
    return `${this.name}이 춤을 춥니다.`;
  }
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin['name']);

const key = 'name';

console.log(yujin[key]);

console.log(yujin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function(){
    return `${this.name}이 춤을 춥니다.`
  }
}

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼터나 메서드는 변경할 수 있다.
 */

//모든 키값 다 가져오기
console.log(Object.keys(yuJin2));

//모든 벨류값 다 가져오기
console.log(Object.values(yuJin2));

const name = '안유진';

const yuJin3 = {
  name,
  //name : name과 동일
};
console.log(yuJin3);