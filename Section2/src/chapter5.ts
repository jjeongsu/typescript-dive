//enum 타입 ->컴파일 결과가 사라지지 않음
// 여러가지 값들이 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role { // 숫자형 enum
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  Korean = 'ko',
  English = 'en',
}

const user1 = {
  name: 'walla',
  role: Role.ADMIN,
  lang: Language.Korean,
}

const user2 = {
  name: 'kaya',
  role: Role.USER,
  lang: Language.English,
}

const user3 = {
  name: ' cece',
  role: Role.GUEST,
}
