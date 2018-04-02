const test = require('ava');

/**
 * 超时
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const checkIn = (array, item) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].sort().toString() === item.sort().toString()) return true;
        }
        return false;
    }
    const group = (array, size) => {
        const arrA = [];
        const noName = (t, a, n) => {
            if (n === 0) {
                if ((t[0] + t[1] + t[2]) === 0) {
                    if (!checkIn(arrA, t)) {
                        arrA[arrA.length] = t;
                    }
                }
                return;
            }
            for (let i = 0; i <= a.length - n; i++) {
                const b = t.slice();
                b.push(a[i]);
                noName(b, a.slice(i + 1), n - 1);
            }
        }
        noName([], array, size);
        return arrA;
    }
    return group(nums, 3);
};


const threeSum2 = (nums) => {
    const checkIn = (array, item) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].sort().toString() === item.sort().toString()) return true;
        }
        return false;
    }
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const array = [nums[i], nums[j], nums[k]];
                    if (!checkIn(res, array)) {
                        res.push(array);
                    }
                }
            }
        }
    }
    return res;
};


test.only('three sum 0', t => {
    // const array = [-1, 0, 1, 2, -1, -4];
    // const res = threeSum2(array);
    var addDigits = function(num) {
        const add = (n) => {
            let sum = 0;
            const array = n.toString().split('');
            for (let i = 0; i < array.length; i++) {
                sum += parseInt(array[i]);
            }
            if (sum >= 10) {
                return add(sum);
            } else {
                return sum;
            }
        }   
        return add(num);
    };
    console.log(addDigits(38));
    t.pass();
});

test('three sum 1', t => {
    const array = [12,5,-12,4,-11,11,2,7,2,-5,-14,-3,-3,3,2,-10,9,-15,2,14,-3,-15,-3,-14,-1,-7,11,-4,-11,12,-15,-14,2,10,-2,-1,6,7,13,-15,-13,6,-10,-9,-14,7,-12,3,-1,5,2,11,6,14,12,-10,14,0,-7,11,-10,-7,4,-1,-12,-13,13,1,9,3,1,3,-5,6,9,-4,-2,5,14,12,-5,-6,1,8,-15,-10,5,-15,-2,5,3,3,13,-8,-13,8,-5,8,-6,11,-12,3,0,-2,-6,-14,2,0,6,1,-11,9,2,-3,-6,3,3,-15,-5,-14,5,13,-4,-4,-10,-10,11];
    const res = threeSum2(array);
    console.log(res);
    t.pass();
});
