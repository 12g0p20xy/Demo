import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    alert(`已提交 ${this.state.value}`);
    // 放在最下面
    e.preventDefault();
  }

  render() {
    return (
      // 记得用箭头函数指定正确的 this
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        />
        <input type="submit" value="提 交" />
      </form>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);