//any
//특정 변수의 타입을 확실히 모를 때

let anyVar: any = 30
anyVar = 'lol'

//unknown
let unknownVar: unknown = 'getit'
unknownVar = 234
unknownVar = () => {}

//단, 다른 타입의 변수에 넣기 불가
let num: number = 123
//num = unknownVar //!ERROR

//타입 정제
if (typeof unknownVar === 'number') {
  //do something
}
