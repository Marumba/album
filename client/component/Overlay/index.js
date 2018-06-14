import React, { Component, PropTypes } from 'react';

export default class Overlay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showOverlay: this.props.show,
			rendered: this.props.show
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.show) {
			
			this.setState({
				rendered: true
			}, () => {
				this.setState({ showOverlay: true })
			})
		}
		else {
			this.setState({ showOverlay: false })
		}
	}

	render() {
		if (this.state.rendered) {
			return (
				<div ref="overlay" className={this.state.showOverlay ? 'overlay overlay--show' : 'overlay overlay--hide'}>&nbsp;</div>
			)
		}
		return null
	}
}