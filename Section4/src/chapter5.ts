// 사용자정의 타입가드

type Dog = {
  name: string
  isBark: boolean
}

type Cat = {
  name: string
  isScratch: boolean
}

type Animal = Dog | Cat

function isDog(animal: Animal): animal is Dog {
  //dog -> true
  return (animal as Dog).isBark !== undefined
}

function isCat(animal: Animal): animal is Cat {
  //Cat -> true
  return (animal as Cat).isScratch !== undefined
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    //강아띠
  } else if ('isScratch' in animal) {
    //고양이
  }
}
