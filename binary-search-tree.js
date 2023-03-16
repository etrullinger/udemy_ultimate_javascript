function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

function log(value) {
  console.log(value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {	// want while loop to run as long as queue is not empty
    var treeNode = queue.shift();	// take 1st node out of queue & store in treeNode
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  };
};

/** Independent Exercise */
/** 
 *  Create two new methods: getMinVal & getMaxVal. 
 *  getMinVal method will return the smallest value in the tree.
 *  getMaxVal method will return the maximum value in the tree. 
**/

BST.prototype.getMinVal = function() {
  // we know that the node with the smallest value in our tree will be furthest left node in it
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  // we know that the node with the max value in our tree will be the furthest right node in it
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

/** End Independent Exercise -- see below for test */

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

/** Test insert method */
// console.log(bst.right.left.left);		// { value: 59, left: null, right: null }
// console.log(bst.left.right.left);		// { value: 35, left: null, right: null }
// console.log(bst.right.right);

/** Test contains method */
// console.log(bst.contains(50));
// console.log(bst.contains(15));

/** Test depth first traversal methods */
// bst.depthFirstTraversal(log, 'in-order');
// bst.depthFirstTraversal(log, 'pre-order');
// bst.depthFirstTraversal(log, 'post-order');

function log(node) {
  console.log(node.value);
};

/** Test breadth first traversal method */
// bst.breadthFirstTraversal(log);

/** Test getMinVal & getMaxVal methods */
// console.log('MIN: ', bst.getMinVal());
// console.log('MAX: ', bst.getMaxVal());