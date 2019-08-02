/**
 * Initialize your data structure here.
 */
interface Idata {
  [souceName: string]: any
}

export class HashMap {
  data: Idata = {}
  /**
   * value will always be non-negative. 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put (key: string, value: any) {
    this.data[key] = value 
  }
  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
   * @param {number} key
   * @return {number}
   */
  get (key: string) {
    return this.data.hasOwnProperty(key) ? this.data[key] : -1
  }
  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key 
   * @param {number} key
   * @return {void}
   */
  remove (key: string) {
    this.data.hasOwnProperty(key) && delete this.data[key]
  }
}
