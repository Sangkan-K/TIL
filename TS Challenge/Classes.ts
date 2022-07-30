// class Player {
//     constructor(
//         private firstName:string,
//         private lastName:string,
//         public nickname:string
//     ) {}
// }

// 추상 클래스 : 오직 다른곳에서 상속받을수만 있는 클래스

abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`; // 메소드의 구현
  }
}

// 상속하더라도 private 처리된 property에는 접근이 불가능하다. -> protected를 사용하면 외부에서는 접근이 되지않지만 상속받은 클래스에서는 접근이 가능하다.

class Player extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}

const nico = new Player("nice", "las", "니꼬");

nico.getFullName();
