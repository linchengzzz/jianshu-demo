import { fromJS } from 'immutable';
import { Types } from './index';

const defaultState = fromJS({
    isLogin: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.CHANGE_LOGIN:
            return state.set('isLogin', action.isLogin)
        default: return state;
    }
};
