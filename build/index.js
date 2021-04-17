// import { Duck } from "./duck.js";
// import { Fish } from "./fish.js";
//
// const fish: Fish = new Fish();
// const duck: Duck = new Duck();
//
// function doSwim(fishArg: Fish): void {
//     fishArg.swim();
// }
//
// doSwim(fish);
// doSwim(duck);
import { BinarySearchTree } from "./binary-search-tree.js";
const BST = new BinarySearchTree();
BST.insert(11);
console.log(BST);
BST.insert(7);
console.log(BST);
BST.insert(9);
console.log(BST);
BST.insert(15);
console.log(BST);
BST.insert(6);
console.log(BST);
console.log("infix", BST.traverse("infix"));
console.log("prefix", BST.traverse("prefix"));
console.log("postfix", BST.traverse("postfix"));
