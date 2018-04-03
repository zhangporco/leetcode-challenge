const test = require('ava');

/**
 * 完成
 * 判断是否是数字
 * @param {*} s 
 */
const isNumber = function(s) {
    // 去除两头空格
    s = s.replace(/^\s+|\s+$/g,"");
    if (!s) return false; 
    var val = +s;
    if (val || val === 0) {
        return true;
    }
    return false;
}

test('vaild number1', t => {
    const res = isNumber('0');
    t.true(res);
});
test('vaild number2', t => {
    const res = isNumber(' 0.1 ');
    t.true(res);
});
test('vaild number3', t => {
    const res = isNumber('abc');
    t.false(res);
});
test('vaild number4', t => {
    const res = isNumber('1 a');
    t.false(res);
});
test('vaild number5', t => {
    const res = isNumber('2e10');
    t.true(res);
});
test('vaild number6', t => {
    const res = isNumber(' ');
    t.false(res);
});
test('vaild number7', t => {
    const res = isNumber(". 1");
    t.false(res);
});
