const test = require('ava');

/**
 * 完成
 * 将 A 最左边的一部分移动至其最右边，如果经过若干此步骤，A 能成为 B 则返回 true，否则返回 false
    Example 1:
    Input: A = 'abcde', B = 'cdeab'
    Output: true

    Example 2:
    Input: A = 'abcde', B = 'abced'
    Output: false
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function(A, B) {
    let i = 0;
    const rotate = (str) => {
        if (str === B) {
            return true;
        } else if (i > A.length) {
            return false;
        }
        i++;
        return rotate(str.substring(1, str.length) + str.charAt(0));
    }
    return rotate(A);
};

test('rotate string 0', t => {
    const res = rotateString('abcde', 'cdeab');
    t.true(res);
});

test('rotate string 1', t => {
    const res = rotateString('abcde', 'abced');
    t.false(res);
});
