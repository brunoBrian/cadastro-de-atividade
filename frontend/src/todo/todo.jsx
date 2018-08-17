import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import Erro from '../template/error'

const URL = "http://localhost:3003/api/todos"

class Todo extends Component {

	constructor(props) {
		super(props)

		this.state = {description: '', list: [], error: ''}

		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)

		this.handleRemove = this.handleRemove.bind(this)
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
		this.handleClear = this.handleClear.bind(this)

		this.refresh()
	}

	refresh(description = '') {
		const search = description ? `&description__regex=${description}` : ''

		axios.get(`${URL}?sort=-createdAt${search}`)
			.then(resp => this.setState({...this.state, description, list: resp.data}))
			.catch( (error) => {
			    this.setState({...this.state, error: error.message })
			});
	}

	handleSearch() {
		this.refresh(this.state.description)
	}

	handleAdd() {
		const description = this.state.description

		axios.post(URL, { description: description })
			.then(resp => this.refresh())
			.catch( (error) => {
			    this.setState({...this.state, error: error.message })
			});
	}

	handleChange(e) {
		this.setState({...this.state, description: e.target.value})
	}

	handleRemove(todo) {
		axios.delete(`${URL}/${todo._id}`)
			.then(resp => this.refresh(this.state.description))
			.catch( (error) => {
			    this.setState({...this.state, error: error.message })
			});
	}

	handleMarkAsDone(todo) {
		axios.put(`${URL}/${todo._id}`, {...todo, done: true})
			.then(resp => this.refresh(this.state.description))
			.catch( (error) => {
			    this.setState({...this.state, error: error.message })
			});
	}

	handleMarkAsPending(todo) {
		axios.put(`${URL}/${todo._id}`, {...todo, done: false})
			.then(resp => this.refresh(this.state.description))
			.catch( (error) => {
			    this.setState({...this.state, error: error.message })
			});
	}

	handleClear() {
		this.refresh()
	}

	render() {
		return (
			<div>
				<PageHeader name="Tarefas" small="Cadastro" />
				<Erro error={this.state.error} />
				<TodoForm 
					description={this.state.description} 
					handleAdd={this.handleAdd} 
					handleChange={this.handleChange}
					handleSearch={this.handleSearch}
					handleClear={this.handleClear} >
				</TodoForm>
				<TodoList list={this.state.list}
					handleRemove={this.handleRemove}
					handleMarkAsDone={this.handleMarkAsDone}
					handleMarkAsPending={this.handleMarkAsPending} >
				</TodoList>
			</div>
		)
	}
}

export default Todo