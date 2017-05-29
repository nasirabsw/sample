import React from 'react';

class StateExample_L1 extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...",
         "content": "Content from state...",
         "footer": "footer test from state"
      }
   }
	
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <h3>{this.state.footer}</h3>
         </div>
      );
   }
}

export default StateExample_L1;