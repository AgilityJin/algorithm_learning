import chai from 'chai'
import { _easeBucketSort } from '../../dist/lib/_algorithm/_easeBucketSort'

const expect = chai.expect;

describe('简单桶排序测试', () => {
  it('非数组数据异常抛出', () => {
    const mockData = {a: 3, b: 4}
    const testFunc = () => {
      _easeBucketSort(mockData)
    }
    expect(testFunc).to.throw(Error, 'params are not required arrays');
  })
  it('长度1数组正确性测试', () => {
    const mockData = [3]
    expect(mockData).to.deep.equal([3])
  })
  it('数组含非number但可转换的为number的测试', () => {
    const mockData = [3,'2',3,1,'34',65,'8',9,8];
    const rightResult = [1, 2, 3, 3, 8, 8, 9, 34, 65];
    expect(_easeBucketSort(mockData)).to.deep.equal(rightResult);
  })
  it('数组含非number且不可转换为number的测试', () => {
    const mockData = [3,'dsfasdf',3,1,Error,65]
    expect(_easeBucketSort(mockData)).to.deep.equal([1, 3, 3, 65]);
  })
  it('整数排序测试: [3,2,3,1,34,65,8,9,8] 应该返回 [1, 2, 3, 3, 8, 8, 9, 34, 65]', () => {
    const mockData = [3,2,3,1,34,65,8,9,8];
    const rightResult = [1, 2, 3, 3, 8, 8, 9, 34, 65];
    expect(_easeBucketSort(mockData)).to.deep.equal(rightResult);
  })
  it('倒序排序测试: [1, 2, 3, 3, 8, 8, 9, 34, 65]应该返回[65, 34, 9, 8, 8, 3, 3, 2, 1]', () => {
    const mockData = [1, 2, 3, 3, 8, 8, 9, 34, 65];
    const rightResult = [65, 34, 9, 8, 8, 3, 3, 2, 1];
    expect(_easeBucketSort(mockData, false)).to.deep.equal(rightResult);
  })
})
