import { Types } from './index';
import axios from 'axios';

const changeDetailData = data => ({
    type: Types.CHANGE_DETAIL_DATA,
    title: data.title,
    content: data.content,
})

export const getDetailData = id => dispatch => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
        const data = res.data;
        dispatch(changeDetailData(data.data))
    }).catch(err => console.error(err))
}