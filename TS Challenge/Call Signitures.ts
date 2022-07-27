function add(a: number, b: number) {
  return a + b;
}

// 화살표 함수
const add2 = (a: number, b: number) => a + b;

// call signiture는 함수 위에 마우스를 올렸을 때 나타나는 것을 말함
type Add = (a: number, b: number) => number;

const add3: Add = (a, b) => a + b;

// 함수를 작성하기 전에 타입에 대해 생각해 볼 수 있다.
// 타입을 먼저 생각하고 코드를 구현한다.

// overloading
// 함수가 여러개의 call signiture를 가질 때 발생

type Add2 = {
  (c: number, d: number | string): number;
};

const add4: Add2 = (c, d) => {
  if (typeof d === "string") return c;
  return c + d;
};

// NextJs의 라우팅이 오버로딩의 주요 예시이다.
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

// void는 아무것도 리턴하지 않는다

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add5: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add5(1, 2);
add5(1, 2, 3);
