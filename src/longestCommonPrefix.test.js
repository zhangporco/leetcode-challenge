const test = require('ava');

/**
 * 未完成
 * 写一个函数 for 查找数组中 strings 公共最长前缀
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (!strs[0]) return '';
    let prefix = strs[0].charAt(0);
    let boo = true;
    const find = (n) => {
        if (n < strs[0].length) {
            for (const [i, s] of strs.entries()) {
                if (s.indexOf(prefix) !== 0) {
                    boo = false;
                    n--;
                    break;
                }
            }
            if (boo) {
                n++;
                if (n >= strs[0].length) {
                    n--;
                }
                prefix += strs[0].charAt(n);
                return find(n);
            } else {
                n++;
                if (n >= strs[0].length) {
                    n--;
                }
                prefix = strs[0].substring(0, n);
                return prefix;
            }
        }
    }
    return find(0);
};

test('longestCommonPrefix 0', t => {
    const res = longestCommonPrefix(['a']);
    console.log(res);
    t.pass(res, 'ss');
});
