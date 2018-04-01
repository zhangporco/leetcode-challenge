const test = require('ava');

/**
 * S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
 * S was sorted in some custom order previously. 
 * We want to permute the characters of T so that they match the order that S was sorted. 
 * More specifically, if x occurs before y in S, then x should occur before y in the returned string.
 * Return any permutation of T (as a string) that satisfies this property.
 * @param {string} S 
 * @param {string} T 
 * @return {string}
 */
const customSortString = function(S, T) {
    let res = '';
    for(let i = 0; i < S.length; i++) {
        const sort = () => {
            const index = T.indexOf(S.charAt(i));
            if (index > -1) {
                res += T.charAt(index);
                T = T.substring(0, index) + T.substring(index + 1, T.length);
                sort();
            }
        }
        sort();
    }
    return res + T;
};

test('custom sort string 0', t => {
    const res = customSortString('cba', 'abcd');
    t.is(res, 'cbad');
});

test('custom sort string 1', t => {
    const res = customSortString('kqep', 'pekeq');
    t.is(res, 'kqeep');
});
