import { generateConfig, generateAnotherConfig } from "./demo";

test("测试 generateConfig 函数", () => {
  // 第一次会自动生成一个快照
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test("测试 generateAnotherConfig 函数", () => {
  // 第一次会自动生成一个快照
  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test("测试 generateAnotherConfig 函数", () => {
  // 行内 snapshot 
  // 1. 安装 prettier  npm install prettier
  // 2. 使用toMatchInlineSnapshot
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
