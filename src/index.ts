import array from "@/methods/array";
import object from "@/methods/object";

// 聚合所有方法
const _ = {
  ...array,
  ...object,
}

export default _;
