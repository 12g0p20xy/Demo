import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Messager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello world',
      msgShow: true
    };
  }

  // 事件
  handleClick() {
    this.setState({
      msgShow: !this.state.msgShow
    });
  }

  render() {
    const msgShow = this.state.msgShow;
    let msg = null;
    if (msgShow) {
      msg = <h1>{this.state.msg}</h1>
    }
    else {
      msg = <h1>空空如也</h1>
    }

    return (
      <div>
        {msg}
        <button onClick={() => this.handleClick()}>显示/隐藏</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Messager />,
  document.getElementById('root')
);