// const { override, adjustStyleLoaders } = require("customize-cra");
// module.exports = override(
//   // ...其他配置...
//   adjustStyleLoaders(rule => {
//     if (rule.test.toString().includes("scss")) {
//       rule.use.push({
//         loader: require.resolve("sass-resources-loader"),
//         options: {
//           resources: "./index.sass" //这里是你自己放公共scss变量的路径
//         }
//       });
//     }
//   })
// );
//修改默认配置
// const {
//   override,
//   fixBabelImports
// } = require('customize-cra')
import{override,fixBabelImports} from 'customize-cra'
// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);