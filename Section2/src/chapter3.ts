//객체
let user: {
  //객체 리터럴 타입으로 정의
  //구조를 기준으로 타입을 정의하는 구조적 타입 시스템, Property based type system
  //이름을 기준으로 타입을 정의한는 것은 명복적 타임 시스템 이라고 한다.
  id?: number // ? optional property
  name: string
} = {
  id: 1,
  name: 'wella',
}
//readonly : 값이 수정되어서는 안될 때
let config: { readonly apiKey: string } = {
  apiKey: 'sldkfj',
}
