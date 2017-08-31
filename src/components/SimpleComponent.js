import React, {Component} from 'react';


class SimpleComponent extends Component {
	constructor(){
		super();

		this.state = {
			mood: "happy"
		}
	}

	handleClick = () => {
		this.setState({
			mood: "sad"
		})
	}

	render() {
		return (
			<div onClick={this.handleClick}>
			{this.state.mood}
			</div>
			)
	}

}


export default SimpleComponent