# Binary Search Tree
This takes an array as input, sorts it and removes any duplicates, then builds a Balanced Binary Search Tree.

## Accompanying Functions 
1. buildTree - gets called automatically when the class is initialized. This is a private function don't call it.
2. prettyPrint - prints out the tree to the console
3. insert - takes a value as a argument and inserts it into the tree
4. delete - takes a value already in the tree and removes it
5. find - takes a value as a argument and returns the node or returns false if it doesn't exist
6. levelOrder - takes a optional callback function as an argument, if not callback is supplied it will return a array
7. inorder - takes a option callback function as an argument, if not callback is supplied it will return a array
8. preorder - takes a option callback function as an argument, if not callback is supplied it will return a array
9. postorder - takes a option callback function as an argument, if not callback is supplied it will return a array
10. height - accepts a node as an argument and returns its height
11. depth - accepts a node as an argument and returns its depth
12. isBalanced - returns true or false depending on if the tree is balanced
13. rebalance - rebalances an unbalanced tree

## To run - this uses babel
```$ npm install```
```$ npm run start```
