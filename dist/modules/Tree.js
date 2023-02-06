"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = void 0;
var _Node = require("./Node.js");
class Tree {
  constructor(array) {
    this.array = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(this.array);
  }
  buildTree(array) {
    if (array.length === 0) {
      return null;
    }
    const mid = Math.floor(array.length / 2);
    let node = new _Node.Node(array[mid]);
    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
    return node;
  }
  insert(value, root = this.root) {
    if (!root) return null;
    if (value >= root.value) {
      if (!root.right) {
        root.right = new _Node.Node(value);
        return root;
      }
      this.insert(value, root.right);
    } else {
      if (!root.left) {
        root.left = new _Node.Node(value);
        return root;
      }
      this.insert(value, root.left);
    }
  }
  remove(value, root = this.root) {
    if (!root) return null;
    if (value < root.value) {
      root.left = this.remove(value, root.left);
    } else if (value > root.value) {
      root.right = this.remove(value, root.right);
    } else {
      if (!root.left && !root.right) return null;
      if (!root.right) return root.left;
      if (!root.left) return root.right;
      // to find the NEXT biggest node we have to start the search in the right subtree of the target node
      let newNode = root.right;
      // after setting the right subtree we need to look for the smallest value in the left subtree of target nodes right subtree
      while (newNode.left) newNode = newNode.left;
      // swaps value of 67 with 324 
      root.value = newNode.value;
      root.right = this.remove(newNode.value, root.right);
    }
    return root;
  }
  find(value, root = this.root) {
    if (!root) return false;
    if (value < root.value) {
      if (!root.left) {
        return false;
      }
      return this.find(value, root.left);
    } else if (value > root.value) {
      if (!root.right) {
        return false;
      }
      return this.find(value, root.right);
    } else {
      return root;
    }
  }
  levelOrder(callback, root = this.root) {
    if (!root) return null;
    const q = [root];
    const list = [];
    while (q.length != 0) {
      const current = q.shift();
      callback ? callback(current.value) : list.push(current.value);
      if (current.left != null) q.push(current.left);
      if (current.right != null) q.push(current.right);
    }
    if (!callback) return list;
  }
  inorder(callback, root = this.root, arr = []) {
    if (!root) return null;
    this.inorder(callback, root.left, arr);
    callback ? callback(root.value) : arr.push(root.value);
    this.inorder(callback, root.right, arr);
    if (!callback) return arr;
  }
  preorder(callback, root = this.root, arr = []) {
    if (!root) return null;
    callback ? callback(root.value) : arr.push(root.value);
    this.preorder(callback, root.left, arr);
    this.preorder(callback, root.right, arr);
    if (!callback) return arr;
  }
  postorder(callback, root = this.root, arr = []) {
    if (!root) return null;
    this.postorder(callback, root.left, arr);
    this.postorder(callback, root.right, arr);
    callback ? callback(root.value) : arr.push(root.value);
    if (!callback) return arr;
  }
  height(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  depth(target, root = this.root) {
    if (!root) return 0;
    if (target < root.value) {
      if (!root.left) return 0;
      return 1 + this.depth(target, root.left);
    } else if (target > root.value) {
      if (!root.right) return 0;
      return 1 + this.depth(target, root.right);
    } else {
      return 0;
    }
  }
  isBalanced(root = this.root) {
    if (!root) return true;

    // Get height of left and right subtrees
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);

    // for example (leftHeight:3 - rightHeight:2) = 1
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    // recursively checks every branch to make sure the heights of subtree are < 1
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  }
  rebalance(root = this.root) {
    if (!root) return null;
    let arr = this.levelOrder().sort((a, b) => a - b);
    this.root = this.buildTree(arr);
    return root;
  }
  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const tree = new Tree(arr)
// tree.remove(67);
// console.log(tree.find(23));
// console.log(tree.levelOrder())
// console.log(tree.inorder());
// console.log(tree.preorder())
// console.log(tree.postorder())
// console.log(tree.height());
// console.log(tree.depth(4))
// console.log(tree.isBalanced());
// tree.insert(120);
// tree.insert(130);
// tree.insert(520);
// console.log(tree.rebalance());
// console.log(tree.isBalanced());
// tree.prettyPrint(tree.root);
exports.Tree = Tree;