/* 제네릭 인터페이스*/
interface KeyPair<K, V> {
  key: K
  value: V
}

let keyPair: KeyPair<string, number> = {
  //제네릭 인터페이스는 꺽쇠안에 타입변수안의 타입을 할당해야 한다.(중요)
  key: ' mykey',
  value: 0,
}

// 인덱스 시그니처와 함께 사용

interface NumberMap {
  [key: string]: number
}

let numberMap: NumberMap = {
  key: 123,
  key2: 456,
}

interface Map<V> {
  [key: string]: V
}

let strMap: Map<string> = {
  key: 'lulu',
}

//제네릭 타입별칭
type Map2<V> = {
  [key: string]: V
}

let stringMap2: Map2<string> = {
  key: 'hello',
}

/**제네릭 인터페이스의 활용예시 */

//유저관리 프로그램
//유저 : 학생, 개발자

interface Student {
  type: 'student'
  school: string
}

interface Developer {
  type: 'developer'
  skill: string
}

interface User<T> {
  name: string
  profile: T
}

const developerUser: User<Developer> = {
  name: 'sdf',
  profile: {
    type: 'developer',
    skill: 'TS',
  },
}
const studentUser: User<Student> = {
  name: 'sdf',
  profile: {
    type: 'student',
    school: 'catholic',
  },
}

function goToScholl(user: User<Student>) {
  // if(user.profile.type !== 'student'){
  //   console.log('잘못오셨어요');
  //   return;
  // } //타입좁히기

  const school = user.profile.school
  console.log(`${school}로 등교완료`)
}
//goToScholl(developerUser)
