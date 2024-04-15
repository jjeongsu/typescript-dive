// 제네릭 클래스

class NumberList {
  constructor(private list: number[]) {}

  push(item: number) {
    this.list.push(item)
  }
  pop() {
    return this.list.pop()
  }
  print() {
    console.log(this.list)
  }
}

const numberList = new NumberList([1, 2, 3])

numberList.pop()
numberList.push(4)
numberList.print()

//제네릭 클래스로 바꾸자
class List<T> {
  constructor(private list: T[]) {}

  push(item: T) {
    this.list.push(item)
  }
  pop() {
    return this.list.pop()
  }
  print() {
    console.log(this.list)
  }
}

const list = new List([1, '2', 3])

numberList.pop()
numberList.push(4)
numberList.print()
