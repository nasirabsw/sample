import  React from 'react';

class MyBaby extends React.Component {

	constructor(props) {
      super();
      console.log(props.data);

      this.state = { 
      	data: props.data
      }
   	}
   	
	render() {
      return (
         <div>
            My Baby is {this.state.data}
         </div>
      );
   }
}

export default MyBaby;