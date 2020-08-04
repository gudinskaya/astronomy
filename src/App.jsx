import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Gallery from './pages/Gallery/Gallery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</div>
		</Router>
	)
}
export default App
