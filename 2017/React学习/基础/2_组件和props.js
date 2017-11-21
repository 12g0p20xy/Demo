import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 定义一个 Welcome 组件并设置 props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 组合多个组件的父组件 App
function App() {
  return (
    // 引用自定义标签并传递 props 的值
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);