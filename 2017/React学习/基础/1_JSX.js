import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 函数
function fullname(user) {
  return `${user.firstName} ${user.lastName}`;
}

// if 语句
function getGreeting(user) {
  if (user) {
    return element;
  }
  return <h1>Hello, Stranger</h1>;
}

const user = {
  firstName: 'Jesus',
  lastName: 'Christ'
};

// 元素
const element =
  <h1 className="active">
    Hello, {fullname(user)}.
  </h1>;

ReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
);