const strList = '0123456789abcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-=<>?/|{}[].'; // length 62

/**
 * @description 生成指定范围大小的随机数
 * @param max 最大范围
 * @param min 最小起始范围
 */
export const randomInt = (max: number, min: number = 0) => {
  var random = Math.floor(Math.random()*(max-min+1)+min);
  return random;
}

/**
 * @description 返回随机字符串
 * @param len 指定返回的长度
 */
export const randomString = (len: number, max: number = 62) => {
  if(typeof len !== 'number') return '';
  if(max > 62) max = 62;

  const needLen = parseInt(len.toString()); //指定需要的长度
  let ranStr = '';
  for (let index = 0; index < needLen; index++) {
    ranStr += strList[randomInt(max)];
  }
  return ranStr;
}