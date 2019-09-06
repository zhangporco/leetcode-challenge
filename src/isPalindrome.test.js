const test = require('ava');

const isPalindrome = function (x) {
	if (x <= 0) return false;

	const len = Math.floor(x.length / 2);
	for (let i = 0; i < len; i++) {
		if (x.charAt(i) !== x.charAt(x.length - 1 - i)) return false;
	}
	return true;
};

test('isPalindrome 1', t => {
	const res = isPalindrome(10);
	t.is(res, false);
});