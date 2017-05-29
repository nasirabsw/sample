import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './comp.jsx';
//import App from './new.jsx';

ReactDOM.render(<Comp />, document.getElementById('appId'));
//ReactDOM.render(<state_NB headerProp = "this is headerProp" contentProp = "this is contentProp"/>, document.getElementById('appId'));
/*ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('appId'));*/