import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Gallery from './pages/Gallery/Gallery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
				<Footer/>
			</div>
		</Router>
	)
}
export default App
