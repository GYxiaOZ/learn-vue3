# learn-vue3

启动此项目须注意，在安装完依赖后需手动将 `node_modules/@pixi/polyfill/lib/polyfill.es.js` 前 19 行代码全部注释

```javascript
// import { Polyfill } from 'es6-promise-polyfill';
// import objectAssign from 'object-assign';

// Support for IE 9 - 11 which does not include Promises
// if (!window.Promise) {
//     window.Promise = Polyfill;
// }

// // References:
// if (!Object.assign) {
//     Object.assign = objectAssign;
// }
```

因为虽然在 vite.config.js 中加入了 optimizeDeps 的配置，但是 vite 生成出来的代码还是有问题，只能暂时先这样解决

optimizeDeps 配置是将不符合 esm 模块规范的包重新编译
