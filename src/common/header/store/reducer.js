import { Types } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.SEARCH_FOCUS:
            return state.set('focused', true);
        case Types.SEARCH_BLUR:
            return state.set('focused', false);
        case Types.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
}