// 접근제어자
// 클래스의 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능
// - public: 모든 범위에서 접근 가능
// - private: 클래스 내부에서만 접근 가능
// - 💡 protected: 클래스 내부 또는 파생 클래스 내부에서만 접근 가능

class Employee {
  // 필드
  private name: string
  protected age: number
  public position: string // public은 생략가능

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name
    this.age = age
    this.position = position
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일함 ${this.age}먹고 일하려니까 고되다`)
  }
}

const employee = new Employee('이정환', 27, 'devloper')

//employee.name = '홍길동' //❌ private은 클래스 내부에서만 접근가능
//employee.age = 30 // ❌ protected은 파생 클래스까지만 접근가능
employee.position = '디자이너'

// 상속받은 클래스
class ExecutiveOfficer extends Employee {
  //메서드
  funct() {
    //  this.name // ❌ private 필드임
    this.age // ✅ protected 필드임
  }
}
