import arrays from "./methods/array";
import objects from "./methods/object";
import Class from './class'

// 聚合所有方法
const _ = {
  ...arrays,
  ...objects,
  ...Class,
}

export default _;
