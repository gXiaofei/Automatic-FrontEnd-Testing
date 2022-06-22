jest.mock('./utils', () => {
    const Util = jest.fn(() => {
        console.log('constructor 11');
    });
    
    Util.prototype.a = jest.fn(() => {
        console.log('a 11');
    })
    
    Util.prototype.b = jest.fn(() => {
        console.log('b 11');
    })
    return Util;    
});
// jest.mock 发现util是一个类，会自动的把类的构造函数和方法变成 jest.fn
// 1. 也可以在__mocks__文件夹下模拟
// 2. 还可以在jest.mock('./utils', () => {}) 第二个回调函数内模拟
import Util from './utils';
import demoFunction from "./demo";

test('测试 demoFunction', () => {
    demoFunction();
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
})