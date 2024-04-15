class Employee {
  //필드선언시 "타입","초깃값"을 반드시 명시
  name: string
  age: number
  position?: string //선택적 프로퍼티 ✅

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name
    this.age = age
    this.position = position //생성자 내부에서 초기화를 시키면 필드선언시 초깃값을 명시하지 않아도 됨.
  }
  //메서드
  work() {
    console.log('im working! 👀')
  }
}

// 💡 클래스는 타입이다!
const employeeC: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {},
}

//상속
// 🌟파생클래스에서 생성자를 정의했다면, 확장되는 클래스에서는 반드시 super메서드를 호출해햐 한다.
class ExecutiveOfficer extends Employee {
  officeNumber: number

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position)
    this.officeNumber = officeNumber
  }
}
