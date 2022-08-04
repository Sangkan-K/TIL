class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}

import { init, exit } from "./myPackage";

init();

exit(1);
