const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'), // 同 webpack.context
  moduleFileExtensions: [ // 同 webpack.resolve.extensions
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // 同 webpack.resolve.alias
  },
  transform: { // 同 webpack.module.rules
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  setupFiles: ['<rootDir>/test/unit/setup'], // 同 webpack.entry
  coverageDirectory: '<rootDir>/test/unit/coverage', // 同 webpack.output
  collectCoverageFrom: [ // 同 webpack 的 rule.include
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
};
