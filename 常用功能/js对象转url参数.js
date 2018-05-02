const obj = { name: 111, age: 222 }
const query = Object.keys(obj).map((key) => {
  return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
}).join('&')