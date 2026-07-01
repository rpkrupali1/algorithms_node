/* 
Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order
*/
export function twoSum(nums: number[], target: number): number[] {
    let num1=0, num2=0;
    for(let i=0;i<nums.length;i++){
        num1= i;
        for(let j=i+1;j<nums.length;j++) {
            num2=j;
            if(nums[num1]+nums[num2]==target) {
                console.log(`The two numbers are ${nums[num1]} and ${nums[num2]}`);
                return [num1 ,num2];
            };
        }
    }
    return [];
};

console.log(twoSum([3,2,3], 6));