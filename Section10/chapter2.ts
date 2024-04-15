/* pick<t, k> */

/*
interface Post {
  title: string
  tages: string[]
  content: string
  thumbnailURL?: string
}
*/

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠',
}

type Pick<T, K extends keyof T> = {
  // K에 함수나 이상한 타입이 들어오지 않도록
  // 오직 T의 프로퍼티 집합만 들어올 수 있도록 하기위함
  [key in K]: T[key]
}

/* Omit<T,K> */

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tages: ['sdf'],
  thumbnailURL: '',
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T= Post, K='title'
//Pick<Post, Exclude<keyof Post, 'title>>
//Pick<Post, Exclude<keyof 'title' | 'content' | 'tags' | 'thumbnailUrl', 'title'>>
//Pick<Post, 'content' | 'tags' | 'thumbnailUrl', 'title'>

/* Record<T, V> 실무에서 자주쓰임
 */

type ThumbnailLegacy = {
  large: { url: string }
  medium: { url: string }
  small: { url: string }
  watch: { url: string }
}
type Thumbnail = Record<'large' | 'medium' | 'small', { url: string }>

type Record<K extends keyof any, V> = {
  [key in K]: V
}
