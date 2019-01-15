import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { } from './style';
// import { } from './store';

class Write extends Component {
    render() {
        const { isLogin } = this.props;
        if (isLogin) {
            return (
                <div>
                    Write~
                </div>
            );
        } else {
            return <Redirect to={'/login'}/>
        }
    }
}

const mapState = state => ({
    isLogin: state.getIn(['login', 'isLogin'])
})
const mapDispatch = dispatch => ({
})
export default connect(mapState, mapDispatch)(Write);