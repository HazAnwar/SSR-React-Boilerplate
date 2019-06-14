import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';
import * as metadata from './metadata';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './components/Home'),
  loading() {
    return <div>Loading...</div>;
  }
});

const App = () => (
  <div className="app">
    <Helmet
      title={metadata.title}
      meta={metadata.meta}
      link={metadata.link}
      script={metadata.script}
      noscript={metadata.noscript}
    />

    <nav>
      <div className="text-center">
        <h1>Title</h1>
      </div>
    </nav>

    <div className="main text-center">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
      </Switch>
    </div>

    <footer>
      <h6 className="justify-content-center footer-text">
        Copyright COMPANY HERE
      </h6>
    </footer>
  </div>
);

export default App;
