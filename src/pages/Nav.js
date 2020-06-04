import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Nav() {
  return(
    <nav style={{
      width: "205px",
      display: "inline",
      borderRight: "solid 2px",
      float: "left",
      marginRight: "50px",
      height: "500px",
    }}>
      <ul>
        <li>
          <Link to="/">Nav</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/topics">topics</Link>
        </li>
        <li>
          <Link to="/antd">antd</Link>
        </li>
        <li>
          <Link to="/primary">basic</Link>
        </li>
        <li>
          <Link to="/primary/:demo">/primary/:demo</Link>
        </li>
        <li>
          <NavLink to="/home">navHome</NavLink>
        </li>
      </ul>
    </nav>
  );
}