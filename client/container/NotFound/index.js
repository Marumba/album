import { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Oops, page not found</title>
				</Helmet>
				<main className="main">				 
					<h1>404</h1>
				</main>
			</div>
		);
	}
}