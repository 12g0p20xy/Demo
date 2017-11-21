import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Comment(props) {
  return (
    <div className="Comment">
      {/* 引用 UserInfo 组件 */}
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// 组件 Avatar
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

// 组件 UserInfo
function UserInfo(props) {
  return (
    <div className="UserInfo">
      {/* 引用 Avatar 组件 */}
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function formatDate(date) {
  return date.toLocaleDateString();
}

ReactDOM.render(
  <Comment
    date={new Date()}
    text={'I hope you enjoy learning React!'}
    author={{
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }} />,
  document.getElementById('root')
);