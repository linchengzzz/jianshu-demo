import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Action } from './store';
import { Action as LoginAction } from '../../page/Login/store';
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

class Header extends React.PureComponent {

    getListArea() {
        const {
            focused,
            mouseIn,
            list,
            page,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;
        const newList = list.toJS();
        const length = newList.length;
        const pageList = [];
        if (length) {
            for (let i = page * 10; i < (page + 1 ) * 10; i++) {
                i < length && pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={icon => (this.spinIcon = icon)} className={'iconfont spin'}>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, isLogin, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to={'/'}>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载App</NavItem>
                    { isLogin ? (
                        <NavItem className={'right'} onClick={() => logout()}>退出</NavItem>
                    ) : (
                        <Link to={'/login'}>
                            <NavItem className={'right'}>登录</NavItem>
                        </Link>
                    )}
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
                                onFocus={() => handleInputFocus(list)}
                                onBlur={() => handleInputBlur()}/>
                        </CSSTransition>
                        <i className={`iconfont ${focused ? 'focused zoom' : 'zoom'}`}>&#xe623;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to={'/write'}>
                        <Button className={'writing'}>
                            <i className={'iconfont'}>&#xe61b;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    isLogin: state.getIn(['login', 'isLogin']),
});
const mapDispatchToProps = (dispatch) => ({
    handleInputFocus(list) {
        !list.size && dispatch(Action.getList());
        dispatch(Action.searchFocus());
    },
    handleInputBlur() {
        dispatch(Action.searchBlur());
    },
    handleMouseEnter() {
        dispatch(Action.mouseEnter());
    },
    handleMouseLeave() {
        dispatch(Action.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
        const originAngle = ~~spin.style.transform.replace(/[^0-9]/ig, '');
        spin.style.transform = `rotate(${originAngle + 360}deg)`;
        dispatch(Action.changePage( page < totalPage ? page + 1 : 0));
    },
    logout() {
        dispatch(LoginAction.logout())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
