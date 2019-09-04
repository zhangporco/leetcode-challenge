const test = require('ava');

/**
 * 完成
 * @desc: 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头
 * @author: Porco
 * @created: 2019/9/4 3:01 PM
 */
const addTwoNumbers = function(l1, l2) {
	function ListNode(val) {
		this.val = val;
		this.next = null;
	}
	var sum  = 0;
	var added = false;
	var target = new ListNode(0);
	var result = target;
	
	while(l1 !== null || l2 !== null){
		target.next = new ListNode(0);
		target = target.next;
		//不是链尾
		if(l1 !== null){
			sum += l1.val;
			l1 = l1.next;
		}
		if(l2 !== null){
			sum += l2.val;
			l2 = l2.next;
		}
		if(added){
			sum++;
			added = false;
		}
		if(sum >= 10){
			added = true;
			sum -= 10;
		}
		target.val = sum;
		sum = 0;
	}
	if(added){
		target.next = new ListNode(1);
	}
	result = result.next;
	return result;
};

const addTwoNumbers2 = function (l1, l2) {
	function ListNode(val) {
		this.val = val;
		this.next = null;
	}
	
	const getNum = (node, array) => {
		array.push(node.val);
		if (node.next) {
			return getNum(node.next, array);
		} else {
			return array.reverse();
		}
	};
	const toNum = (array) => {
		let num = '';
		for (const v of array) {
			num += v;
		}
		return Number(num);
	};
	
	const setListNode = (node, array) => {
		console.log(node);
		node.next = new ListNode(array[0]);
		if (array.length > 1) {
			return setListNode(node.next, array.slice(1, array.length));
		}
		return node;
	};
	
	const num1 = toNum(getNum(l1, []));
	const num2 = toNum(getNum(l2, []));
	const array = (num1 + num2 + '').split('');
	const node = new ListNode(array[0]);
	return setListNode(node, array.slice(1, array.length));
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

test('addTwoNumbers 1', t => {
	const num1 = new ListNode(2);
	num1.next = new ListNode(4);
	num1.next.next = new ListNode(3);
	const num2 = new ListNode(5);
	num2.next = new ListNode(6);
	num2.next.next = new ListNode(4);

	const res = addTwoNumbers(num1, num2);
	console.log(res);
	t.is(res, [ 7, 0, 8 ]);
});