import React, { Component } from 'react';

export default class Page extends Component {
	render() {
		return (
			<div className={'page page--' + this.props.pageClass}>
				{this.props.children}
			</div>
		);
	};
};