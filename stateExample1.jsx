import React from 'react';

class StateExample extends React.Component
{
constructor(props){
super(props);
this.state = {
	header = "this is header",
	footer = "this is footer"
	}
}
	


	render(){
	returns(
<div>
<h1>{this.state.header}</h1>
<h2>{this.state.footer}</h2>
</div>
	);
	}
}

export default StateExample;