import timer from './timer';

// 将useFakeTimers放在beforeEach中，重制timer的设置，不影响其他测试用例的执行
beforeEach(() => {
    jest.useFakeTimers();
})

// test('timer 测试1', (done) => {
//     timer(() => {
//         expect(1).toBe(1)
//         done();
//     })
// })


// setTimeout
test('timer 测试', () => {
    const fn = jest.fn();
    timer(fn)

    // 让所有定时器立即执行
    // jest.runAllTimers();

    // 运行只处于队列中的timers
    // jest.runOnlyPendingTimers();

    // 时间快进3秒
    jest.advanceTimersByTime(3000);
    // fn 执行一次
    expect(fn).toHaveBeenCalledTimes(1)
})


// setTimeout
test('timer2 测试', () => {
    const fn = jest.fn();
    timer(fn)

    // 让所有定时器立即执行
    // jest.runAllTimers();

    // 运行只处于队列中的timers
    // jest.runOnlyPendingTimers();

    // 时间快进3秒
    jest.advanceTimersByTime(3000);
    // fn 执行一次
    expect(fn).toHaveBeenCalledTimes(1)
     // 时间快进3秒
     jest.advanceTimersByTime(3000);
      // fn 执行两次
    expect(fn).toHaveBeenCalledTimes(2)
})


