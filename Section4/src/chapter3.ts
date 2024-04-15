//함수타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?를 판단
// 1. 반환값의 타입이 호환 되는가
// 2. 매개 변수의 타입이 호환 되는가
// 두가지 기준이 모두 만족해햐 함

//1. 반환값이 호환 되는가
type A = () => number
type B = () => 10

let a: A = () => 10
let b: B = () => 10

a = b //okay
b = a // !ERROR 반환값 기준으로의 다운 캐스팅

//2. 매개변수가 호환 되는가
//2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void
type D = (value: 10) => void

let c: C = value => {}
let d: D = value => {}

c = d // !ERROR 매개변수기준으로는 업캐스팅
d = c // 매개변수 기준으로의 다운 캐스팅

type Dog = {
  //sub
  name: string
  color: string
}

type Animal = {
  //super
  name: string
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name)
}
let dogFunc = (dog: Dog) => {
  console.log(dog.name)
  console.log(dog.color)
}

animalFunc = dogFunc // 매개변수의 업캐스팅이 안되는 이유

//아래와 같은 상황이 만들어 지기 때문에
let testFunc = (animal: Animal) => {
  console.log(animal.name)
  console.log(animal.color) // Animal 타입에는 color 속성이 없다.
}

//2-2 매개변수의 개수가 다를 때
