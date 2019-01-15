import { fromJS } from 'immutable';
import { Types } from './index';

const defaultState = fromJS({
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default: return state;
    }
};
