import React from 'react';
import { connect } from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style';
import { Action } from './store'
import { CSSTransition } from 'react-transition-group';


class Header extends React.Component {

    getListArea() {
        const { focused, list} = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map(item => (
                                <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            ))
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载App</NavItem>
                    <NavItem className={'right'}>登录</NavItem>
                    <NavItem className={'right'}>
                        <i className={'iconfont'}>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames={'slide'}>
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus()}
                                onBlur={() => handleInputBlur()}/>
                        </CSSTransition>
                        <i className={`iconfont ${focused ? 'focused' : ''}`}>&#xe623;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className={'writing'}>
                        <i className={'iconfont'}>&#xe61b;</i>
                        写文章
                    </Button>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
});
const mapDispatchToProps = (dispatch) => ({
    handleInputFocus() {
        dispatch(Action.getList());
        dispatch(Action.searchFocus());
    },
    handleInputBlur() {
        dispatch(Action.searchBlur());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);