import {add, minus} from './math';

test('测试加法', () => {
    expect(add(3, 3)).toBe(6);
})

test('测试减法', () => {
    expect(minus(3, 3)).toBe(0);
})

// 单元测试  集成测试
// 模块测试  多个模块测试


// npm run jest
// jest (babel-jest)
// babel-core
// 取 .babelrc 配置
// 在运行测试之前，结合babel，先把你的代码做一次转化
// 运行转化过的测试用例代码