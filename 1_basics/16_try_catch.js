/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다(throw)
 * 2) 명시적으로 인지할 때 -> 잡는다 (catch)
 */
function runner(){
  try{
    console.log('Hello');

    throw new Error('큰 문제가 생겼습니다!');

    console.log('code factory')
  }catch(e){
    console.log('----catch------')
  } finally{
    console.log('무조건 실행된다 오류 상관없음')
  }
}
runner();