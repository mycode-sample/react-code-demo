import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Users from './Users.js';

export default function OfficialNestRouter() {
  return (
    <div>
      <h1>OfficialNestRouter.</h1>
      <nav>
        <ul>
          <li>
            <Link to="/react/router/official-nest-router/">Home</Link>
          </li>
          <li>
            <Link to="/react/router/official-nest-router/about">About</Link>
          </li>
          <li>
            <Link to="/react/router/official-nest-router/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path={`/react/router/official-nest-router/about`}>
          <About />
        </Route>
        <Route path={`/react/router/official-nest-router/Users`}>
          <Users />
        </Route>
        <Route path={`/react/router/official-nest-router`}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}