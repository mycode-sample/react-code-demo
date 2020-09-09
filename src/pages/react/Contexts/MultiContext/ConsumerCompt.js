import React from 'react';
import { ThemeContext, UserContext } from './PublicContext';

export default function ConsumerCompt(props) {
  return(
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <p>user: {user},theme: {theme}</p>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}