 import React, { Component } from 'react';
 import {store} from '../index';

 class FilterLink extends Component {
 	constructor(props){
 		super(props);
 	}

 	render() {
 		if (this.props.filter === this.props.currentFilter){
 			return <span>{this.props.children}</span>
 		};

 		return (
 			<a href="#"
 				onClick={e => {
 					e.preventDefault();
 					this.props.onClick(this.props.filter);
 				}}>
 				{this.props.children}
 			</a>
 		);
 	}
}
 
 export default FilterLink;