const test = require('ava');

/**
 * 完成
 * 给定一个整数数组 1 ≤ a[i] ≤ n (n = size of array)
 * 其中有些元素出现多次，找出未出现的数
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
	const res = [];
	for (let i = 1; i <= nums.length; i++) {
		if (!nums.includes(i)) {
			res.push(i);
		}
	}
	return res;
};

/**
 * 完成
 * 给定一个整数数组 1 ≤ a[i] ≤ n (n = size of array)
 * 其中有些元素出现多次，找出出现两次的数
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
	let res = new Set();
	nums.sort();
	for (let i = 0; i < nums.length; i++) {
		if (i + 1 < nums.length && nums[ i ] === nums[ i + 1 ]) {
			res.add(nums[ i ]);
			i++;
		}
	}
	return Array.from(res);
};

test.only('find duplicates 0', t => {
	const array = "Of all the gin joints in all the towns in all the world,   ";
	const res = countSegments(array);
	console.log(res);
	t.pass();
});

test('find duplicates 0', t => {
	const array = [ 4, 3, 2, 7, 8, 2, 3, 1 ];
	const res = findDuplicates(array);
	console.log(res);
	t.pass();
});
