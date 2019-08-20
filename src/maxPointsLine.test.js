const test = require('ava');
/**
 * 完成
 * Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
 */
const maxPoints = function (points) {
	const getMax = function (array) {
		let max = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[ i ].num > max) {
				max = array[ i ].num;
			}
		}
		return max;
	}
	
	const findK = function (array, k) {
		for (let i = 0; i < array.length; i++) {
			if (array[ i ].k === k) {
				return i;
			}
		}
	}
	
	/**
	 * 计算斜率，因为会涉及 js 精度问题
	 * @param {*} a
	 * @param {*} b
	 */
	const getK = function (a, b) {
		const gcd = function (a, b) {
			if (b === 0) return a;
			return gcd(b, a % b);
		}
		let dx = a.x - b.x;
		let dy = a.y - b.y;
		let d = gcd(dx, dy);
		dx = Math.floor(dx / d);
		dy = Math.floor(dy / d);
		let pair = "" + dx + "," + dy;
		return pair;
	}
	
	let max = 0;
	for (let i = 0; i < points.length; i++) {
		let slopes = [];
		let same = 1, vertical = 0;
		for (let j = i + 1; j < points.length; j++) {
			if (points[ i ].x == points[ j ].x && points[ i ].y == points[ j ].y) {
				same++;
				continue;
			}
			if (points[ i ].x == points[ j ].x) {
				vertical++;
				continue;
			}
			let k = getK(points[ i ], points[ j ]);
			
			let index = findK(slopes, k);
			if (index > -1) {
				slopes[ index ].num += 1;
			} else {
				slopes.push({ k: k, num: 1 });
			}
		}
		let sMax = getMax(slopes);
		let v = (sMax > vertical ? sMax : vertical) + same;
		max = v > max ? v : max;
	}
	return max;
}

/**
 * 方法二，精简版
 */
const maxPoints1 = function (points) {
	let size = points.length;
	if (size < 2) return size;
	const gcd = (a, b) => {
		if (b === 0) return a;
		return gcd(b, a % b);
	}
	let res = 0;
	for (let i = 0; i < size; ++i) {
		let hash = new Map();
		let horizontal = 0, vertical = 0, localMax = 0, overlap = 1;
		for (let j = i + 1; j < size; ++j) {
			let a = points[ i ], b = points[ j ];
			if (a.x === b.x && a.y === b.y) ++overlap;
			else if (a.x === b.x) ++vertical;
			else if (a.y === b.y) ++horizontal;
			else {
				let dx = a.x - b.x;
				let dy = a.y - b.y;
				let d = gcd(dx, dy);
				dx = Math.floor(dx / d);
				dy = Math.floor(dy / d);
				let pair = "" + dx + "," + dy;
				let curPoints = hash.has(pair) ? hash.get(pair) + 1 : 1;
				hash.set(pair, curPoints);
				localMax = Math.max(localMax, curPoints);
			}
		}
		res = Math.max(res, overlap + Math.max(localMax, Math.max(vertical, horizontal)));
	}
	return res;
}

test('max points0', t => {
	var points = [
		{ x: 0, y: 0 },
		{ x: 94911151, y: 94911150 },
		{ x: 94911152, y: 94911151 },
	];
	var res = maxPoints(points);
	t.is(res, 2);
});


test('max points1', t => {
	var points = [
		{ x: 84, y: 250 },
		{ x: 1, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: -70 },
		{ x: 0, y: -70 },
		{ x: 1, y: -1 },
		{ x: 21, y: 10 },
		{ x: 42, y: 90 },
		{ x: -42, y: -230 },
	];
	var res = maxPoints(points);
	t.is(res, 6);
});

test('max points2', t => {
	var points = [
		{ x: 0, y: 0 },
		{ x: 1, y: 1 },
		{ x: 0, y: 0 },
	];
	var res = maxPoints(points);
	t.is(res, 3);
});

test('max points3', t => {
	var points = [
		{ x: 1, y: 1 },
		{ x: 2, y: 2 },
		{ x: 3, y: 3 },
		
		{ x: 4, y: 5 },
		{ x: 18.3, y: 9 },
	];
	var res = maxPoints(points);
	t.is(res, 3);
});

test('max points4', t => {
	var points = [
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
	];
	var res = maxPoints(points);
	t.is(res, 2);
});

test('max points5', t => {
	var points = [
		{ x: 0, y: 0 },
	];
	var res = maxPoints(points);
	t.is(res, 1);
});

test('max points6', t => {
	var points = [
		{ x: 1, y: 1 },
		{ x: 1, y: 1 },
		{ x: 2, y: 2 },
		{ x: 2, y: 2 },
	];
	var res = maxPoints(points);
	t.is(res, 4);
});

test('max points7', t => {
	var points = [
		{ x: 0, y: 0 },
		{ x: 1, y: 1 },
		{ x: 1, y: -1 },
	];
	var res = maxPoints(points);
	t.is(res, 2);
});

test('max points8', t => {
	var points = [
		{ x: 0, y: 0 },
		{ x: 1, y: 0 }
	];
	var res = maxPoints(points);
	t.is(res, 2);
});
