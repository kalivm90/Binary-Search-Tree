export const randomArray = (length=15) => Array.from({"length": length}, () => Math.floor(Math.random() * 100) + 1).sort((a, b) => a-b);
export const printTraversal = (tree, number) => {
    const orders = [...[tree.levelOrder()], ...[tree.preorder()], ...[tree.postorder()], ...[tree.inorder()]];
    const labels = ["Level Order: ", "Pre-Order: ", "Post-Order: ", "In Order: "]
    orders.forEach((array, i) => {
        if (i === 0) {
            console.log(`\n\n`);
            console.log('\x1b[36m%s\x1b[0m', `${"\t".repeat(3)}Transversal ${number}`);
        }
        console.log(`\n ${labels[i]} ${array}`);
    });
    return;
};