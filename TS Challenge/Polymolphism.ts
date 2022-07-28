// Polymolphism 다형성
// 배열을 받고 배열의 결과를 print 해주는 함수 만들어보기

// type SuperPrint = {
//   (arr: number[]): void;
//   (arr: boolean[]): void;
//   (arr: string[]): void;
// };

// type SuperPrint = <T, M>(arr: T[], b: M) => T;
//  보통 <T>(a: T[]) => T 의 형태가 사용됨

// const superPrint: SuperPrint = (arr) => arr[0];

// const a = superPrint([1, 2, 3, 4], "x");
// const b = superPrint([true, false, true], 1);
// const c = superPrint(["1", "2", "3"], false);
// const d = superPrint([1, 2, true, false], []);

//concrete type => number, boolean, void, unknown
// generic - type의 placeholder
// call signiture를 작성할 때, 변수에 들어올 타입을 확실하게 모를 때 generic을 사용한다.
// typescript가 추론하도록 유도하는 방법이다.

function superPrint<T>(a: T[]) {
  return a[0];
}

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["1", "2", "3"]);
const d = superPrint([1, 2, true, false]);

type Player<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};

type NicoPlayer = Player<{ favFood: string }>;

const nico: Player<{ favFood: string }> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};
