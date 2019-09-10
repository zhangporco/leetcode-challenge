const test = require('ava');

/**
 * 缺失的第一个正数
 * @desc: 给定一个未排序的整数数组，找出其中没有出现的最小的正整数
 * 算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 * @author: Porco
 * @created: 2019/9/9 5:20 PM
 */
const firstMissingPositive = (nums) => {
	let min = 1;
	nums = nums.sort((a, b) => {
		return a - b;
	});
	for (const v of nums) {
		if (v === min) {
			min++;
		}
	}
	return min;
};

test('maxDepth 1', t => {
	const res = firstMissingPositive([ 1, 2, 3, -1, -1, 0 ]);
	t.is(res, 4);
});

test('maxDepth 2', t => {
	const res = firstMissingPositive([ 4, 2, 3, 6, 7, 0 ]);
	t.is(res, 1);
});

test('maxDepth 3', t => {
	const res = firstMissingPositive([ 4, 3, 2, 1 ]);
	t.is(res, 5);
});