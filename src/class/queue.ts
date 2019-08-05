/**
 * Initialize your data structure here.
 */
export class Queue {
  data = []
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  push(num: never) {
    this.data.push(num)
  }
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    return this.data.splice(0, 1)[0]
  }
  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    return this.data[0]
  }
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.data.length <= 0
  }
};