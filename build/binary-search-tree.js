class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
export class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const NODE = new Node(data);
        if (!this.root) {
            this.root = NODE;
        }
        else {
            this.insertNode(this.root, NODE);
        }
    }
    insertNode(baseNode, newNode) {
        if (newNode.data <= baseNode.data) {
            if (!baseNode.left) {
                baseNode.left = newNode;
            }
            else {
                this.insertNode(baseNode.left, newNode);
            }
        }
        else {
            if (!baseNode.right) {
                baseNode.right = newNode;
            }
            else {
                this.insertNode(baseNode.right, newNode);
            }
        }
    }
    traverse(type = "infix") {
        const result = [];
        const recursive = (node) => {
            if (node) {
                if (type === "infix") {
                    recursive(node.left);
                    result.push(node.data);
                    recursive(node.right);
                }
                if (type === "prefix") {
                    result.push(node.data);
                    recursive(node.left);
                    recursive(node.right);
                }
                if (type === "postfix") {
                    recursive(node.left);
                    recursive(node.right);
                    result.push(node.data);
                }
            }
        };
        recursive(this.root);
        return result;
    }
}
