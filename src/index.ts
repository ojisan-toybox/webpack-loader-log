import { add1 } from "./sub";
import { add2 } from "./sub2";

const main = () => {
  console.log(add2(add1(0)));
};

main();
