import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Messager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg: '!dlrow olleH'};
  }

  // 事件
  reverseMsg() {
    this.setState({
      msg: this.state.msg.split('').reverse().join('')
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        {/* 这里需要使用箭头函数用于绑定 this */}
        <button onClick={() => this.reverseMsg()}>转换文字</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Messager />,
  document.getElementById('root')
);