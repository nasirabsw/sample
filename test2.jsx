import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    //this.state ={data: 'test'};
    this.state ={
     values: {},
      showValues: {}
      }
  };

  btnClick(e){
   // alert('---')
   this.setState({data: 'nannsd'});
     // this.state ={data: 'sds'};
  }

  render(){
    return <div>
      <p>hello {this.state.data}</p>
      <input type="text" />
      <button onClick={this.btnClick.bind(this)}>click</button>
    </div>
  }

}

export default App;