module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    // 覆盖率分析文件的路径
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ],
    // 运行测试之前做准备的时候，额外准备什么
    "setupFiles": [
      // 在做测试的时候 polyfill这样的垫片，对jsdom做一些补偿，解决测试过程jsdom兼容性的问题
      "react-app-polyfill/jsdom"
    ],
    // 当测试环境建立好之后，你想做些其他的事情
    "setupFilesAfterEnv": [
      // 环境搭建好之后会执行文件，帮我们做一些额外的准备
      "<rootDir>/src/setupTests.ts"
    ],
    // 当我们运行 npm run test, 执行哪些测试文件
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    // 测试运行的环境
    "testEnvironment": "jsdom",
    // 当引入一些匹配到的文件会做后续的转化
    "transform": {
      // 当引入.(js|jsx|mjs|cjs|ts|tsx)  会使用babelTransform.js 做转化
      "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    // 忽略转化 node_module、css module
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    // 自动化测试的时候引入模块，这个模块默认到node_modules，如果node_modules 中没有可以在modulePaths中填写路径去这些目录下找
    "modulePaths": [],
    // identity-obj-proxy是个第三方模块，引入css module这样的样式的时候会把原始的样式变成一个js对象，这个对象就是一个简单的key-value
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    // 如果引入的模块没有后缀，会依次按下列数组中后缀查找    
    "moduleFileExtensions": [
      "web.js",
      "js",
      "web.ts",
      "ts",
      "web.tsx",
      "tsx",
      "json",
      "web.jsx",
      "jsx",
      "node"
    ],
    // 在命令行运行npm run test时，可以有些模式供我们使用，这些模式我们可以写一些插件
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ],
    "resetMocks": true
  }