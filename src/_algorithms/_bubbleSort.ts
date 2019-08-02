import { cloneDeep } from '../methods/object/cloneDeep'

/**
 * @name 是否不符合要求需要交换位置
 * @param num1 待比较数1
 * @param num2 待比较数2
 * @param direction 方向,false默认为从小到大 true为从大到小
 */
const isChangePosition = (num1: number, num2: number, direction = false) => {

}
/**
 * @name 冒泡排序
 * @description:
 * 1. 排序从首位开始,依序与次位对比,按照规则进行大小对比
 * 2. 不符规则就交换双方位置,继续往下对比,直至结束
 * 3. 每确定一位,则下轮对比就不继续对比已经确定的数
 * 4. 最后一轮首位不需要继续进行对比就已经可以确定自身位置无误,也就是只进行n-1轮
 * 时间复杂度: O(N^2)
 * @version 0.0.1
 */
export const _bubbleSort = (numArr: number[] | object[], direction: {direction: false, key: null}) => {
  // 非数组 or 长度小于等于1位 则原抛回数据
  if (!Array.isArray(numArr) || numArr.length <= 1) return numArr;
  let arr = cloneDeep(numArr);
  let index = 0
  while (index++ < arr.length) {
    if (Array.isArray(arr[index])) {
      // 数组数据
      arr[index] > arr[index + 1]
    } else if (typeof arr[index] === 'object') {
      // 对象数据根据key排序
    } else {
      // 不合法数据丢至末位
      
    }
  }
}
