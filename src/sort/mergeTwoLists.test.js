const test = require('ava');

/**
 * 21 归并排序
 * @desc: 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @author: Porco
 * @created: 2019/9/12 5:27 PM
 */
var mergeTwoLists = function(l1, l2) {
	
	const merge = (list1, list2, list) => {
		if (!list1) {
			list = list2;
		}
		if (!list2) {
			list = list1;
		}
		
		if (list1.val > list2.val) {
			list.val = list2.val;
			list.next = {};
			merge(list1, list2.next, list.next);
		} else {
			list.val = list1.val;
			list.next = {};
			merge(list1.next, list2, list.next);
		}
	};
	const node = {};
	merge(l1, l2, node);
	return node;
};

const makeArray = (list) => {
	let array = [];
	let flag = true;
	let node = list;
	while (flag) {
		if (node) {
			array.push(node.val);
			node = node.next;
		} else {
			flag = false;
		}
	}
	return array;
};

test('mergeTwoLists 1', t => {
	const l1 = {
		val: 1,
		next: {
			val: 2,
			next: {
				val: 4,
				next: null,
			},
		},
	};
	const l2 = {
		val: 1,
		next: {
			val: 3,
			next: {
				val: 4,
				next: null,
			},
		},
	};
	const res = mergeTwoLists(l1, l2);
	console.log(makeArray(res));
	t.pass(res, '');
});