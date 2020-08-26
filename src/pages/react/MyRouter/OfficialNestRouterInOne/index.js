import React from "react";
import {
  BrowserRouter as Router,
  Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Topic from './Topic';
import Topics from "./Topics";

export default function OfficialNestRouterInOne() {
  let match = useRouteMatch();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/react/router/official-nest-router-in-one/">Home</Link>
          </li>
          <li>
            <Link to="/react/router/official-nest-router-in-one/about">About</Link>
          </li>
          <li>
            <Link to="/react/router/official-nest-router-in-one/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/react/router/official-nest-router-in-one/about">
            <About />
          </Route>
          <Route path="/react/router/official-nest-router-in-one/topics">
            <Topics/>
          </Route>
          <Route exact path="/react/router/official-nest-router-in-one/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}