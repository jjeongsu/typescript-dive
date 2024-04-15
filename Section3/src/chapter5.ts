/**
 *  타입 단언
 * */

type Person = {
  name: string
  age: number
}
let person = {} as Person //현재는 빈 객체이지만 Person 타입으로 취급
person.name = 'wella'
person.age = 27

type Dog = {
  name: string
  color: string
}

let dog = {
  name: ' kaka',
  color: 'brown',
  breed: '진도',
} as Dog

/**
 * 타입단언의 규칙
 * 값 as 단언 <- 단언식
 *  A as B
 * A가 B이 슈퍼타입이거나, 서브타입 이여야 함
 */

let num1 = 10 as never //number는 never의 슈퍼타입이기 때문에 타입단언이 잘 이루어짐
let num2 = 10 as unknown //number는 unkown의 서브타입이기 때문에 타입단언이 잘 이루어짐
//let num3 = 10 as string //number는 string과 겹치는 값이 없는, 교집합이 없는 타입관계이기 때문에 타입단언이 이루어지지 않음

/**
 * const 단언
 */

let num4 = 10 as const //변수를 const로 선언한 것과 동일하게 만들어줌

let cat = {
  //사용방법
  name: 'meow',
  color: ' yello',
} as const //모든 프로퍼티가 readonly가 됨

/**
 * Non Null 단언
 * 어떤값이 Null 이거나 undefined가 아니라고 알려주
 */
type Post = {
  title: string
  author?: string
}

let post: Post = {
  title: '게시글1',
  author: 'kaya',
}

//const len :number = post.author?.length; // !Error : undefined 값이 들어갈 수 있기 때문에 number 타입으로 확정할 수 없음
//-> non null 단언으로 바꾼다.

const length: number = post.author!.length // 개발자가 확실히 author가 있다고 보증하는것.
