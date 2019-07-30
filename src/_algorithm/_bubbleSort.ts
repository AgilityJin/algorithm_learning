/**
 * @name 冒泡排序
 * @description:
 * 1. 排序从首位开始,依序与次位对比,按照规则进行大小对比
 * 2. 不符规则就交换双方位置,继续往下对比,直至结束
 * 3. 每确定一位,则下轮对比就不继续对比已经确定的数
 * 4. 最后一轮首位不需要继续进行对比就已经可以确定自身位置无误,也就是只进行n-1轮
 * 
 * @version 0.0.1
 */
export const _bubbleSort = (numArr: number[], direction = true) => {
  // 非数组抛出异常
  if (!Array.isArray(numArr)) throw new TypeError('params are not required arrays');
  // 长度小于等于1位则无需排序
  if (numArr.length <= 1) return numArr;

}
