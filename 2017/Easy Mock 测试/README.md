使用 [Easy Mock](https://www.easy-mock.com/) 创建一个项目，

编辑自己的 API (参考 [mockjs 语法](http://mockjs.com/examples.html)) 后即可使用。

例如：

```js
{
  "success": true,
  "data": {
    "projects|100": [{
      "title": "@name",
      "img": "@image('200x200', '@color')",
      "url": "@url",
      "date": "@date",
      "text": "@paragraph(1)"
    }]
  }
}
```