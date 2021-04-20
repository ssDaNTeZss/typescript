import { keyInSelect, question } from "readline-sync";
import { BinarySearchTree } from "./binary-search-tree.js";

const BST = new BinarySearchTree();

actionsMenu();

function actionsMenu(): void {
    const ACTIONS = ["insert(data)", "traverse(type)", "search(data)", "remove(data)"],
        index = keyInSelect(ACTIONS, "Select an action:");

    console.log("Ok, " + ACTIONS[index]);

    switch (ACTIONS[index]) {
        case "insert(data)":
            insertMenu();
            break;
        case "traverse(type)":
            traverseMenu();
            break;
        case "search(data)":
            searchMenu();
            break;
        case "remove(data)":
            removeMenu();
            break;
    }
}

function insertMenu(): void {
    const NODE_DATA = question("Enter node values separated by commas ',': ");
    const ARRAY_OF_NODES_DATA = NODE_DATA.split(",");

    let val;
    for (val of ARRAY_OF_NODES_DATA) {
        BST.insert(val);
    }
    console.log("DONE");

    actionsMenu();
}

function traverseMenu(): void {
    const TRAVERSE = ["infix", "prefix", "postfix"],
        TYPE = keyInSelect(TRAVERSE, "Select the type of traverse: ");
    switch (TRAVERSE[TYPE]) {
        case "infix":
            console.log("Infix (in-order) traverse:", BST.traverse("infix"));
            break;
        case "prefix":
            console.log("Prefix (pre-order) traverse:", BST.traverse("prefix"));
            break;
        case "postfix":
            console.log("Postfix (post-order) traverse:", BST.traverse("postfix"));
            break;
    }
    actionsMenu();
}

function searchMenu(): void {
    const SEARCH_NODE = question("Enter the key you are looking for: ");
    console.log("Searched node: ", BST.search(BST.root, SEARCH_NODE));

    actionsMenu();
}

function removeMenu(): void {
    const REMOVE_NODE = question("Enter the key of the node to be deleted: ");
    console.log("Remote node: ", BST.removeNode(REMOVE_NODE));

    actionsMenu();
}
