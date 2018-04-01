const test = require('ava');

/**
 * 完成
 * Given a positive integer, output its complement number. 
 * The complement strategy is to flip the bits of its binary representation.
 * Note:
 * The given integer is guaranteed to fit within the range of a 32-bit signed integer.
 * You could assume no leading zero bit in the integer’s binary representation.
 * @param {number} num 
 */
const findComplement = function(num) {
    const str = num.toString(2);
    const reversal = (str) => {
        let s = '';
        for (const [j, e] of str.split('').entries()) {  
            const item = e == 1 ? 0 : 1;
            if (s.length || item !== 0) {
                s += item;
            }
        }
        return s ? s : 0;
    }
    // console.log(str, reversal(str));
    return parseInt(reversal(str), 2);
};

test('numJewelsInStones 0', t => {
    const res = findComplement(5);
    t.is(res, 2);
});

test('numJewelsInStones 1', t => {
    const res = findComplement(8);
    t.is(res, 7);
});

test('numJewelsInStones 2', t => {
    const res = findComplement(1);
    t.is(res, 0);
});
