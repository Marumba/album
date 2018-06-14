import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Card extends Component {

	renderCardHolder(){
		return  (
			this.props.title 
				? this.renderTitleCard()
				: this.renderRegularCard()
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