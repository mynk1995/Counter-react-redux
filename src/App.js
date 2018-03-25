import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import incrementValue from './components/action';


class App extends React.Component{
	
	incCount=()=>{
		this.props.incrementAction(this.props.countReducer.value+1);
	}
	decCount=()=>{
		this.props.incrementAction(this.props.countReducer.value-1);
	}
	
	render(){
		return(
			<div>
			
			<button onClick={this.incCount}>Increment</button>
			
			<br/>
			<button onClick={this.decCount}>Decrement</button>
			<br/>
						{this.props.countReducer.value}

			</div>	
			)
	}
}
function mapStateToProps(state){
	console.log(state);
	return {
		countReducer:state.count,
		maxCount:state.maxCount
	}
}
function matchDispatchToProps(dispatch){
	return {
		incrementAction:(data)=>dispatch(incrementValue(data))
	}
}
export default connect(mapStateToProps,matchDispatchToProps)(App);