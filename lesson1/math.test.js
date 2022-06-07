// var result = add(3, 7);
// var expected = 10;

// if(result !== expected) {
//     throw Error(`3 + 7 应该等于${expected}, 结果是${result}`)
// }

// var result = minus(3, 3);
// var expected = 0;

// if(result !== expected) {
//     throw Error(`3 - 3 应该等于${expected}, 结果是${result}`)
// }

function expected(result) {
    return {
        toBe: function(actual) {
            if(result !== actual) {
                throw Error(`预期值与测试值不相符, 预期${actual} 结果却是${result}`)
            }
        }
    }
}

function test (desc, fn) {
    try{
        fn();
        console.log(`${desc} 通过测试`)
    }catch(e) {
        console.log(`${desc}没有通过测试, ${e}`)
    }
}

test('测试加法', () => {
    expected(add(3, 3)).toBe(6);
})

test('测试减法', () => {
    expected(minus(3, 3)).toBe(1);
})

expected(add(3, 3)).toBe(6);