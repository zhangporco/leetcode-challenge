const test = require('ava');

/**
 * 完成
 * @desc: 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头
 * @author: Porco
 * @created: 2019/9/4 3:01 PM
 */
const addTwoNumbers = function (l1, l2) {
	const getNum = function(list) {
		let num = '';
		for (let i = list.length - 1; i >= 0; i--) {
			num += list[i];
		}
		return Number(num);
	};
	const num1 = getNum(l1);
	const num2 = getNum(l2);
	return (num1 + num2 + '').split('').reverse();
};

test('addTwoNumbers 1', t => {
	const res = addTwoNumbers([ 2, 4, 3 ], [ 5, 6, 4 ]);
	t.pass(res, [ 7, 0, 8 ]);
});