function unkownExam() {
  //unknown 타입은 모든 타입의 슈퍼타입이므로 모든 타입을 다 넣을 수 있다. 모든 타입이 업캐스팅이 가능하다.
  let a: unknown = 1 // upcasting
  let b: unknown = null

  let unknownVar: unknown
  //let num :number = unknownVar //downcasting

  //never 타입은 모든 타입의 서브타입, 집합에서는 공집합에 속한다.
  function neverExam() {
    function neverFunc(): never {
      while (true) {}
    }
    let num: number = neverFunc() //모든 타입에 never type을 넣을 수 있음
    let str: string = neverFunc()
    //어떤 값도 저장되어선 안돼는 변수에 활용하면 좋다
  }

  //Void
  function voidExam() {
    function voidFunction(): void {
      console.log('hi')
      return undefined
    }
    let voidVar: void = undefined
  }

  function anyExam() {
    //any 타입은 모든 타입의 슈퍼타입이자, (Never)를 제외한 모든 타입의 서브타입이다.
    let unknownVar: unknown
    let anyVar: any
    anyVar = unknownVar // any타입으로의 다운캐스팅이 가능하다.

    let undefined: undefined
    undefined = anyVar //any 타입 자체의 다운캐스팅이 가능하다.

    let neverVar: never
    //neverVar = anyVar // !Error 단, 아무리 any타입이라도 never타입으로의 다운캐스팅은 불가능하다.
  }
}
