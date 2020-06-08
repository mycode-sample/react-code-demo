import React from 'react'
import Avatar from './Avatar'
import Comment from './Comment'

export default function User(props) {
  return(
    <div>
      <Avatar avatar={props.user.avatar}/>
      <div>{props.user.name}</div>
      <Comment comment={props.user.comment}/>
    </div>
  );
}