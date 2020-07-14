import React, { Component, Suspense } from 'react';
import Loading from './Loading';

export default class LazyLoading extends Component {
  render() {
    const LoaderComponent = React.lazy(() => import('./Loader'));
    return(
      <div>
        <h1>懒加载</h1>
        <Suspense fallback={Loading}>
          <LoaderComponent/>
        </Suspense>
      </div>
    );
  }
}