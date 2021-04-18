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
            this._insertNode(this.root, NODE);
        }
    }

    private _insertNode(baseNode: Node<T>, newNode: Node<T>): void {
        if (newNode.data <= baseNode.data) {
            if (!baseNode.left) {
                baseNode.left = newNode;
            } else {
                this._insertNode(baseNode.left, newNode);
            }
        } else {
            if (!baseNode.right) {
                baseNode.right = newNode;
            } else {
                this._insertNode(baseNode.right, newNode);
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

    public search(node: Node<T> | null, data: T): Node<T> | null {
        if (!node) {
            return null;
        }
        if (data < node.data) {
            return this.search(node.left, data);
        }
        if (data > node.data) {
            return this.search(node.right, data);
        }
        return node;
    }

    public removeNode(data: T):  Node<T> | null {
        return this._remove(this.root, data);
    }

    private _minNode(node: Node<T> | null): Node<T> | null {
        if (!node) {
            return null;
        }
        if (!node?.left) {
            return node;
        }
        return this._minNode(node.left);
    }
// @ts-ignore
    private _remove(node: Node<T> | null, data: T): Node<T> | null {
        if (!node) {
            return null;
        }
        if (data < node.data) {
            node.left = this._remove(node.left, data);
            return node;
        }
        if (data > node.data) {
            node.right = this._remove(node.right, data);
            return node;
        }
        if (node.data === data) {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            }
            if (!node.right) {
                node = node.left;
                return node;
            }
            const NEW_NODE = this._minNode(node.right);
            // @ts-ignore
            node.data = NEW_NODE.data;
            // @ts-ignore
            node.right = this._remove(node.right, NEW_NODE.data);
            return node;
        }
    }
}
