import { Types } from './index';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: Types.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.floor(data.length / 10)
})

export const searchFocus = () => ({
    type: Types.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: Types.SEARCH_BLUR
})

export const getList = () => (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
        const data = res.data;
        dispatch(changeList(data.data))
    }).catch(err => console.error(err));
}

export const mouseEnter = () => ({
    type: Types.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: Types.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: Types.CHANGE_PAGE,
    page
})