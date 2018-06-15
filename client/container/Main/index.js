import React, { Component } from 'react';
import root from 'window-or-global';
import { Helmet } from "react-helmet";

import main from './../../scss/main.scss';

export default class Main extends Component {

	render() {
		
		return (
			<div className={'app'}>
				<Helmet>
					<title>Album</title>
				</Helmet>
				{this.props.children}
			</div>
		);
	}
}