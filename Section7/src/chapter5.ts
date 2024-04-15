//프로미스
//비동기 처리 결과값의 타입을 직접 명시
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20) //프로미스는 비동기 실행이후의 결과값을 추론할 수 없다.
    reject('~~대문에 실패요')
  }, 3000)
})

promise.then(response => console.log(response * 10))
promise.catch(err => {
  //if로 타입 좁히기 -> 프로젝트에 따라 유동적으로 선택하기
})

/** 프로미스를 반환하는 함수의 타입을 정의 */

interface Post {
  id: number
  title: string
  content: string
}

function fetchPost() {}
