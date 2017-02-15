import initialState from './initialState';
import * as types from '../constants/actionTypes';

// handles video related actions.
// return an updated copy of the state depending on action type.
export default function (state = initialState.videos, action) {
	switch (action.type) {
		case types.SHUTTER_VIDEOS_SUCCESS:
			return [...state, action.videos];
		case types.SELECTED_VIDEO:
			return { ...state, selectedVideo: action.video };
		default:
			return state;
	}
}
