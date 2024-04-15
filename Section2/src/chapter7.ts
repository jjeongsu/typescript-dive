//void
//아무것도 없음을 의미하는 타입

function func1(): string {
  //반환값을 명시
  return 'hello'
}

function func2(): void {
  console.log('hello')
}

//never
//존재하지 않는, 불가능한 타입
function func3(): never {
  while (true) {} //무한루프를 도는 함수
} //정상적으로 종료할 수 없는 함수, 반환값이 없는게 정상인경우

function func4(): never {
  throw new Error()
}
