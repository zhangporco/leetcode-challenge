const test = require('ava');

/**
 * 完成
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
 * Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
 * so "a" is considered a different type of stone from "A".
 */

var numJewelsInStones = function(J, S) {
    const arrJ = J.split('');
    const arrS = S.split('');
    let num = 0;
    for (const [n, j] of arrJ.entries()) {
        for (const [m, s] of arrS.entries()) {
            if (j === s) {
                num++;
            }
        }
    }
    return num;
};

test('numJewelsInStones 0', t => {
    const res = numJewelsInStones('ab', 'abfhb');
    t.is(res, 3);
});