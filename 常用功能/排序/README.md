### 数字排序

```js
let arr = [...]
arr.sort((a, b) => a - b)
```

### 字符串排序

```js
let items = [
  { name: 'Jack', value: 0 },
  { ... }
]
items.sort((a, b) => {
  let nameA = a.name.toUpperCase(), // 转换大小写
      nameB = b.name.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  return 0
})
```

[来源：Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)