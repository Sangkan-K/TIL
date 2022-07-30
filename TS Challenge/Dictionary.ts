type Words = {
  [key: string]: string;
};
// string만을 Propertyf로 가지는 오브젝트이다.
// ex)
// let dict : Words = {
//     "potato" : "food"
// }

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

// 과제 & 실습

// type Words = {
//     [key: string]: string;
//   };

//   class Dict {
//     private dictionary: Words;
//     constructor() {
//       this.dictionary = {};
//     }
//     add(word: Word) {
//       if (this.dictionary[word.term] === undefined) {
//         this.dictionary[word.term] = word.def;
//       }
//     }
//     get(term: string) {
//       return this.dictionary[term];
//     }
//     delete(term: string) {
//       delete this.dictionary[term]
//     }
//     update(word: Word) {
//         if (this.dictionary[word.term]) {
//         this.dictionary[word.term] = word.def
//         }
//     }
//     showAll() {
//       console.log(Object.keys(this.dictionary))
//     }
//     count() {
//         const dictlength = Object.keys(this.dictionary).length
//         console.log(dictlength)
//     }

//   }

//   class Word {
//     constructor(public term: string, public def: string) {}
//   }

// const kimchi = new Word("kimchi", "한국의 음식");
// const rice = new Word("rice", "한국의 주식");

// const dict = new Dict();

// dict.add(kimchi)
// dict.add(rice)
// console.log(dict)
// console.log(dict.get("kimchi"))

// const newRice = new Word("rice" , "밥없인 못살아")

// dict.update(newRice)

// console.log(dict)

// dict.showAll()
// dict.count()
