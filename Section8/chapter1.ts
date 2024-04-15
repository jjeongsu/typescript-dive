// 타입 조작하기1
//인덱스드 엑세스 타입

interface Post {
  title: string
  content: string
  author: {
    id: number
    name: string
  }
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
}

//작성자의 이름과 아이디를 붙여서 출력하는 함수
function printAutorInfo(author: { id: number; name: string }) {
  console.log(`${author.id} - ${author.name}`)
}
//author 프로퍼티의 타입이 변경되어도 추가적인 작업이 필요없음
//여기서 'author'를 인덱스라고 함
// Post['author']['id'] 이렇게도 가져올 수 잇음
function printAuthorInfoBetter(author: PostList[number]['author']) {
  console.log(`${author.id} - ${author.name}`)
}

type PostList = {
  title: string
  content: string
  author: {
    id: number
    name: string
  }
}[]

//배열
const postlist: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
}

//튜플

type Tup = [number, string, boolean]

type Tup0 = Tup[0] //number
type TupNum = Tup[number] //TUP타입의 최적의 공통타입을 뽑아서 데려온다.
