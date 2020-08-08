import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Gallery from './pages/Gallery/Gallery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
	const baseURL = process.env.BASE_URL || '/astronomy'

	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path={`${baseURL}/`} exact component={Home} />
					<Route path={`${baseURL}/gallery`} component={Gallery} />
				</Switch>
				<Footer/>
			</div>
		</Router>
	)
}

export default App
