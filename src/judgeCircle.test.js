const test = require('ava');

/**
 * 完成
 * 原点（0，0）处有一个机器人，判断它按照输入路径 R (Right), L (Left), U (Up) and D (down) 
 * 移动后，能否回到原点
 * @param {string} moves 
 * @return {boolean}
 */
const judgeCircle = function(moves) {
    let line = 0, row = 0;
    for (let i = 0; i < moves.length; i++) {
        const route = moves.charAt(i);
        switch (route) {
            case 'R': {
                line++;
                break;
            }
            case 'L': {
                line--;
                break;
            }
            case 'U': {
                row++;
                break;
            }
            case 'D': {
                row--;
                break;
            }
        }
    }
    return line === 0 && row ===0;
};

test('judge circle 0', t => {
    const res = judgeCircle('RLUD');
    t.true(res);
});
