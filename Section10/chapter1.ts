/* partial<T>
 */

interface Post {
  title: string
  tages: string[]
  content: string
  thumbnailURL?: string
}

const draft: Partial<Post> = {
  title: '제목 나중에',
  content: '...초안',
}

// 구현
type Partial<T> = {
  [key in keyof T]?: T[key]
}

/*required<T>*/

const withThumbnailPost: Required<Post> = {
  title: 'sdf',
  tages: ['ts'],
  content: 'sdfasd',
  thumbnailURL: 'http:///sdfasdf',
}

//구현
type Required<T> = {
  [key in keyof T]-?: T[key]
}

/* readonly<T> */

type Readonly<T> = {
  readonly [key in keyof T]: T[key]
}
