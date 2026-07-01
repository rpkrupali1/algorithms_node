import { twoSum } from './TwoSum';

describe('twoSum', () => {
  it('should return the indices of the two numbers that add up to the target', () => { 
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it('should return the indices of the two numbers that add up to the target when there are duplicate numbers', () => {
    const nums = [3, 2, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 2]);
  });

  it('should return the indices of the two numbers that add up to the target when the numbers are negative', () => {
    const nums = [-3, -2, -1, -4];
    const target = -5;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it('should return empty array when no solution exists', () => {
    const result = twoSum([1, 2, 3], 100);
    expect(result).toEqual([]);
  });

  it('should work with a two-element array', () => {
    const result = twoSum([5, 5], 10);
    expect(result).toEqual([0, 1]);
  });

  it('should find the pair at the end of the array', () => {
    const result = twoSum([1, 2, 3, 4, 5], 9);
    expect(result).toEqual([3, 4]);
  });
});
