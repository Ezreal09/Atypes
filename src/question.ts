// 1. 直接使用类作为类型，和使用typeof 类作为类型，有什么区别呢

/**
 * 定义一个类
 */
 class People {
  name: number;
  age: number;
  constructor() {}
}

type pe = typeof People

// p1可以正常赋值
const p1: People = new People();
// 等号后面的People报错，类型“typeof People”缺少类型“People”中的以下属性: name, age
const p2: People = People;

// p3报错，类型 "People" 中缺少属性 "prototype"，但类型 "typeof People" 中需要该属性
const p3: pe = new People();
// p4可以正常赋值
const p4: typeof People = People;
/*
结论：
1. 当把类直接作为类型时，该类型约束的是该类型必须是类的实例；即该类型获取的是该类上的实例属性和实例方法（也叫原型方法)
2. 当把typeof 类作为类型时，约束的满足该类的类型；即该类型获取的是该类上的静态属性和方法。
 */ 

