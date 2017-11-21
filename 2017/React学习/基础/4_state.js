import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

  普通函数转换成一个
  名称扩展为React.Component
  的 ES6 类

           ||
           ||
          \  /
           \/

  使用类就允许我们使用其它特性，
  例如局部状态、生命周期钩子

*/

class Clock extends React.Component {
  // 使用构造函数初始化 state
  constructor(props) {
    // 类组件应始终使用 props 调用基础构造函数
    super(props);
    this.state = {date: new Date()};
  }

  // 利用生命周期钩子让计时器定时刷新
  componentDidMount() {
    this.timerID = setInterval(
      () => this.timer(), 1000
    );
  }

  // 卸载计时器
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // 使用 setState() 更新状态
  timer() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);