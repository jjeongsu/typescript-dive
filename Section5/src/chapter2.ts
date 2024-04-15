//interface 확장

// interface Animal {
//   name: string
//   age: number
// }

// interface Dog {
//   name: string
//   age: number
//   isBark: boolean
// }

// interface Cat {
//   name: string
//   age: number
//   isScratch: boolean
// }

// interface Chicken {
//   name: string
//   age: number
//   isFly: boolean
// }

//name, age와 같은 중복된 프로퍼티 정의가 등장 -> 비효율적

interface Animal {
  name: string
  age: number
}

interface Dog extends Animal {
  //확장이란 기존의 것을 가지고 잇는 상태에서 추가한다는 것
  isBark: boolean
  name: 'lij' //string literal 타입으로 재정의
  //원본 프로퍼티 타입의 서브타입으로만 재정의 해야 한다.
}

const dogg: Dog = {
  name: 'lij',
  age: 12,
  isBark: false,
}

interface Cat {
  name: string
  age: number
  isScratch: boolean
}

interface Chicken {
  name: string
  age: number
  isFly: boolean
}
