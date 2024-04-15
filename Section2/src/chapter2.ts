//배열
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ['hello', 'nice', 'you']
let boolArr: Array<boolean> = [true, false, true] //<> generic

// 배열 내 요소 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'hello'] // () union type

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]

// 튜플 : 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]
//tup1 = [1, 2, 3] //!ERROR
//tup2 = ['je', 'we'] //!ERROR
//별도로 존재하는 자료형이 아닌 배열이다. Array 메서드 사용가능
tup1.push() //주의
tup1.pop() // 주의
