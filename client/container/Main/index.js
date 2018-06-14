import React, { Component } from 'react';
import { connect } from 'react-redux';
import root from 'window-or-global';
import { Helmet } from "react-helmet";

import main from './../../scss/main.scss';

class Main extends Component {

	render() {
		
		return (
			<div className={'app'}>
				<Helmet>
					<title>Testando</title>
				</Helmet>
				{this.props.children}
			</div>
		);
	}
}

export default connect((store) => {
	return { mainState: store.mainState };
})(Main);
