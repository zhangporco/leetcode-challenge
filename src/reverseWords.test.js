const test = require('ava');

/**
 * 完成
 * 接受一个字符串，反转其中每个单词的字母顺序，但是保留初始单词顺序以及空格
 * @param {string} s 
 * @return {string}
 */
const reverseWords = function(s) {
    const words = s.split(' ');
    let res = '';
    for (const [i, word] of words.entries()) {
        let reverse = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reverse += word.charAt(i);
        }
        res += reverse;
        if (i < words.length - 1) {
            res += ' ';
        }
    }
    return res;
};

test('reverse words 0', t => {
    const res = reverseWords("Let's take LeetCode contest");
    t.is(res, "s'teL ekat edoCteeL tsetnoc");
});
