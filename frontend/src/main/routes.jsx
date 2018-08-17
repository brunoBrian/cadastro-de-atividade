import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router' // Responsável pelas rotas

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
	<Router history={hashHistory}>
		<div>
			<Route path='/todos' component={Todo} /> // Mostrar o componente Todo
			<Route path='/about' component={About} /> // Mostrar o componente About
			<Redirect from='*' to='/todos' /> // redirect quando não encontrar o path (todo ou about)
		</div>
	</Router>
)