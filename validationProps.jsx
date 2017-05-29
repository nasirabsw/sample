import React from 'react';

class ValidationProps extends React.Component{
	render(){
	return(
	<div>
		<h3>array: {this.props.propArray}</h3>
		<h3>Bool: {this.props.propBool? "True" : "False"}</h3>
		<h3>array: {this.props.optionalArray}</h3>
	</div>
	);
	}
}


ValidationProps.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired
   }




   ValidationProps.defaultProps = {	
   propArray: [1,2,3,4,5],
   propBool: true
   }

   export default ValidationProps;

