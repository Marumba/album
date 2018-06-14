import React, { Component } from 'react';
import { connect } from 'react-redux';

import Overlay from '../Overlay';

import { fetchModal } from '../../ducks/modal';

export class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: this.props.modal.show,
			rendered: this.props.modal.show,
			modalClass: this.props.className,
			useOverlay: this.props.useOverlay,
			contentContainer: this.props.contentContainer
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.modal.show) {
			this.setState({
				rendered: true,
				showModal: true,
				useOverlay: nextProps.useOverlay,
				modalClass: nextProps.className
			})
			
		}
		else {
			this.setState({
				showModal: false,
				useOverlay: false
			})
			if (this.state.rendered) {
				this.refs.modal.addEventListener('animationend', (e) => {
					if (e.animationName == 'fade-out') {
						this.setState({ rendered: false })
					}
				})
			}
		}
	}

	handleCloseBtnClick(){
		this.props.dispatch(fetchModal(false))
	}

	render() {
		if (this.state.rendered) {
			return (
				<div>
					<Overlay show={this.state.useOverlay} />
					<div ref="modal" className={'modal ' + (this.state.showModal ? 'modal--show' : 'modal--hide')}>
						<div className="modal__content">
							<div className="modal__close-button" onClick={this.handleCloseBtnClick.bind(this)}><span className="icon icon__close-button"></span></div>
							{this.props.children}
						</div>
					</div>
				</div>
			)
		}
		return null
	}
}

export default connect((store) => {
	return {
		modal: store.modalState
	};
})(Modal);
