// 함수 타입 정의
// 함수를 설명하는 방법 :
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  // 반환값이 생략되어도 return 문 기준으로 추론됨
  return a + b
}

//화살표 타입의 함수 정의
const plus = (a: number, b: number): number => a + b

function introduce(name = 'kiki', height?: number) {
  //여기서 height는 선택적 매개변수
  // 선택적 매개변수는 name 과 같은 필수 매개별수 앞에 올 수 없다.
  console.log(`name is ${name}. and i'm ${height} tall`)
}

introduce('lulu', 127)

//여러개의 인수를 받아서 인수들의 합을 구하는 함수
function getSum(...rest: number[]) {
  let sum = 0
  rest.forEach((e, i) => (sum += e))
}
getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5) // 만약 3개만 받고 싶다면? ...rest: [number, number, number]
