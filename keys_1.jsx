import React from 'react';

class keys_1 extends React.component
{
	constructor(){
	super();

this.state = {
	data:
	[
		{
			compo: 'first',
			id:1
		},
				{
			compo: 'Sec',
			id:2
		},
		{
			compo: 'first',
			id:3
		}
	]

	}
}

render() {
      return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
   }
}


class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.compo}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}

export default keys_1