import axios from 'axios';
import Immutable from 'immutee';

import { config } from './../../config/config';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';
export const FETCH_ALBUM = 'FETCH_ALBUM';
export const FETCH_ALBUM_FAILURE = 'FETCH_ALBUM_FAILURE';

const initialState = {
	all: {
		fetched: false,
		result: [],
		error: null
	},

	single:{
		fetched: false,
		result: [],
		error: null
	}
};

export default function reducer(state = initialState, action) {
	const immutable = Immutable(state);
	switch (action.type) {
		case FETCH_ALBUMS:
			return immutable
				.set('all.result', action.payload)
				.set('all.fetched', true)
				.set('all.error', null)
				.done();

		case FETCH_ALBUMS_FAILURE:
			return immutable
				.set('all.error', action.payload)
				.set('all.result', [])
				.set('all.fetched', false)
				.done();

		case FETCH_ALBUM:
			return immutable
				.set('single.result', action.payload)
				.set('single.fetched', true)
				.set('single.error', null)
				.done();

		case FETCH_ALBUM_FAILURE:
			return immutable
				.set('single.error', action.payload)
				.set('single.result', [])
				.set('single.fetched', false)
				.done();
		default:
			return state;
	}
}

export function fetchAlbums() {
	return (dispatch) => {
		return axios.get(config.urlAPI)
			.then((res) => {
				dispatch({
					type: FETCH_ALBUMS,
					payload: res.data
				});
			}).catch((err) => {
				dispatch({
					type: FETCH_ALBUMS_FAILURE,
					payload: err.stack
				});
			});
	}
}

export function fetchAlbum(data) {
	return (dispatch) => {
		if(data){
			dispatch({
				type: FETCH_ALBUM,
				payload: data
			});			
		}else{
			dispatch({
				type: FETCH_ALBUM_FAILURE,
				payload: 'Data is missing'
			});
		}			
	}
}