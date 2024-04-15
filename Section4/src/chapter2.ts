/**
함수 타입 표현식 (function type expression)
*/

type Operation = (a: number, b: number) => number //함수의 타입을 정의

const add: Operation = (a, b) => a + b
const sub: Operation = (a, b) => a - b
const muliply: Operation = (a, b) => a * b

/**
 * 호출 시그니처 ** 이거 정말 많이 봄
 */

type Operation2 = {
  (a: number, b: number): number
}

// 함수 타입 정의
// Js 의 함수가 객체이기 때문에 객체 형태로 함수를 정의할 수 있다.
const add2: Operation2 = (a, b) => a + b
const sub2: Operation2 = (a, b) => a - b
const muliply2: Operation2 = (a, b) => a * b
