import { expect } from 'chai'
import { cloneDeep } from '../../../dist/methods/object/cloneDeep'

describe('深拷贝测试', () => {
  it('非object or array异常数据测试', () => {
    const mockData = () => {console.log('测试用例')}
    expect(cloneDeep(mockData)).to.equal(mockData) // Function
    expect(cloneDeep('mockData')).to.equal('mockData') // String
    expect(cloneDeep(53543)).to.equal(53543) // Number
    expect(cloneDeep(true)).to.be.true // Boolean
    expect(cloneDeep(null)).to.be.null // null
    expect(cloneDeep(undefined)).to.be.an('undefined') // undefined
  })
  it('单层数组数据测试', () => {
    const testFunc = () => {console.log('测试用例')}
    const mockData = [1, '2', true, null, undefined, testFunc];
    expect(cloneDeep(mockData)).to.not.equal(mockData) // 引用地址不相等
    expect(cloneDeep(mockData)).to.eql(mockData) // key value 相等
    const result = cloneDeep(mockData)
    expect(result[5]).to.equal(mockData[5]) // function clone 引用地址相等
  })
  it('单层对象数据测试', () => {
    const testFunc = () => {console.log('测试用例')}
    const mockData = {
      a: 1,
      b: '2',
      c: true,
      d: null,
      e: undefined,
      f: testFunc
    }
    expect(cloneDeep(mockData)).to.not.equal(mockData) // 引用地址不相等
    expect(cloneDeep(mockData)).to.eql(mockData) // key value 相等
    const result = cloneDeep(mockData)
    expect(result['f']).to.equal(mockData['f']) // function clone 引用地址相等
  })
  it('多层数组数据测试', () => {
    const testFunc = () => {console.log('测试用例')}
    const mockData = [1, '2', true, null, undefined, [testFunc, 'test']];
    const result = cloneDeep(mockData)
    expect(result[5]).to.not.equal(mockData[5]) // 引用地址不相等
    expect(result[5]).to.eql(mockData[5]) // key value相等
    expect(result[5][0]).to.equal(mockData[5][0]) // function 引用地址相等
  })
  it('多层对象数据测试', () => {
    const testObject = {
      a: 'fsdaf'
    }
    const mockData = {
      a: 1,
      b: '2',
      c: true,
      d: null,
      e: undefined,
      f: testObject
    }
    const result = cloneDeep(mockData)
    expect(result.f).to.not.equal(mockData.f) // 引用地址不相等
    expect(result.f).to.eql(mockData.f) // key value相等
  })
  it('循环引用测试', () => {
    let mockData = {
      a: 1,
      b: '2',
      c: true,
      d: null,
      e: undefined
    }
    mockData.f = mockData
    const result = cloneDeep(mockData)
    expect(result.f).to.equal(result) // 引用地址要相等
    expect(result.f).to.eql(result) // key value相等
  })
})
