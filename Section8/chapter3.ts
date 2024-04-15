// 맵드 타입 : interface에서 사용할 수 없음.

interface User {
  id: number
  name: string
  age: number
}

type PartialUser = {
  [key in keyof User]?: User[key]
}

type BoolUser = {
  [key in keyof User]: boolean
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]
}

function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: 'sdf',
    age: 27,
  }
}

function updateUser(user: PartialUser) {
  //...수정하는 기능
}

updateUser({
  //id: 1,
  //name: 'sdf',
  age: 15,
})
