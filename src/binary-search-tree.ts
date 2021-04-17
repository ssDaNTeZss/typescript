class Node<T> {
    public data: T;
    public left: Node<T> | null;
    public right: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree<T> {
    public root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    public insert(data: T): void {
        const NODE = new Node(data);

        if (!this.root) {
            this.root = NODE;
        } else {
            this.insertNode(this.root, NODE);
        }
    }

    public insertNode(baseNode: Node<T>, newNode: Node<T>): void {
        if (newNode.data <= baseNode.data) {
            if (!baseNode.left) {
                baseNode.left = newNode;
            } else {
                this.insertNode(baseNode.left, newNode);
            }
        } else {
            if (!baseNode.right) {
                baseNode.right = newNode;
            } else {
                this.insertNode(baseNode.right, newNode);
            }
        }
    }

    public traverse(type: "infix" | "prefix" | "postfix" = "infix"): Array<T> {
        const result: Array<T> = [];
        const recursive = (node: Node<T> | null) => {
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
