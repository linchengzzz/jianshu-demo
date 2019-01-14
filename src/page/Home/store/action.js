import { Types } from './index';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeHomeData = (data) => ({
    type: Types.CHANGE_HOME_DATA,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList),
})

const pushHomeList = (list, nextPage) => ({
    type: Types.PUSH_HOME_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeData = () => (dispatch) => {
    axios.get('/api/home.json').then(res => {
        const data = res.data;
        dispatch(changeHomeData(data.data))
    }).catch(err => console.error(err))
}

export const getMore = (page) => (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
        const data = res.data;
        dispatch(pushHomeList(data.data, page + 1));
    }).catch(err => console.error(err))
}

export const toggleTopShow = (bool) => ({
    type: Types.TOGGLE_TOP_SHOW,
    isShow: bool
})