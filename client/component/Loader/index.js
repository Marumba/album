import React, { Component, PropTypes } from 'react';
import Overlay from './../Overlay'

export default class Loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showLoader: this.props.show,
			rendered: this.props.show,
			message: this.props.children
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.show) {
			if (!this.state.showLoader) {
				this.setState({
					rendered: true,
					useOverlay: this.props.useOverlay ? true : false,
					message: nextProps.children
				}, () => {
					this.setState({ showLoader: true })
				})
			}
		}
		else {
			if (this.state.showLoader) {
				this.setState({
					showLoader: false,
					useOverlay: false,
					rendered: false
				})
			}
		}
	}

	render() {
		if (this.state.rendered) {

			return (
				<div>
					<Overlay show={true} />
					<div ref="loader" className={this.state.showLoader ? 'loader loader--show' : 'loader loader--hide'}>
						<div className="loader__spin">&nbsp;</div>
						{this.state.message}
					</div>
				</div>
			)
					
		}
		return null
	}
}