// process.env.BABEL_ENV = 'development'
// process.env.NODE_ENV = 'development'
// module.exports = function (wallaby) {
//   var path = require('path')
//   process.env.BABEL_ENV = 'test'
//   process.env.NODE_ENV = 'test'
//   process.env.NODE_PATH +=
//     path.delimiter +
//     path.join(__dirname, 'node_modules') +
//     path.delimiter +
//     path.join(__dirname, 'node_modules/react-scripts/node_modules')
//   require('module').Module._initPaths()

//   return {
//     files: [
//       { pattern: 'src/setupTests.ts', instrument: false },
//       'src/**/*.+(ts|tsx|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
//       '!src/**/*.test.ts?(x)',
//     ],

//     tests: ['src/**/*.test.ts?(x)'],

//     env: {
//       type: 'node',
//     },

//     preprocessors: {
//       '**/*.js?(x)': (file) =>
//         require('@babel/core').transform(file.content, {
//           sourceMap: true,
//           compact: false,
//           filename: file.path,
//           presets: [require('babel-preset-jest'), 'react-app'],
//         }),
//     },

//     // setup: (wallaby) => {
//     //   console.log('SETUP')
//     //   const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(
//     //     (p) => require.resolve('react-scripts/' + p)
//     //   )

//     //   console.log('JC', jestConfig)
//     //   Object.keys(jestConfig.transform || {}).forEach(
//     //     (k) =>
//     //       ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k]
//     //   )
//     //   delete jestConfig.testEnvironment
//     //   wallaby.testFramework.configure(jestConfig)
//     // },

//     setup: function (wallaby) {
//       var jestConfig = require('./package.json').jest
//       /* for example:§
//        * jestConfig.globals = { "__DEV__": true }; */

//       console.log(wallaby.testFramework)
//       wallaby.testFramework.configure(jestConfig)
//     },

//     testFramework: 'jest',
//     debug: true,
//   }
// }
