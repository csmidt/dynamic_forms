import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      
    </Route>
  </Router>
), document.getElementById('app'));