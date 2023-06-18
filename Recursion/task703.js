/*
You are given a binary tree. Implement the method maxSum which returns the maximal sum of a route from root to leaf. For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13
The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal sum.

The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
This kata is part of fun with trees series:

Fun with trees: max sum
Fun with trees: array to tree
Fun with trees: is perfect
*/
function maxSum(root) {
  if(root === null || root === undefined){
    return 0;
  }
  const leftSum = maxSum(root.left);    
  const rightSum = maxSum(root.right);
  return root.value + Math.max(leftSum, rightSum);
}

var TreeNode = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};


// maxSum(new TreeNode(-22, new TreeNode(9), new TreeNode(50))); // 28
// maxSum(new TreeNode(11, new TreeNode(9), new TreeNode(2)));   // 20

var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)))
console.log(maxSum(root))
 /**
   *      5
   *    /   \
   *  -22    11
   *  / \    / \
   * 9  50  9   2
   */
  // result = 33;

 /* TreeNode {
    value: 5,
    left: TreeNode {
      value: -22,
      left: TreeNode { value: 9, left: undefined, right: undefined },
      right: TreeNode { value: 50, left: undefined, right: undefined }
    },
    right: TreeNode {
      value: 11,
      left: TreeNode { value: 9, left: undefined, right: undefined },
      right: TreeNode { value: 2, left: undefined, right: undefined }
    }
  }
  */