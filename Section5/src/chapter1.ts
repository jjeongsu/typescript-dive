// 인터페이스

interface IPerson {
  name: string
  age?: number //선택적 프로퍼티
  readonly introduce: string
  //sayHi: () => void;
  sayHi(): void
  sayHi(a: number, b: number): void //메소드에 오버로드를 정의하려면 호출시그니처 형식으로
}

const person: IPerson = {
  name: 'lee',
  age: 23,
  introduce: 'helo',
  sayHi: () => {
    console.log('say hello')
  },
}

person.sayHi()
person.sayHi(1, 2)
