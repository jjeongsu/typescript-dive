//제네릭의 타입변수 활용하기

//example1
//2개의 타입 변수가 필요하다면 T,U 처럼 2개의 타입변수를 사용하자
function swap<T, U>(a: T, b: U) {
  return [b, a]
}

const [a, b] = swap('1', 2)

//example2
//다양한 배열타입을 인수로 받는 제네릭 함수를 만들어야 할 때
function returnFirstValue<T>(data: T[]) {
  return data[0]
}

let num = returnFirstValue([0, 1, 2]) //타입 number
let str = returnFirstValue(['sdf', 1, null]) //타입 string | number | null

//example3
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0]
}
let str2 = returnFirstValue2([1, 'hello', 'ynameis']) //❤️타입 number

//example4 ??
//타입 변수를 제한 : 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 두는것
function getLength<T extends { length: number }>(data: T) {
  return data.length
}

getLength('123')

getLength([1, 2, 3])

getLength({ length: 1 })
//getLength(undefined)
//getLength(null)
