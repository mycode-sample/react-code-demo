import React from 'react';
import User from './components/User';
import { Nav } from './Nav';

export default function UserInfo(props) {
  const user = {
    name: 'zhagnsan',
    comment: 'hello,welcome to react',
    avatar: 'avatar',
  }
  return(
    <div>
      <Nav/>
      <User user={user}/>
    </div>
  );
}