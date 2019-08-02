import chai from 'chai'
import { _bubbleSort } from '../../dist/lib/_algorithms/_bubbleSort'

const expect = chai.expect

describe('冒泡排序测试', () => {
  it('非法数据传递测试', () => {
    const mockData1 = () => console.log('测试用例')
    const mockData2 = undefined
    const mockData3 = null
    const mockData4 = 313.23
    const mockData5 = 'fdsaff'
    const mockData6 = { a: 'test'}
    const mockData7 = false

    expect(_bubbleSort(mockData1)).to.equal(mockData1)
    expect(_bubbleSort(mockData2)).to.be.undefined
    expect(_bubbleSort(mockData3)).to.be.null
    expect(_bubbleSort(mockData4)).to.equal(mockData4)
    expect(_bubbleSort(mockData5)).to.equal(mockData5)
    expect(_bubbleSort(mockData6)).to.equal(mockData6)
    expect(_bubbleSort(mockData7)).to.be.false
  })
  it('混合数据测试', () => {
    const mockData = [23, 54, 'tasfd', null, undefined, ['hshs', 54.23]]
    const mockData1 = [{
      a: null,
      b: 'fadfasf'
    }, {
      a: 432,
      b: 'fdsafdf'
    }, {
      a: () => console.log('测试用例'),
      b: 'fadfasf'
    }]
    expect(_bubbleSort(mockData)).to.equal([23, 54, "tasfd", ['hshs', 54.23], null, undefined])
    expect(_bubbleSort(mockData1)).to.equal([{
      a: 432,
      b: 'fdsafdf'
    }, {
      a: () => console.log('测试用例'),
      b: 'fadfasf'
    }, {
      a: null,
      b: 'fadfasf'
    }])
  })
  it('长度1数据测试', () => {
    const mockData = [42]
    const mockData1 = [{a: 'test'}]
    const mockData2 = [undefined]
    const mockData3 = [[432]]
    expect(_bubbleSort(mockData)).to.equal(mockData)
    expect(_bubbleSort(mockData1)).to.equal(mockData1)
    expect(_bubbleSort(mockData2)).to.equal(mockData2)
    expect(_bubbleSort(mockData3)).to.equal(mockData3)
  })
  it('数组数据测试', () => {
    const mockData = [423, 23.2543, 43, 45, 876.43, 12, 45, 666, -32, -12]
    expect(_bubbleSort(mockData)).to.not.equal(mockData) // 不能影响原数据
    expect(_bubbleSort(mockData)).to.equal([-32, -12, 12, 23.2543, 43, 45, 45, 423, 666, 876.43])
  })
  it('对象数组数据根据指定key排序测试', () => {
    const mockData = [{
      a: 423,
      name: 'test'
    }, {
      a: 43.3213,
      name: 'test1'
    }, {
      a: 876.43,
      name: 'test2'
    }, {
      a: -32,
      name: 'test3'
    }, {
      a: -12,
      name: 'test4'
    }]
    expect(_bubbleSort(mockData)).to.not.equal(mockData)
    expect(_bubbleSort(mockData)).to.eql([{
      a: -32,
      name: 'test3'
    }, {
      a: -12,
      name: 'test4'
    }, {
      a: 43.3213,
      name: 'test1'
    }, {
      a: 423,
      name: 'test'
    }, {
      a: 876.43,
      name: 'test2'
    }])
  })
  it('对象数组数据根据指定key非number异常数据测试', () => {
    const mockData = [{
      a: '423',
      name: 'test'
    }, {
      a: 43.3213,
      name: 'test1'
    }, {
      a: 'test',
      name: 'test2'
    }, {
      a: -32,
      name: 'test3'
    }, {
      a: -12,
      name: 'test4'
    }]
    expect(_bubbleSort(mockData)).to.eql([{
      a: -32,
      name: 'test3'
    }, {
      a: -12,
      name: 'test4'
    }, {
      a: 43.3213,
      name: 'test1'
    }, {
      a: '423',
      name: 'test'
    }, {
      a: 'test',
      name: 'test2'
    }])
  })
  it('数组及对象数组数据倒序测试', () => {
    const mockData = [423, 23.2543, 43, 45, 876.43, 12, 45, 666, -32, -12]
    const mockData1 = [{
      a: 423,
      name: 'test'
    }, {
      a: 43.3213,
      name: 'test1'
    }, {
      a: 876.43,
      name: 'test2'
    }, {
      a: -32,
      name: 'test3'
    }, {
      a: -12,
      name: 'test4'
    }]
    const targetData = [{
      a: 876.43,
      name: 'test2'
    }, {
      a: 423,
      name: 'test'
    }, {
      a: 43.3213,
      name: 'test1'
    }, {
      a: -12,
      name: 'test4'
    }, {
      a: -32,
      name: 'test3'
    }]
    expect(_bubbleSort(mockData)).to.equal([876.43, 666, 423, 45, 45, 43, 23.2543, 12, -12, -32])
    expect(_bubbleSort(mockData1)).to.eql(targetData)
  })
})
