/** Javascript 에서의 클래스 */

class Student {
  //필드
  name
  age
  grade

  //생성자
  constructor(name, age:, grade) {
    this.name = name
    this.age = age
    this.grade = grade
  }

  //메서드
  study() {
    console.log('열심히 공부중')
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`)
  }
}

const gildong = new Student('gildong', 12, 'A')

console.log('gildong', gildong)
gildong.introduce()

//상속 : student를 기반으로 추가적인 필드와 메서드를 갖는 클래스 선언하기
class StudentDeveloper extends Student {
  //필드
  favoriteSkill

  //생성자
  constructor(name, age, grade, favoriteSkill) {
    //확장한 클래스는 반드시 super를 써야함
    super(name, age, grade) //부모클래스의 생성자가 넘어와서 자동으로 This.~~ = ~~ 로 설정이 됨.
    this.favoriteSkill = favoriteSkill
  }

  //메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`)
  }
}
