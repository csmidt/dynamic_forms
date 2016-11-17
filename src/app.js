import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Layouts
import App from 'layouts/app'

//components
import Home from 'ui/Home'

ReactDOM.render((
	<MuiThemeProvider>
	  <Router history={hashHistory}>
	    <Route component={App}>
	    	<Route component={ Home } path="/" />
	    </Route>
	  </Router>
	</MuiThemeProvider>
), document.getElementById('app'));