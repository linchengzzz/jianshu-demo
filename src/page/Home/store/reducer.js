import { fromJS } from 'immutable';
import { Types } from './index';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
});

const changeHomeData = (state, action) => (
    state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
    })
);

const pushHomeList = (state, action) => (
    state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
);

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case Types.PUSH_HOME_LIST:
            return pushHomeList(state, action);
        case Types.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.isShow)
        default: return state;
    }
};
