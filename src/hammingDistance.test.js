const test = require('ava');

/**
 * 完成
 * 海明距离
 * 在信息编码中，两个合法代码对应位上编码不同的位数称为码距，又称海明距离。
 * 两个码字的对应比特取值不同的比特数称为这两个码字的海明距离。
 * 在一个有效编码集中,任意两个码字的海明距离的最小值称为该编码集的海明距离。
 * 举例如下：10101和00110从第一位开始依次有第一位、第四、第五位不同，则海明距离为3。
 * @param {number} x 
 * @param {number} y 
 */
const hammingDistance = function(x, y) {
    const xor = (x ^ y).toString(2);
    let sum = 0;
    for (let i = 0; i < xor.length; i++) {
        if (xor.charAt(i) == '1') {
            sum++;
        }
    }
    return sum;
};

test('hamming distance 0', t => {
    const res = hammingDistance(1, 4);
    t.is(res, 2);
});

test('hamming distance 0', t => {
    const res = hammingDistance(93, 73);
    t.is(res, 2);
});
