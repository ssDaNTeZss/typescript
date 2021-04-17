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
