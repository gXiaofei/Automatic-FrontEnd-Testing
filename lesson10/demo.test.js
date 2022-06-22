

// 模拟fetchData
jest.mock('./demo');
// 会去__mocks__里面的demo
import { fetchData, getNumber } from './demo.js';

// 不模拟
// jest.unmock

/**
 * 如果不模拟jest.mock('./demo')
 * 可以在jest.config.js配置文件文件中开启automock: true
 * 会自动去__mocks__查找
 */

test('fetchData 测试', () => {

  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})

test('测试 getNumber ', () => {
  // 不模拟 同步执行函数 可以使用jest.requireActual
  const { getNumber } = jest.requireActual('./demo')
  expect(getNumber()).toBe('123');
})