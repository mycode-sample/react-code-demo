import React from 'react';

export const themes = {
  light: {
    background: '#ffffff',
  },
  dark: {
    background: 'rgb(72, 255, 57)',
  },
};

// 默认值
export const ThemeContext = React.createContext(themes.dark);
