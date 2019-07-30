/**
 * @name 深拷贝
 * @version 0.0.1
 * @param souceData 源数据
 * @description:
 * 将源对象基础类型数据赋值给另一个对象,引用类型则递归继续赋值,防止循环引用导致死循环
 */
export var cloneDeep = function (souceData) {
    // 不符合要求的数据抛回异常
    if (!souceData || typeof souceData !== 'object')
        return souceData;
    var resultData = Array.isArray(souceData) ? [] : {};
    for (var key in souceData) {
        if (souceData.hasOwnProperty(key)) {
            // 避免循环引用
            if (souceData[key] === souceData) {
                resultData[key] = resultData;
                continue;
            }
            if (typeof souceData[key] !== 'object') {
                resultData[key] = souceData[key];
            }
            else {
                resultData[key] = cloneDeep(souceData[key]);
            }
        }
    }
    return resultData;
};
