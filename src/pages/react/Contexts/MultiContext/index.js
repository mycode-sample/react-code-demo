import React, { useState } from 'react';
import { ThemeContext } from './PublicContext';
import { UserContext } from './PublicContext';
import { Button, Input } from 'antd';
import ConsumerCompt from './ConsumerCompt';

export default function MultiContext(props) {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState("guest");

  return(
    <div>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <ConsumerCompt/>
        </UserContext.Provider>
      </ThemeContext.Provider>
      <Button onClick={e => setUser("user")}>user</Button>
      <Button onClick={e => setUser("guest")}>guest</Button>
      <Input onChange={e => setTheme(e.target.value)}/>
    </div>
  );
}