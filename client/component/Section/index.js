import React, { Component } from 'react';

export default class Section extends Component {
	render() {
		return (
			<section className={'section section__' + this.props.sectionClass}>
				<div className="container">
					{ this.props.title ? <h1 class="title">{this.props.title}</h1> : null }	
					{ this.props.subtitle ? <h2 class="subtitle">{this.props.subtitle}</h2> : null }	
					{this.props.children}
				</div> 
			</section>
		);
	}
}