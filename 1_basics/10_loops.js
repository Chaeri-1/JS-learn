/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i <10; i++){
  console.log(i);
}

console.log('----------------')

for(let i = 10; i > 0; i--){
  console.log(i);
}

console.log('----------------')

for(let i = 0; i < 3; i++){
  for(let j = 3; j > 0; j--){
    console.log(i, j);
  }
}

// *로 6x6 정사각형 출력
let square = '';
let side = 6;

for(let i = 0; i < side; i++){
  for(let j = 0; j < 6; j++){
    square += '*'
  }
  square +='\n'
}

console.log(square);

/**
 * for...in
 */

const yuJin = {
  name: '안유진',
  year: 2003,
  group: '아이브'
}

console.log('--------------------');

for(let key in yuJin){
  console.log(key);
}

/**
 * While
 */
let number = 0;

while(number < 10){
  number ++;
}

console.log(number);