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

// 4. OptionalKeys<T>提取T中所有可选类型的key组成的联合类型

type OptionalKeys<T> = {
  [P in keyof T]: {} extends Pick<T, P> ? P : never
}[keyof T]

// 辅助函数，用于获取T中类型不为never的类型组成的联合类型
type TypeKeys<T> = T[keyof T];


type test = {
  key1?:string,
  key2: number;
  key3: boolean;
}

type Fa4 = OptionalKeys<test>

type Fa5 = TypeKeys<test>

// 5.PickByValue提取指定值的类型
type PickByValue<T, U> = Pick<T, TypeKeys<{[P in keyof T]: T[P] extends U ? P : never}>>

type Fa6 = PickByValue<test, string | number>

// 6. Intersection<T, U>从T中提取存在于U中的key和对应的类型。
type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>

type test23 = {
  key2: string;
}

type Fa7 = Intersection<test, test23>

// 7. Diff<T, U>，从T中排除存在于U中的key和类型

type Diff<T, U> = Pick<T, Exclude<keyof T, keyof U>>

// 8. Overwrite<T, U>从U中的同名属性的类型覆盖T中的同名属性类型。

// type Overwrite<T extends object, U extends object> = Diff<T, U> & Intersection<T, U>;

// type Fa8 = Overwrite<test, test23>

// const a:Fa8 = {key3:true, key2: 1}

// type Overwrite<T extends object, U extends object, I = Diff<T, U> & Intersection<T, U>> = Pick<I, keyof I>;

// type Fa8 = Overwrite<test, test23>
