/**
 * 可配置的Partial
 * 传入的联合类型key为可选，其他为必选
 */
type PartialOptional<T, K extends keyof T> = Omit<T, K> & {[P in K]?: T[P]}

/*
推导数组所有元素的类型
 */
type FalttenArray<T> = T extends Array<infer P>  ? P : never;

type Fa1 = FalttenArray<[1, 2, '3']>

type Fa2 = FalttenArray<[number, number, string]>

