import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { fetchAlbums, fetchAlbum, fetchFotos } from '../../ducks/album';

import Page from '../../component/Page';
import {Box} from '../../component/Box';
import Section from '../../component/Section';
import Loader from '../../component/Loader';

export class PhotoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLoader: false,
            loaderMessages: undefined,
            albumId: this.props.params && this.props.params.id ? this.props.params.id : undefined
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(id) {
        this.setState({ selected: id})    
        console.log('id',id)     
    }

    render() {

        return (
            <Page pageClass={'address-list'}>
                <Helmet>
                    <meta name="description" content="Address List" />
                </Helmet>
                <Header />
                <main className='main'>
                    <div className="container">       
                        <Section sectionClass="address-list" title="Address List">
                            <Box />
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
        albums: store.albumState,
        album: store.albumState
    };
})(withRouter(PhotoList));