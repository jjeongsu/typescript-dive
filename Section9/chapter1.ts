// 분산적인 조건부 타입

type StringNumberSwitch2<T> = T extends number ? string : number

let var1: StringNumberSwitch<number> = 'asdf'
let var2: StringNumberSwitch<string> = 1234

let var3: StringNumberSwitch2<number | string>
// number와 string이 각각 분리되어서 T에 들어간다. -> 분리된 결과를 다시 union으로 묶는다.

let d: StringNumberSwitch<boolean | number | string>

// ex
type Exclude2<T, U> = T extends U ? never : T

type one = Exclude2<number | string | boolean, string>
//결과에 never가 있으면 그냥 사라짐
// 유니온 타입에서 U인 string 만 제거된 타입이 됨

type Extract2<T, U> = T extends U ? T : never

type two = Extract2<number | string | boolean, string>
// 유니온 타입에서 U인 string 만 추출된 타입이 됨
