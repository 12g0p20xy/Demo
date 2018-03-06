## 文件目录

lib
 |_ cat               模块文件夹
     |_ body.js
        head.js
        main.js       入口模块
        package.json  自定义入口模块路径
index.js


位于 `/lib/cat/package.json` 自定义了同目录的 `main.js` 作为指定的入口模块，

所以 `index.js` 里可以使用 `require('./lib/cat')` 加载模块。