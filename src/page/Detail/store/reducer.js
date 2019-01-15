import { fromJS } from 'immutable';
import { Types } from './index';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.CHANGE_DETAIL_DATA:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default: return state;
    }
};
