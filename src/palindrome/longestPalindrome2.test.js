const test = require('ava');

/**
 * 完成
 * 最长回文串
 * @desc: 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。区分大小写
 * @author: Porco
 * @created: 2019/9/9 5:43 PM
 */
const longestPalindrome2 = (s) => {
	// const obj = {};
	// const array = s.split('');
	// for (const char of array) {
	// 	if (obj[char]) {
	// 		obj[char] += 1;
	// 	} else {
	// 		obj[char] = 1;
	// 	}
	// }
	// console.log(obj);
	// let len = 0;
	// let max = 0;
	// const keys = Object.keys(obj);
	// for (const k of keys) {
	// 	if (obj[k] % 2 === 0) {
	// 		len += obj[k];
	// 	} else if (obj[k] > max) {
	// 		max = obj[k];
	// 	}
	// }
	// return len + max;
	const set = new Set();
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (set.has(s[ i ])) {
			count += 2;
			set.delete(s[ i ])
		} else {
			set.add(s[ i ])
		}
	}
	return set.size > 0 ? count + 1 : count;
};

test('longestPalindrome 1', t => {
	const res = longestPalindrome2('babadABV');
	t.is(res, 5);
});

test('longestPalindrome 2', t => {
	const res = longestPalindrome2('abccccdd');
	t.is(res, 7);
});

test('longestPalindrome 3', t => {
	const res = longestPalindrome2('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth');
	t.is(res, 983);
});