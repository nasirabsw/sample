import React from "react";


class events extends React.Component {

   constructor(props) {
      super(props);
		 
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
   console.log('test');
      this.setState({data: 'Data updated...'})
   }

   render() {
      return (
         <div>
            <button onClick = {this.updateState}>CLICK</button>
            <h4>{this.state.data}</h4>
         </div>


      );
   }
}

export default events;


//TAKE NOTES : https://stackoverflow.com/questions/23293626/setstate-vs-replacestate-in-react-js