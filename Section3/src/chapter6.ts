/**
 * 타입 좁히기
 * 조건문을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: 'string'
  age: 'string'
}

function func(value: number | string | Date | null | Person) {
  //value의 타입에 따라
  // Number 이면 toFixed적용
  // String 이면 toUpperCase 적용
  // Date 객체이면 getTime() 메소드 출력
  if (typeof value === 'number') {
    console.log(value.toFixed())
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase())
  } else if (value instanceof Date) {
    console.log(value.getTime())
  } else if (value && 'age' in value) {
    //Person 타입 판별
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }
}

// typeof vlaue === 'object'로 Date 객체의 타입가드를 하지 않는 이유
// typeof null 또한 결과로 object를 반환하기 때문에 조건문을 통화할 수 있으나
// value.getTime() 메소드를 사용할 수 없기 때문에 오류가 발생하기 때문이다.
// "값 intanceof 클래스"형식의 instanceof 연산자는 값이 클래스의 인스턴스인지를 확인하고 true/false를 도출한다.
// Person은 타입이므로 instanceof 타입을 사용할 수 없다.

// 객체를 판별할 때에는 Instanceof / in 을 활용하자
