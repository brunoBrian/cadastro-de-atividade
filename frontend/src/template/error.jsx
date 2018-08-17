import React from 'react'

export default props => {

	const errorEl = 'Houve algum problema: ' + props.error

	if(props.error){
		return (
			<div className="error container">
				<span className="alert alert-danger">{errorEl}</span> 
			</div>
		)
	} else {
		return false
	}
}