//key of

// interface Person {
//   name: string
//   age: number
// }

type Person = typeof person //와... 아예 타입을 추출하는 역할로 바뀜

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key] //     'name' | 'age' | ...so on
}

const person = {
  name: 're',
  age: 12,
}

getPropertyKey(person, 'name')

// typeof person === 'object'
