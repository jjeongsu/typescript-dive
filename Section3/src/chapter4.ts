/**
 * 타입 추론
 * - 타입 스크립트는 점진적 타입 시스템을 사용한다.
 */

let a = 10 // 초깃값을 기준으로 타입을 자동으로 "number"로 추론한다.
let [one, two, three] = [1, 'hello', false]

function funct(message = 'hello') {
  return 'hello'
}

//당황스런 상황

let d //any
d = 10 //number
d = 'hello' //string

//이것을 any type의 진화라고 한다

const num = 10 //number "literal" type

let arr = [1, '123'] // string, number union type
/**
 * 타입 넓히기 :
 *  타입을 추론 할 때, 상수를 넘버 리터럴타입이 아닌 넘버타입으로, 좀더 범용적으로 사용이 가능한 타입으로 추론하는것
 *
 */
