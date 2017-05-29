import React from 'react';
import MyBaby from './MyBaby.jsx';

class App extends React.Component {
	
	constructor(props) {
		 super(props);
		this.state = {data :'Pakki Mandaya'}
		this.changeData = this.changeData.bind(this);

	}
	
	changeData() {
		console.log("here");
		 this.setState({data: 'Mattu Mandaya'})

	}
   	render() {
      return (
         <div>
            Hello World!!!  
            <h1>{this.state.data}</h1>
            <MyBaby data={this.state.data} />
            <input type="button" value="Hit Me" onClick={this.changeData.bind(this)} />
         </div>
      );
   	}
}

export default App;
