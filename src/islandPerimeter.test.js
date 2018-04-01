const test = require('ava');

/**
 * 完成
 * 接受一个 0，1 二维数组，0 代表大海，1 代表土地，求海岸线长度
 * 边界也算海岸线
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
    let res = 0;
    for (const [i, outside] of grid.entries()) {
        for (const [j, item] of outside.entries()) {
            if (item === 1) {
                // 上
                if (i - 1 >= 0) {
                    if (grid[i - 1][j] === 0) {
                        res++;
                    }
                } else {
                    res++;
                }
                // 下
                if (i + 1 < grid.length) {
                    if (grid[i + 1][j] === 0) {
                        res++;
                    }
                } else {
                    res++;
                }
                // 左
                if (j - 1 >= 0) {
                    if (grid[i][j - 1] === 0) {
                        res++;
                    }
                } else {
                    res++;
                }
                // 右
                if (j + 1 < outside.length) {
                    if (grid[i][j + 1] === 0) {
                        res++;
                    }
                } else {
                    res++;
                }
            }
        }
    }
    return res;
};

test('rotate string 0', t => {
    const array = 
    [[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]];
    const res = islandPerimeter(array);
    t.is(res, 16);
});
