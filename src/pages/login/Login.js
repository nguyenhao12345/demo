import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { actUpdateRequest} from './../../actions/index'
import { Redirect} from 'react-router-dom'

class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''
		}
	}
	
	onChange=(event)=>{
		var target = event.target;
		var value = target.value;
		var name = target.name;
		this.setState({
			[name]: value
		})
	}
	onSubmit = (event) => {
		event.preventDefault();
		console.log('1');
		var {email,password}=this.state;
		var user={
			email: email,
			password:password
		}		
		this.props.onUpdate(user);		
	}
	render() {
		console.log(this.state);
		if (this.props.status === true) {
			return <Redirect to={{
				pathname: '/about',
			}} />
		}		
		return (
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Label for="exampleEmail">Email </Label>
					<Input type="email" name="email" value={this.state.value} placeholder="Enter email" onChange={this.onChange}/>
				</FormGroup>
				<FormGroup className ="ml-10">
					<Label for="examplePassword">Password </Label>
					<Input type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={this.onChange}/>
				</FormGroup>
				<button type="submit" className="btn btn-info">Login</button>
			</Form>
		);
	}
}

const mapStateToProps=state=>{
	return{
		status:state.users
	}
}

const mapDispathToProps = (dispatch,props)=>{
	return{
		onUpdate: (user) => {
			dispatch(actUpdateRequest(user))
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Login);
