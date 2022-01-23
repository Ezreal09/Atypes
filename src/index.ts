/**
 * 1.可配置的Partial
 * 传入的联合类型key为可选，其他为必选
 */
type PartialOptional<T, K extends keyof T> = Omit<T, K> & {[P in K]?: T[P]}

/*
2.推导数组所有元素的类型
 */
type FalttenArray<T> = T extends Array<infer P>  ? P : never;

type Fa1 = FalttenArray<[1, 2, '3']>

type Fa2 = FalttenArray<[number, number, string]>

//3. SymmetricDifference<T, U>获取没有同时存在于T和U内的类型。

type SymmetricDifference<T, U> = Exclude<T | U, T & U>;
type Fa3 = SymmetricDifference<'1' | '2', '2' | '3'>;


