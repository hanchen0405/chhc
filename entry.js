import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory,IndexRedirect,IndexRoute} from 'react-router'


import Imp from './components/jj-imp'


class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}
ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={App}>
		<Route path="/imp" component={Imp}>
			
		
		</Route>
		<IndexRedirect to='/' />
		
	</Route>
	
</Router>,document.getElementById('app'))
