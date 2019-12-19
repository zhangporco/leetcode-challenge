const test = require('ava');

/**
 * 148
 * @desc: 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序
 * @author: Porco
 * @created: 2019/9/11 5:38 PM
 */
const sortList = (head) => {
	if (!head || !head.next) return head;
	
	let slow = head, fast = head;
	while (fast.next != null && fast.next.next != null) {
		
		slow = slow.next;
		fast = fast.next.next;
		console.log(11, slow);
		console.log(22, fast);
	}
	//拆成两个链表
	fast = slow;
	slow = slow.next;
	fast.next = null;
	
	fast = sortList(head);
	slow = sortList(slow);
	
	function merge(head1, head2) {
		if (head1 == null) {
			return head2;
		}
		if (head2 == null) {
			return head1;
		}
		let res = {}, p = {};
		if (head1.val < head2.val) {
			res = head1;
			head1 = head1.next;
		} else {
			res = head2;
			head2 = head2.next;
		}
		p = res;
		
		while (head1 != null && head2 != null) {
			if (head1.val < head2.val) {
				p.next = head1;
				head1 = head1.next;
			} else {
				p.next = head2;
				head2 = head2.next;
			}
			p = p.next;
		}
		
		if (head1 != null) {
			p.next = head1;
		} else if (head2 != null) {
			p.next = head2;
		}
		
		return res;
	}
	
	return merge(fast, slow);
};

test('sortList 1', t => {
	const head = {
		val: 4,
		next: {
			val: 2,
			next: {
				val: 1,
				next: {
					val: 3,
					next: null
				},
			},
		},
	};
	const res = sortList(head);
	console.log(res);
	t.pass(res, '');
});
