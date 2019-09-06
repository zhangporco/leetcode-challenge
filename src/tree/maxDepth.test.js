const test = require('ava');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const maxDepth = (root) => {
	if (!root || root.length === 0) return 0;
	let i = 0;
	let sum = 0;
	let boo = true;
	while (boo) {
		sum += Math.pow(2, i);
		if (sum <= root.length && sum + Math.pow(2, i + 1) > root.length) {
			boo = false;
		}
		i++;
	}
	return i;
};

test('maxDepth 1', t => {
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
	const res = maxDepth([3,9,20,null,null,15,7]);
	console.log(res);
	t.pass(res, false);
});