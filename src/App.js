import React, { Component } from 'react';
import './App.css';
import Login from './pages/login/Login';
import About from './pages/about/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [
	{
		path: '/login',
		exact: false,
		main: () => <Login />
	},
	{
		path: '/about',
		exact: false,
		main: () => <About />
	}
];


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{this.showContentMenus(routes)}
				</div>
			</Router>
		);
	}
	showContentMenus = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main} />
				)
			})
		}
		return <Switch>{result}</Switch>;
	}
}

export default App;
