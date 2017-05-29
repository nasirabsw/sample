import React from 'react';

class Test extends React.component {
	constructor(props){
    super(props);

    this.state = {
      values: {},
      showValues: {}
    }
  };
  
  handleChange(e,name){
  	let values = this.state.values;
    values[name] = e.target.value;
  	this.setState({values: values})
  }
  
  handleClick(e){
  		let inputValues = this.state.values;
      this.setState({showValues: inputValues});
  }
  
  render(){
    return (
    		<div>
        		<input type="text" value={this.state.values["one"]} onChange={this.handleChange.bind(this, "one")}/>
            <p>{this.state.showValues["one"]}</p>
            
            
            <button onClick={this.handleClick.bind(this)}>Show value</button>
        </div>
    )
  }
}
