const test = require('ava');

/**
 * @desc: 键盘连续密码，如果密码中出现四个及以上键盘连续方向按键（键盘四个方向：从左至右、从右至左、从上至下、从下至上），即为不安全密码，
 * 不考虑 shift 转义的按键
 * 不安全返回 false
 * 安全返回 true
 * @author: Porco
 * @created: 2019/9/5 3:44 PM
 */
const keyboardPwd = (pwd) => {
	if (pwd.length < 3) return false;
	const motherPlant = [
		'1234567890-=',
		'qwertyuiop[]',
		'asdfghjkl;',
		'zxcvbnm,./',
		'1qaz',
		'2wsx',
		'3edc',
		'4rfv',
		'5tgb',
		'6yhn',
		'7ujm',
		'8ik,',
		'9ol.',
		'0p;/',
	];
	for (let i = 0; i < pwd.length - 3; i++) {
		const child = pwd.substring(i, i + 4);
		for (const item of motherPlant) {
			if (item.indexOf(child) > -1 || item.indexOf(child.split('').reverse().join('')) > -1) return false;
		}
	}
	return true;
};

test('keyboardPwd 1', t => {
	const res = keyboardPwd('qwert');
	t.is(res, false);
});
test('keyboardPwd 2', t => {
	const res = keyboardPwd('12wedf');
	t.is(res, true);
});
test('keyboardPwd 3', t => {
	const res = keyboardPwd('s4dfqjq5tghj1');
	t.is(res, true);
});
test('keyboardPwd 4', t => {
	const res = keyboardPwd('poiujsadfh');
	t.is(res, false);
});
test('keyboardPwd 5', t => {
	const res = keyboardPwd('-=q[]asx3');
	t.is(res, true);
});