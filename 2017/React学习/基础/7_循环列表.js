import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6]
    };
  }

  render() {
    // 使用 map 将 numbers 赋值给元素 <li>
    const lists = this.state.numbers.map((number, index) => {
      {/* 记得给元素添加一个 key */}
      return <li key={index}>{number}</li>
    });
    return (
      <ul>{lists}</ul>
    );
  }
}

ReactDOM.render(
  <ItemList />,
  document.getElementById('root')
);