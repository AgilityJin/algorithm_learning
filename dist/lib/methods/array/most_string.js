/**
 * @version 0.0.1
 * @description 获取string[]出现次数最多的字符及出现次数
 */
export var mostString = function (str) {
    var strArr = str.split('');
    var strMap = {}, maxStr = [], maxCount = 0;
    // 转换为{key: count}形式
    strArr.forEach(function (item) {
        if (strMap[item]) {
            strMap[item] = ++strMap[item];
        }
        else {
            strMap[item] = 1;
        }
    });
    // 
    for (var key in strMap) {
        if (strMap[key] > maxCount) {
            maxStr = [key];
            maxCount = strMap[key];
        }
        else if (strMap[key] === maxCount) {
            maxStr.push(key);
        }
    }
    return [maxStr, maxCount];
};
