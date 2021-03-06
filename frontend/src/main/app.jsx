import 'modules/bootstrap/dist/css/bootstrap.min.css' // vindo de node_modules
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
	<div className="container">
		<Menu />
		<Routes />
	</div>
)