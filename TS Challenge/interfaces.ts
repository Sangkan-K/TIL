// 값을 보여주고는 싶지만 수정은 불가능하게 하고 싶다 -> readonly
type Nickname = string;

type Health = number;

type Friends = Array<string>;

type Player2 = {
  nickname: string;
  healthBar: 1 | 5 | 10;
};

const nico2: Player2 = {
  nickname: "nico",
  healthBar: 10,
};

type Food = string;

const kimchi2: Food = "delicious";

type Team = "read" | "blue" | "yellow";
type Health2 = 1 | 5 | 10;

// type Player3 = {
//   nickname: string;
//   team: Team;
//   health: Health2;
// };

const nico3: Player3 = {
  nickname: "nico",
  team: "yellow",
  health: 1,
};

// type은 원하는 어떤 것이 될 수 있다.
// interface는 오브젝트의 모양을 특정하기 위해 사용한다. react에서 많이 활용된다.
// type이 interface보다 더 활용도가 높다.

interface Player3 {
  nickname: "nico";
  team: "yellow";
  health: 1;
}

interface User1 {
  readonly name: string;
}

interface Player5 extends User1 {}

const iam: Player5 = {
  name: "nico",
};

// interface를 각각 만들어도 타입스크립트는 알아서 합쳐준다. type에서는 적용안됨.

// interface type의 차이

// abstract class User2 {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// 추상 클래스는 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 해준다.
// 추상 클래스는 인스턴스를 허용하지 않는다. (new User2를 쓸 수 없다.)
// 자바스크립트는 abstract를 단지 class로만 읽을 수 있음

// class Player6 extends User2 {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `Hello ${name}, My name is ${this.fullName()}`;
//   }
// }

interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

// 인터페이스와 타입을 상속하는 방법에는 차이가 있다.

// abstract class User3 {
//   constructor(
//     protected firstName:string,
//     protected lastName:string
//   ) {}
//   abstract sayHi(name:string):string
//   abstract fullName():string
// }

// class Player7 extends User3 {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name: string): string {
//     return `Hello ${name}. My name is ${this.fullName}`
//   }
// }

// 추상클래스를 interface로 변환

interface User3 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

// interface를 상속할 때에 property 앞에 public만 쓸 수 있다.
// 하나 이상의 interface를 상속할 수 있다.

class Player7 implements User3, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}

// 인자에 interface를 넣을 수도 있고 리턴할 수도 있다.
// interface를 리턴할 때는 new class이름과 같은 양식을 사용하지 않아도 된다.

type PlayeA = {
  name: string;
};

type PlayeAA = PlayeA & {
  lastName: string;
};

const playeA: PlayeAA = {
  name: "nico",
  lastName: "xxx",
};

//

interface PlayeB {
  name: string;
}

interface PlayeBB extends PlayeB {
  lastName: string;
}
interface PlayeBB {
  health: number;
}

const playeB: PlayeBB = {
  name: "nico",
  lastName: "xxx",
  health: 1,
};

// 오브젝트의 모양을 알려주기 위한 목적은 같다.

type PlayerA = {
  firstName: string;
};

interface PlayerB {
  firstName: string;
}

class Use implements PlayerB {
  constructor(public firstName: string) {}
}

// 타입 alias나 특정값으로 타입을 제한하는 경우에 타입을 쓰자.
