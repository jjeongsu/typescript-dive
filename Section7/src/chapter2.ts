// map , forEach 메서드 타입정의하기

/* map */
function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]))
  }
  return result
}

const arr = [1, 2, 3]
const arr2 = map(arr, it => it * 2)

map(['hi', 'you'], it => it.toUpperCase())
map(['hi', 'you'], it => parseInt(it))

/*forEach*/

const arr3 = [1, 2, 3]
arr3.forEach(it => console.log(it))

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}
forEach(arr3, it => console.log(it.toFixed()))
forEach(['123', '456'], it => it)
