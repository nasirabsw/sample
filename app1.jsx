import React from 'react';

class MyApp extends React.Component {
   	render() {
      return (
         <div>
            Hello World!!! 
            <Headers />
             <Header/>
            <Contents/>
            <content_test/>
            <p>This is the content!!!</p> 
         </div>
      );
   	}
}

class Headers extends React.Component {
	render() {
		return(
		<div>
			<h1> Header page</h1>
		</div>
		);
	}
}


class Header extends React.Component{
	render(){
		return(
		<div>
			<h1> Header test</h1>
		</div>
		);
	}
}

class Contents extends React.Component{
	render(){
		return(
		<div>
			<p> contents test</p>
		</div>
		);
	}
}

export default MyApp;
