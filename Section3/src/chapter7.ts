/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입 들로만 만든 유니온 타입을 말한다.
 */

type Admin = {
  tag: 'ADMIN' //tag가 string literal 타입이기때문에, Admin, Member, Geust는 서로소 관계가 된다.
  name: string
  kickCount: number
}

type Member = {
  tag: 'MEMBER'
  name: string
  point: number
}

type Guest = {
  tag: 'GUEST'
  name: string
  visitCount: number
}

type User = Admin | Member | Guest // 서로소 유니온 타입

// Admin -> (name)님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모앗습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다요.
function login(user: User) {
  if (user.tag === 'ADMIN') {
    //if('kickCount' in user)
    //다른 개발자가 kickcount 만으로 admin임을 알 수 있을까? 놉
    //admin
    console.log('${name}님 현재까지 ${kickCount}명 강퇴했습니다.')
  } else if ('point' in user) {
    //member
    console.log('${name}님 현재까지 ${point}모앗습니다.')
  } else {
    //guest
    console.log('${name}님 현재까지 ${visitCount}번 오셨습니다요.')
  }
}

//well
function loginWELL(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      //오직 admin type만
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`)
      break
    }
    case 'MEMBER': {
      //오직 member type
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
      break
    }
    case 'GUEST': {
      // 오직 guest type
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`)
      break
    }
  }
}

// const loading: AsyncTask = {
//   state: 'LOADING',
// }

// const failed: AsyncTask = {
//   state: 'FAILED',
//   error: {
//     message: '오류발생~',
//   },
// }

// const success: AsyncTask = {
//   state: 'SUCCESS',
//   response: {
//     message: '성공이요~',
//   },
// }

// type AsyncTask = {
//   state: 'LOADING' | 'FAILED' | 'SUCCESS'
//   error?: {
//     message: string
//   }
//   response?: {
//     message: string
//   }
// }

//해결
type LoadingTask = {
  state: 'LOADING'
}
type FailedTask = {
  state: 'FAILED'
  error: {
    message: string
  }
}
type SucessTask = {
  state: 'SUCCESS'
  response: {
    message: string
  }
}

type AsyncTask = LoadingTask | SucessTask | FailedTask

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩중')
      break
    }
    case 'FAILED': {
      console.log(`${task.error.message}`)
      break
    }
    case 'SUCCESS': {
      console.log(`${task.response.message}`)
      break
    }
  }
}
