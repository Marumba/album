import React, { Component } from 'react';
import Card from '../../component/Card';

export default class Section extends Component {
	renderTitle(){
		if (this.props.title)
			return (
				<div className="container">
					<Card title={this.props.title} />
				</div>
			)

	}

	render() {
		return (
			<section className={'section section__' + this.props.sectionClass}>	
				{ this.renderTitle() }
				<div className="container">
					<div className="row">
						{this.props.children}
					</div>
				</div> 
			</section>
		);
	}
}