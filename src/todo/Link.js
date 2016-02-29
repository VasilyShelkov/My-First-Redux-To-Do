import React, { Component } from 'react';

class Link extends Component {
	render() {
		if (this.props.active){
 			return <span>{this.props.children}</span>
 		};

 		return (
 			<a href="#"
 				onClick={e => {
 					e.preventDefault();
 					this.props.onClick();
 				}}>
 				{this.props.children}
 			</a>
 		);
	};
}

export default Link;