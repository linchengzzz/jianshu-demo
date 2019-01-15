import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { Action } from './store';

class Login extends Component {
    render() {
        const { isLogin, login } = this.props;
        if (isLogin) {
            return <Redirect to={'/'}/>;    
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder={'账号'} ref={input => (this.account = input)} />
                        <Input placeholder={'密码'} ref={input => (this.password = input)} type={'password'} />
                        <Button onClick={() => login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }
    }
}

const mapState = state => ({
    isLogin: state.getIn(['login', 'isLogin'])
})
const mapDispatch = dispatch => ({
    login(accountELem, passwordElem) {
        dispatch(Action.login(accountELem.value, passwordElem.value))
    }
})
export default connect(mapState, mapDispatch)(Login);