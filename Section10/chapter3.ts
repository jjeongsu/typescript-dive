// exclude<t,u>

type A  = Exclude<string| boolean, boolean>;

type Exclude<T,U> = T extends U ? never : T ;


// extract
type B = Extract<string|boolean, string >;
type Extract<T, U> = T extends U ? T : never;

// returtype
// 함수의 반환값 타입을 추출

function funcA(){return 'hello'}
function funcB(){return 123}

type ReturnA = ReturnType<typeof funcA>
type ReturnB = ReturnType<typeof funcB>

type ReturnType<T extends (...args:any) => any> = T extends(...args: any) => infer R ? R: never;