//대수타입 : 여러개의 타입을 합성에서 새롭게 만들어낸타입

// 1. 합집합 : union 타입

let a: string | number | boolean
a = 'hello'
a = 123
a = true

let arr: (number | string | boolean)[] = [1, 'hello', true]

type Dog = {
  name: string
  color: string
}

type Person = {
  name: string
  lang: string
}

type Union1 = Dog | Person

let union1: Union1 = {
  name: '',
  color: '',
}

let union2: Union1 = {
  name: '',
  color: '',
  lang: '',
}

// let union3: Union1 = {
//   name:'',
// }
// ! ERROR : Dog도 Person도 아닌 객체타입

// 2. 교집합 InterSection 타입
let variable: number & string // never타입
//기본 타입으로 교집합 타입을 만들면 거의 never타입에 해당한다.

type Intersection = Dog & Person
//Dog와 Person 타입의 프로퍼티를 모두 가지고 있어야 한다.
let intersection: Intersection = {
  name: 'hell',
  color: ' white',
  lang: 'ko',
}
