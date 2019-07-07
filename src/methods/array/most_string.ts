interface IstrMap {
  [key: string]: number;
}
/**
 * @version 0.0.1
 * @description 获取string[]出现次数最多的字符及出现次数
 */
export const mostString = (str: string) => {
  const strArr = str.split('');
  let strMap: IstrMap = {},
      maxStr: string[] = [],
      maxCount = 0;

  // 转换为{key: count}形式
  strArr.forEach(item => {
    if (strMap[item]) {
      strMap[item] = ++strMap[item];
    } else {
      strMap[item] = 1;
    }
  })

  // 
  for (const key in strMap) {
    if (strMap[key] > maxCount) {
      maxStr = [key];
      maxCount = strMap[key]
    } else if (strMap[key] === maxCount) {
      maxStr.push(key)
    }
  }
  return [maxStr, maxCount];
}