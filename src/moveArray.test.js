const test = require('ava');

/**
 * 完成
 * 将数组中的 0 都移动至数组末尾，并不改变其他非 0 元素相对位置
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let n = -1;
    const move = (i) => {
        n++;
        if (n < nums.length) {
            if (nums[i] === 0) {
                nums.push(0);
                nums.splice(i, 1);
                move(i);
            } else {
                move(i + 1);
            }
        }
    }
    move(0);
    return nums;
};

test('move array 0', t => {
    const array = [0, 0, 1];
    const res = moveZeroes(array);
    t.pass();
});
