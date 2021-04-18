import { BinarySearchTree } from "./binary-search-tree.js";

const BST = new BinarySearchTree();
// BST.insert(11);
// console.log(BST);
// BST.insert(7);
// console.log(BST);
// BST.insert(9);
// console.log(BST);
// BST.insert(15);
// console.log(BST);
// BST.insert(6);
// console.log(BST);

BST.insert(11);
BST.insert(7);
BST.insert(15);
BST.insert(5);
BST.insert(9);
BST.insert(13);
BST.insert(20);
BST.insert(3);
BST.insert(6);
BST.insert(8);
BST.insert(10);
BST.insert(12);
BST.insert(14);
BST.insert(18);
BST.insert(25);

console.log("infix", BST.traverse("infix"));
console.log("prefix", BST.traverse("prefix"));
console.log("postfix", BST.traverse("postfix"));

console.log("Search", BST.search(BST.root, 9));
console.log("R", BST.removeNode(15));
console.log("infix", BST.traverse("infix"));

