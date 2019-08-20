const test = require('ava');

/**
 * 完成（不够优化，超时）
 * Split Array With Same Average
 * In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)
 * Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.
 */
const splitArraySameAverage = (array) => {
	if (array.length == 1) return false;
	array.sort((a, b) => a - b);
	/**
	 * 求数组平均数
	 * @param {*} arr
	 */
	const average = (arr) => {
		let sum = 0;
		for (const e of arr) {
			sum += e;
		}
		return sum / arr.length;
	}
	
	/**
	 * 求数组 array 所有长度为 size 的子数组的组合
	 * @param {*} array
	 * @param {*} size
	 */
	const group = (array, size) => {
		const arrA = [];
		const noName = (t, a, n) => { //tempArr, arr, num
			if (n === 0) {
				arrA[ arrA.length ] = t;
				return;
			}
			for (let i = 0; i <= a.length - n; i++) {
				const b = t.slice();
				b.push(a[ i ]);
				noName(b, a.slice(i + 1), n - 1);
			}
		}
		noName([], array, size);
		return arrA;
	}
	
	for (let i = 1; i < array.length / 2; i++) {
		let res = group(array, i);
		for (const [ j, a ] of res.entries()) {
			const b = array.slice();
			for (const [ j, e ] of a.entries()) {
				b.splice(b.indexOf(e), 1);
			}
			if (average(a) === average(b)) return true;
		}
		
	}
	return false;
}

/**
 * 阶乘
 * @param {*} num
 */
const factorial = (num) => {
	if (num < 0) {
		return -1;
	} else if (num === 0 || num === 1) {
		return 1;
	} else {
		return (num * factorial(num - 1));
	}
}

test('split array 0', t => {
	const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	const res = splitArraySameAverage(array);
	t.true(res);
});
test('split array 1', t => {
	const array = [ 3, 1 ];
	const res = splitArraySameAverage(array);
	t.false(res);
});