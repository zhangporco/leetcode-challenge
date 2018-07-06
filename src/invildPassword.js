const test = require('ava');

/**
 * 1.长度超过8
 * 2.大小写字母，数字，符号，至少三种
 * 3.不能有相同长度超过 2 的子串
 * @param {string} str 
 * @return {string} 如果符合要求输出：OK，否则输出NG
 */
const invildPassword = function(str) {
    if (!str || str.length < 8) return 'NG';
    
};

test('invildPassword 0', t => {
    const res = invildPassword('021Abc9000');
    console.log(res);
    t.pass();
});