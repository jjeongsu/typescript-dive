//타입 별칭

type User = {
  id: number
  name: string
  bio: string
}

let user: User = {
  id: 123,
  name: 'wella',
  bio: 'hello',
}

/** 주의할점
 * 동일한 스코프에 중복된 타입별칭을 선언할 수 없다.
 * 단, 함수와 같은 코드 블록 내, 외부에서는 중복된 타입별칭을 선언할 수 있다.
 */

//인덱스 시그니처
//key value의 규칙으로 유연하게 객체의 타입을 정의하기
type CountryCodes = {
  [key: string]: string
  // Korea: string; // OK, 반드시 필요한 값의 경우 추가로 명시한다.
  // Korea: number; //ERROR! 인덱스 시그니처의 value타입과 호환이 가능해야 한다.
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  England: 'uk',
}

let newCountryCodes: CountryCodes = {} // 빈 객체의 경우에도 에러가 뜨기 console.error('않는다',않는다)
