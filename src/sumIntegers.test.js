const test = require('ava');

/**
 * 完成
 * 求 a，b 的和，不允许使用 + - 运算符
 * 很明显，只能使用 位运算了
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    return (a ^ b) + ((a & b) << 1)
};

test('sum intergers 0', t => {
    const res = getSum(1, 2);
    console.log(res);
    t.pass(res);
});
