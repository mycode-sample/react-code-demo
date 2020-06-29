import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React from 'react';
import Load from './components/Load';
import Loadable from 'react-loadable';

import routerConfig from './router';

console.log(routerConfig);

export default function App(props) {
  const history = createBrowserHistory();
  return(
    <Router
      history={history}
      render={routerConfig}
    >
      {props.children}
    </Router>
  );
}

// export default function App(props) {
//   const Demo = Loadable({
//     loader: () => import('./components/Load'),
//     loading: () => <div>error</div>
//   });
//   console.log(Demo);
//   return(
//     <div>
//       <h1>app</h1>
//       <Load msg="hello"/>
//       <Demo msg="load"/>
//       {Loadable({
//     loader: () => import('./components/Load'),
//     loading: () => <div>error</div>
//   })}
//   </div>
//   );
// }
