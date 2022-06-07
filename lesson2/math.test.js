const math = require('./math.js')
const {add, minus} = math;

test('测试加法', () => {
    expect(add(3, 3)).toBe(6);
})

test('测试减法', () => {
    expect(minus(3, 3)).toBe(0);
})

// 单元测试  集成测试
// 模块测试  多个模块测试