/* 예제 2 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never
// 1. T 는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>
// PromiseUnpack: 타입변수 T에 제공한 Promise 타입에서 Promise 결과값 타입(number)만 떼오는 기능을 함

type PromiseB = PromiseUnpack<Promise<string>>
