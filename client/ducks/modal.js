import Immutable from 'immutee';

export const FETCH_MODAL = 'FETCH_MODAL';

const initialState = {
	show: false
};

export default function reducer(state = initialState, action) {
	const immutable = Immutable(state);
	switch (action.type) {
		case FETCH_MODAL:
			return immutable
				.set('show', action.payload)
				.done();
		default:
			return state;
	}
}

export function fetchModal(open) {
	return function (dispatch) {
		dispatch({ 
			type: 'FETCH_MODAL', 
			payload:  open 
		})
	}
}