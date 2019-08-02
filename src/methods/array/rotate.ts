import { reverse } from './reverse'
/**
 * @name 右移数组方法
 * @param nums 待移动的数组
 * @param moveRight 右移位数 正整数
 * @returns {void} 直接修改原数组
 */
export const rotate = (nums: number[], moveRight: number) => {
  const len = nums.length
  moveRight %= len
  reverse(nums, 0, len - 1)
  reverse(nums, 0, moveRight - 1)
  reverse(nums, moveRight, len - 1)
}
