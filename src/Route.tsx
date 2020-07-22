import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/layout/Home';
import LoginGoogle from './components/login/LoginGoogle';

function AppRoute() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/auth/google" component={LoginGoogle} />
			</Switch>
		</Router>
	);
}

export default AppRoute;
