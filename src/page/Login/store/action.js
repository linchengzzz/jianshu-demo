import { Types } from './index';
import axios from 'axios';

const changeLogin = (isLogin) => ({
    type: Types.CHANGE_LOGIN,
    isLogin: isLogin
})

export const login = (account, password) => dispatch => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
        const data = res.data;
        if (data.data) {
            dispatch(changeLogin(data.data))
        } else {
            alert('登录失败')
        }
    }).catch(err => console.error(err))
}

export const logout = () => ({
    type: Types.CHANGE_LOGIN,
    isLogin: false
})