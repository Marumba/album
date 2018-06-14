import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import Page from '../../component/Page';
import {Box} from '../../component/Box';
import Section from '../../component/Section';
import Loader from '../../component/Loader';

import { fetchAlbums } from '../../ducks/album';

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLoader: false,
            loaderMessages: undefined,
            albums: undefined
        }
    }

    componentDidMount() {
        this.handleFetchAlbums()
    }

    handleFetchAlbums() {
        this.setState({ showloader: true }, () => {
            this.props.dispatch(fetchAlbums()).then(() => {
                if (this.props.albums.all.fetched && this.props.albums.all.result) {
                    this.setState({
                        showLoader: false,
                        albums: this.props.albums.all.result.filter((item, index, arr) => arr.findIndex((next) => next.albumId === item.albumId) === index )
                    })
                } else {
                    this.setState({
                        showLoader: false
                    })
                }
            });
        })
    }

    renderAlbums() {
        if (this.state.albums && this.state.albums.length)
            return this.state.albums.map( (item,index) => <Box type='album' key={index} id={item.albumId} />)
    }

    render() {
        return (
            <Page pageClass={'home'}>
                <Helmet>
                    <meta name="description" content="Albums" />
                </Helmet>
                <main className='main'>
                    <div className="container">       
                        <Section sectionClass="home">
                            {this.renderAlbums()}
                        </Section>
                   </div>
                </main>
                <Loader show={this.state.showLoader} > {this.state.loaderMessages} </Loader>
            </Page>
        );
    }
}

export default connect((store) => {
    return {
        albums: store.albumState
    };
})(withRouter(Home));