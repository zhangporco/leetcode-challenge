const test = require('ava');

/**
 * 完成
 * 一个 number 数组，有且仅有一个数是唯一的，其他的数字都会出现两次
 * 找出这个唯一数
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * @param {number[]} nums 
 * @return {number}
 */
const singleNumber = function(nums) {
    const findOnce = () => {
        if (nums && nums.length) {
            const num = nums[nums.length - 1];
            nums.pop();
            const index = nums.indexOf(num);
            if (index > -1) {
                nums.splice(index, 1);
                return findOnce();
            } else {
                return num;
            }
        }
    }
    return findOnce();
};

test('single number 0', t => {
    const res = singleNumber([1,1,3,4,4,5,7,5,3]);
    t.is(res, 7);
});
