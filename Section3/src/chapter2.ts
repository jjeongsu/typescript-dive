//기본타입간의 호환성

//객체 타입간의 호환성 : 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
type Animal = {
  //super, 조건이 더 적은 객체 타입이 슈퍼타입이 된다.
  name: string
  color: string
}

type Dog = {
  //sub
  name: string
  color: string
  breed: string
}

let animal: Animal = {
  name: '기린',
  color: 'brown',
}
let dog: Dog = {
  name: 'ki',
  color: 'white',
  breed: 'mixed',
}

animal = dog
//dog = animal // ! ERROR , 다운캐스팅
//Aniaml 타입이 Dog타입의 슈퍼타입이구나!

type Book = {
  name: string
  price: number
}

type CsBook = {
  name: string
  price: number
  skills: string
}

let book: Book
let csBook: CsBook = {
  name: 'react',
  price: 3300,
  skills: 'react.js',
}
book = csBook

//초과 프로퍼티 검사, 함수의 인수로 바로 전달하려고 할 때도 마찬가지
let book2: Book = {
  name: 'react',
  price: 3300,
  //skills: 'react.js', // ! ERROR, 초과프로퍼티
}

let book3: Book = csBook
