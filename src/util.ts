type MyPartial<T> = {[P in keyof T]?: T[P]};
type MyRequire<T> = {[P in keyof T]-?: T[P]};
type MyReadonly<T> = {readonly [P in keyof T]: T[P]};
type MyRecord<Keys extends string | number | symbol, Type> = {[P in Keys]: Type};
type MyPick<T, Keys extends keyof T> = {[P in Keys]: T[P]};
type MyOmit<T, Keys extends keyof T> = {[P in Exclude<keyof T, Keys>]: T[P]};
type MyExclude<T, U> = T extends U ? never : T;
type MyExtract<T, U> = T extends U ? T : never;
type MyNonNullable<T> = T extends undefined | null ? never : T;
type MyParameters<T extends (...args: any[]) =>any> = T extends (...args: infer A) => any ? A : never;
type MyConstructorParameters<T extends abstract new (...args: any[]) =>any> = T extends abstract new(...args: infer A) => any ? A : never;
type MyReturnType<T extends (...args: any[]) =>any> = T extends (...args: any[]) => infer A ? A : never;
type MyInstanceType<T extends abstract new (...args: any[]) =>any> = T extends abstract new(...args: any) => infer A ? A : never;
type MyThisParametertype<T> = T extends (this: infer P, ...args: any[]) =>any ? P : unknown;
type MyOmitThisParametertype<T> = unknown extends MyThisParametertype<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T; 
  

type TupleToObject<T extends readonly (string | number | symbol)[]> = {[P in T[number]] : P};
type First<T extends unknown[]> = T extends [] ? never : T[0]; 
type Length<T extends readonly unknown[]> = T['length'];
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : never; 
type IF<T extends boolean, X, Y> = T extends true ? X : Y;
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ? Equal<F, U> extends true ? true : Includes<R, U> : false
type Push<T extends unknown[], U> = [...T, U]
type Unshift<T extends unknown[], U> = [U, ...T]
type Equal<X, Y> = <T>() => T extends X ? 1 : 2 extends <T>() => T extends Y ? 1 : 2 ? true : false

