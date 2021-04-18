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
            this._insertNode(this.root, NODE);
        }
    }
    _insertNode(baseNode, newNode) {
        if (newNode.data <= baseNode.data) {
            if (!baseNode.left) {
                baseNode.left = newNode;
            }
            else {
                this._insertNode(baseNode.left, newNode);
            }
        }
        else {
            if (!baseNode.right) {
                baseNode.right = newNode;
            }
            else {
                this._insertNode(baseNode.right, newNode);
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
    search(node, data) {
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
    removeNode(data) {
        return this._remove(this.root, data);
    }
    _minNode(node) {
        if (!node) {
            return null;
        }
        if (!(node === null || node === void 0 ? void 0 : node.left)) {
            return node;
        }
        return this._minNode(node.left);
    }
    // @ts-ignore
    _remove(node, data) {
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
