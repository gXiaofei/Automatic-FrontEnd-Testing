// 测试用例
// matchers => 匹配器

test('测试 6与6 相匹配', () => {
    // toBe 匹配器 
    expect(6).toBe(6);
})

test('测试对象内容相等', () => {
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