import {runCallback, createObject, getData} from "./demo";
import axios from 'axios';
jest.mock('axios');

test.only('测试 runCallback', () => {
    // mock 函数 
    const func = jest.fn(() => { // 1. 捕获函数的调用和返回结果，以及this和调用顺序
        // 模拟返回值
        return '456'
    });

    func.mockImplementation(() => {
        console.log('123444555')
        /**
         * 与 jest.fn(里面的函数一样)
         */
        return 'dell';
    })
    // 模拟第一次返回值为 123 
    // func.mockReturnValueOnce('123');
     // 模拟第二次返回值为 678 
    // func.mockReturnValueOnce('678');
    // 可以链式调用
    // func.mockReturnValueOnce('123').mockReturnValueOnce('678');
    // 模拟返回值
    func.mockReturnValue('123'); // 2. 它可以让我们自由的设置返回结果

    runCallback(func);
    runCallback(func);
    // 捕获函数的调用
    expect(func).toBeCalled();
    // 调用两次
    expect(func.mock.calls.length).toBe(2);
    // 第一次调用的参数
    expect(func.mock.calls[0]).toEqual(['abc']);
    expect(func).toBeCalledWith('abc');
    expect(func.mock.results[0].value).toBe('123');
    console.log(func.mock)

    /**
     * {
      calls: [ [ 'abc' ], [ 'abc' ] ], 调用的参数
      contexts: [ undefined, undefined ],
      instances: [ undefined, undefined ], 每次func运行的时候this的指向
      invocationCallOrder: [ 1, 2 ], 执行顺序
      results: [ 执行的时候返回值是什么
        { type: 'return', value: undefined },
        { type: 'return', value: undefined }
      ],
      lastCall: [ 'abc' ]
    }
     */
})

test('测试createObject', () => {
    const func = jest.fn();
    createObject(func);

    console.log('object func', func.mock)
})

test('测试 getData', async() => {
    // mock 返回结果
    axios.get.mockResolvedValue({data: 'hello'}) // 3. 改变函数的内部实现
    const data = await getData()
    expect(data).toBe('hello')
})