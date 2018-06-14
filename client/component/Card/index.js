import React, { Component } from 'react';

export class Card extends Component {

	mainContainerRender(data = this.props.beforeInner, cardClass = this.props.cardClass, clickAct = this.props.mainOnClick, id = this.props.id, selected = this.props.selected){
		return (
			<div className={"card" + (cardClass ? ' ' + cardClass : '') + (selected ? ' card--selected' : '')} onClick={() => clickAct(id)}>
				{data}
				{this.innerContainerRender()}
			</div>
		)
	}

	innerContainerRender(data = this.props.children){
		return (
			<div className="card__inner">
				{this.titleRender()}
				{this.descriptionRender()}
				{data}
			</div>
		)
	}

	titleRender(title = this.props.title){
		return title ? <h3 className="card__title">{title}</h3> : null
	}

	descriptionRender(desc = this.props.description){
		return desc ? <h4 className="card__description">{desc}</h4> : null
	}

	render() {
		return this.mainContainerRender()
	};
};

export class AddressCard extends Component {

	render() {
		return (
			<Card
				cardClass={'card__address'}
				title={'Bily Bob'}
				description={'Home sweet home'}
				beforeInner={<div className="card__selected">Selected for Delivery</div>}
				mainOnClick={this.props.mainOnClick}
				id={this.props.id}
				selected={this.props.selected}
			>
				<div className="card__information">
					<p className="card__information__main">
						Wisard St. 156, <br /> 123459 Pittsburgh - PS <br /> EUA
					</p>
					<p className="card__information__aux">
						Room 59
					</p>
				</div>
			</Card>
		);
	};
};


export class OrderCard extends Component {

	render() {
		return (
			<Card
				cardClass={'card__order'}
				id={this.props.id}
			>
				<div className="card__header">
					<div className="card__header__holder">
						<span class="card__header__title">Order Placed </span>
						<span class="card__header__data">April 12, 2018 </span>
					</div>
					<div className="card__header__holder">
						<span class="card__header__title">Total </span>
						<span class="card__header__data">$1.123,12 </span>
					</div>
					<div className="card__header__holder">
						<span class="card__header__title">Ship To </span>
						<span class="card__header__data">Home Sweet Home </span>
					</div>
					<div className="card__header__holder">
						<span class="card__header__title">Order Id</span>
						<span class="card__header__data">#110-3610028-6737053 </span>
					</div>
				</div>
				<div className="card__items">
					{this.props.children}
				</div>
			</Card>
		);
	};
};

export class OrderItem extends Component {

	render() {
		return (		
			<div className="card__item">
				<div className="card__item__image">
					<img src="/images/product-img.jpg" />
				</div>
				<div className="card__item__info">
					<div className="card__item__info__title">TP-LINK Dual-Band Router (White Version)</div>
					<div className="card__item__info__price">$234,12</div>
				</div>
			</div>
		);
	};
};