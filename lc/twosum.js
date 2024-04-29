/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = new Map();
    for(let i=0;i<nums.length;i++){
        let comp = target - nums[i];
        if(dict.get(nums[i]) != null){
            return [i,parseInt(dict.get(nums[i]),10)].sort();
        }else{
            dict.set(comp,i);
        }
    }
};

console.log(twoSum([2,7,11,15],9))
// @lc code=end
