function func(value: any) {
  return value
}

let num = func(10)
let str = func('hello')

num.toUpperCase() //any타입으로 추론되어 버려서 string타입 메서드를 사용해도 오류를 감지 console.error('못함',못함)

//제네릭 함수 = 두루두루 함수
function funct<T>(value: T): T {
  return value
}

let num2 = funct(10)
