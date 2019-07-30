/**
 * @name 简单桶排序
 * @description:
 * 1. 创建一个排序范围内的数组
 * 2. 下标就是当前位置所代表的值,初始均为0
 * 3. 每出现一次当前位 += 1
 * 4. 最后只需要依序从前往后或者从后往前循环遍历打印即可
 * 
 * @version 0.0.1
 * @param {Array} numArr 传入的数据应当是 number[],且必须是正整数 数组
 * @param {Boolean} direction 排序方向控制,默认true正序,false反序
 * @returns {Array} 经过排序后的数组
 */
export const _easeBucketSort = (numArr: number[], direction = true) => {
  // 非数组则抛出异常
  if (!Array.isArray(numArr)) throw new TypeError('params are not required arrays');
  // 长度小于等于1位则无需排序
  if (numArr.length <= 1) return numArr;

  let cacheArr: number[] = [],
      resultArr: number[] = [];

  numArr.map(item => {
    if (typeof item !== 'number') item = Number(item)
    cacheArr[item] = (cacheArr[item] || 0) + 1
  });

  let index = 0;
  const length = cacheArr.length;
  
  if (direction) {
    while (index++ < length) {
      while (cacheArr[index]-- > 0) {
        resultArr.push(index);
      }
    }
  } else {
    index = length
    while (index-- >= 0) {
      while (cacheArr[index]-- > 0) {
        resultArr.push(index);
      }
    }
  }
  return resultArr;
};
