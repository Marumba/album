import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import Page from '../../component/Page';
import Card from '../../component/Card';
import Section from '../../component/Section';
import Modal from '../../component/Modal';
import Loader from '../../component/Loader';
import Placeholder from '../../component/Placeholder';

import { fetchAlbums, fetchAlbum } from '../../ducks/album';
import { fetchModal } from '../../ducks/modal';
export class PhotoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLoader: false,
            loaderMessages: undefined,
            albumId: this.props.match.params && this.props.match.params.id ? this.props.match.params.id : undefined,
            photos: undefined,
            selectedPhoto: undefined
        }
        this.handlePhotoClick = this.handlePhotoClick.bind(this)
    }

    componentDidMount() {
        this.handleFetchAlbum()
    }
    
    handleFetchAlbum(){
        this.setState({ showloader: true }, () => {
            if (!this.props.albums.all.fetched && !this.props.albums.all.result.length) {
                this.props.dispatch(fetchAlbums()).then(() => {
                    if (this.props.albums.all.fetched && this.props.albums.all.result.length) {
                        const data = this.props.albums.all.result.filter(item => item.albumId == this.state.albumId)
                        this.props.dispatch(fetchAlbum(data))
                        this.setState({
                            showLoader: false,
                            photos: data
                        })         
                    } else {
                        this.setState({
                            showLoader: false
                        })
                    }
                }); 
            } else if (!this.props.albums.single.fetched && !this.props.albums.single.result.length) {
                const data = this.props.albums.all.result.filter(item => item.albumId == this.state.albumId)
                this.props.dispatch(fetchAlbum(data))
                this.setState({
                    showLoader: false,
                    photos: data
                })
            } else if ( this.props.albums.single.result[0].albumId != this.state.albumId) {
                const data = this.props.albums.all.result.filter(item => item.albumId == this.state.albumId)
                this.props.dispatch(fetchAlbum(data))
                this.setState({
                    showLoader: false,
                    photos: data
                })
            }else{
                this.setState({
                    showLoader: false,
                    photos: this.props.albums.single.fetched && this.props.albums.single.result.length ? this.props.albums.single.result : undefined
                });
            }
        })
    }
    
    handlePhotoClick(id) {
        const photo = this.state.photos[this.state.photos.findIndex((item) => item.id === id)]
        this.setState({ selectedPhotoUrl: photo.url, selectedPhotoTitle: photo.title }, () => this.props.dispatch(fetchModal(true)))    
    }

    renderPhotos() {
        if (this.state.photos && this.state.photos.length)
            return this.state.photos.map((item, index) => <Card clickHandler={this.handlePhotoClick} key={index} link={'/album/' + (item.albumId)} id={item.id} thumb={item.thumbnailUrl} />)
        else
            return <Placeholder quantity="12" />
    }

    render() {

        return (
            <Page pageClass={'photo-list'}>
                <Helmet>
                    <meta name="description" content="photo List" />
                </Helmet>
                <main className='main'>     
                    <Section sectionClass="photo-list" title={'Album ' + (this.state.albumId)}>
                        {this.renderPhotos()}
                    </Section>
                </main>
                < Modal show = { this.props.modal.show } useOverlay = { true } title = { this.state.selectedPhotoTitle } >
                    <img src={this.state.selectedPhotoUrl} />
                </Modal>
                <Loader show={this.state.showLoader} > {this.state.loaderMessages} </Loader>
            </Page>
        );
    }
}

export default connect((store) => {
    return {
        albums: store.albumState,
        modal: store.modalState
    };
})(withRouter(PhotoList));