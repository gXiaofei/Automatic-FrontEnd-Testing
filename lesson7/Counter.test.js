import Counter from "./Counter";

// jest 钩子函数


let counter = null;


describe('测试Counter', () => {
    beforeAll(() => {
        // 测试文件开始执行前出触发一次
        console.log('run beforeAll');
        // counter = new Counter();
    })
    
    beforeEach(() => {
        // 每个测试用例之前都会调用 beforeEach
        console.log('run beforeEach')
        counter = new Counter();
    })
    
    afterEach(() => {
        // 每个测试用例之后都会调用 afterEach
        console.log('run afterEach')
    })
    
    
    afterAll(() => {
        // 所有测试执行完调用
        console.log('run afterAll')
    })
    describe('测试增加相关代码', () => {
        test('test Counter addOne function', () => {
            console.log('addOne');
            counter.addOne();
            expect(counter.number).toBe(1);
        });
        
        
        test('test Counter minusOne function', () => {
            console.log('minusOne');
            counter.minusOne();
            expect(counter.number).toBe(-1);
        });
    })
    
    describe('测试减少相关代码', () => {
        test('test Counter addTwo function', () => {
            console.log('addTwo');
            counter.addTwo();
            expect(counter.number).toBe(2);
        });
        
        
        test('test Counter minusOne function', () => {
            console.log('minusTwo');
            counter.minusTwo();
            expect(counter.number).toBe(-2);
        });
    })
})


