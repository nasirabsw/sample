import React from 'react';

class state_NB extends React.Component
{
	constructor(props){
		super(props);
	
			this.state = {date: new Date()};
	}

	render(){
		return(
				<div>
				<h1>hello world</h1>
				<h2> it is {this.state.date.toLocalTimeString()}</h2>
				</div>
		);

	}

}

export default state_NB