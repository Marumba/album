import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Card extends Component {

	renderCardHolder(){
		return  (
			this.props.type == 'title' 
				? this.renderTitleCard()
				: this.props.type == 'placeholder'
					? this.renderPlaceholderCard()
					: this.renderRegularCard()
		)
		
	}

	renderPlaceholderCard(){
		return (
			<div className="card card--placeholder"><div className="bg-animation"></div></div>
		)
	}

	renderTitleCard(){
		return (
			<div className={"card card--title" + (this.props.customClass ? ' ' + this.props.customClass : '' )}><h1>{this.props.title}</h1></div>
		)
	}

	renderRegularCard(){
		return 	(
			<div class="card">
				{
					this.props.clickHandler
						? <a className="card__content" onClick={() => this.props.clickHandler(this.props.id)}> <img src={this.props.thumb} /> </a>
						: <Link to={this.props.link} className="card__content" > <img src={this.props.thumb} /> </Link>
				}
				
			</div>
		)
	}

	render() {
		return this.renderCardHolder()
	};
};