// 测试用例
// matchers => 匹配器

test('测试 6与6 相匹配', () => {
    // toBe 匹配器 
    expect(6).toBe(6);
})


test('测试对象内容相等1', () => {
    // toEqual 匹配器 内容相等
    const a = {one: 1, two: 2};
    expect(a).toEqual({one: 1, two: 2})
})

test('toBeNull', () => {
    const a = null;
    expect(a).toBeNull();
})

// 真假
test('toBeUndefined', () => {
    const a = undefined;
    expect(a).toBeUndefined();
})

// 定义过就可以
test('toBeDefined', () => {
    const a = null;
    expect(a).toBeDefined();
})


test('toBeTruthy', () => {
    const a = 1;
    expect(a).toBeTruthy();
})

test('toBeFalsy', () => {
    const a = 0;
    expect(a).toBeFalsy();
})

test('not 匹配器', () => {
    const a = 1;
    expect(a).not.toBeFalsy();
})

// 数字相关的匹配器

// toBeGreaterThan >
test('toBeGreaterThan', () => {
    const count = 10;
    // 10 比 9 大
    expect(count).toBeGreaterThan(9);
})
// toBeLessThan <
test('toBeLessThan', () => {
    const count = 8;
    // 8 比 9 小
    expect(count).toBeLessThan(9);
})

// toBeGreaterThanOrEqual >=   toBeLessThanOrEqual <=
test('toBeGreaterThanOrEqual', () => {
    const count = 8;
    // 8 比 8 
    expect(count).toBeGreaterThanOrEqual(8);
})

// toBeCloseTo
test('toBeCloseTo', () => {
    // toEqual 不行
    expect(0.1 + 0.2).toBeCloseTo(0.3);
})


// string

// toMatch 包含

test('toMatch', () => {
    const str = 'http://baidu.com';
    
    expect(str).toMatch('bai');
    // 可以使用正则
    expect(str).toMatch(/^http/)
})

// Array,  Set

// toContain 包含
test('toContain', () => {
    const arr = ['a', 'bb', 'c'];
    
    expect(arr).toContain('bb');

    const setData = new Set(arr);

    expect(setData).toContain('a');
})


// 异常
// toThrow

const throwErrorFunc = () => {
    throw new Error('this is a new error');
}

test('toThrow', () => {
    expect(throwErrorFunc).toThrow('this is a new error')
})