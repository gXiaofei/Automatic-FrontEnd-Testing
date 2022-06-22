import addDivToBody from "./demo";
import $ from 'jquery';

test('测试addDivToBody', () => {
    addDivToBody();
    addDivToBody();
    expect($('body').find('div').length).toBe(2);
})

// node 不具备 dom
// jest 在node环境下自己模拟了一套 dom 的api， jsdom

