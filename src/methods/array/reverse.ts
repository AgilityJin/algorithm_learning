/**
 * @name 反转数组指定的起止位置
 * @param nums 待反转的数组
 * @param start 需要反转的起始位置
 * @param end 需要反转的结束位置
 * @returns {void} 直接修改原数组
 */
export const reverse = (nums: number[], start: number, end: number) => {
  while (start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
