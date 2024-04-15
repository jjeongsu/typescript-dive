// 조건부 타입

type A = number extends string ? string : number //number

type ObjA = {
  a: number
}

type ObjB = {
  a: number
  b: number
}

type B = ObjB extends ObjA ? number : string //number

//제네릭과 조건부 타입
//ex1
type StringNumberSwitch<T> = T extends number ? string : number

let varA: StringNumberSwitch<number> = 'asdf'
let varB: StringNumberSwitch<string> = 1234

// ex2
function removeSpaces<T>(text: T): T extends string ? string : undefined //오버로드 시그니처
function removeSpaces<T>(text: any) {
  if (typeof text === 'string') {
    return text.replace(' ', '')
  } else {
    return undefined
  }
}

let result = removeSpaces('hie im juju')
result.toUpperCase()
let result2 = removeSpaces(undefined)
