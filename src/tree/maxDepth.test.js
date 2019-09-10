const test = require('ava');

/**
 * 二叉树的最大深度
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const maxDepth = (root) => {
	let max = 0;
	const depth = (tree, i) => {
		tree.i = ++i;
		if (tree.left) {
			depth(tree.left, tree.i);
		}
		if (tree.right) {
			depth(tree.right, tree.i);
		}
		if (!tree.left && !tree.right && tree.i > max) {
			max = tree.i;
		}
	};
	depth(root, 0);
	console.log(root);
	return max;
};

const tree = {
	val: 3,
	left: {
		val: 9,
		left: null,
		right: null,
	},
	right: {
		val: 20,
		left: {
			val: 15,
			left: null,
			right: null,
		},
		right: {
			val: 7,
			left: null,
			right: null,
		},
	},
};
test('maxDepth 1', t => {
	const res = maxDepth(tree);
	console.log(res);
	t.pass(res, false);
});