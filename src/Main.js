import { Tree } from "./modules/Tree.js";
import { randomArray, printTraversal } from "./modules/Helper.js";

// const randomArray = (length=15) => Array.from({"length": length}, () => Math.floor(Math.random() * 100) + 1).sort((a, b) => a-b);
// const printTraversal = (tree, number) => {
//     const orders = [...[tree.levelOrder()], ...[tree.preorder()], ...[tree.postorder()], ...[tree.inorder()]];
//     orders.forEach((array, i) => {
//         if (i === 0) {
//             console.log(`\n\n`);
//             console.log('\x1b[36m%s\x1b[0m', `${"\t".repeat(2)}Transversal ${number}`);
//         }
//         console.log(`\n ${array}`);
//     });
//     return;
// };

const main = (() => {
    // 1. Create a binary search tree from an array of random numbers.
    const random = randomArray();
    const set = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324] // set array for testing reliability 
    const tree = new Tree(random);

    // 2. Confirm that the tree is balanced by calling isBalanced
    const balanced = tree.isBalanced() // true

    // 3, Print out all elements in level, pre, post, and in order
    printTraversal(tree, 1); // second argument is just to denote what transversal number this script is on

    // 4. Unbalance the tree by adding several numbers > 100
    const insertSeveralNums = [...new Set(randomArray(4))].forEach(item => tree.insert(item + 100));

    // 5. Confirm that the tree is unbalanced by calling isBalanced
    const notBalanced = tree.isBalanced(); // false 

    // 6. Balance the tree by calling rebalance
    const rebalanced = tree.rebalance(); // you don't need to use this as the new reference point for the tree... it redifines tree.root

    // 7. Confirm that the tree is balanced by calling isBalanced
    const nowBalanced = tree.isBalanced(); // true

    // 8. Print out all elements in level, pre, post, and in order
    printTraversal(tree, 2);
})();