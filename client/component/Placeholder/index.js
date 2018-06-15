import React, { Component } from 'react';

import Card from '../../component/Card';

export default class Preloader extends Component {

	renderPreloader() {
		const placeholder = []
		for (let index = 0; index < this.props.quantity; index++) {
			placeholder.push(<Card key={index} type="placeholder" />);
		}
		return placeholder;
	}

	render() {
		return(
			this.renderPreloader()
		)
	}
}