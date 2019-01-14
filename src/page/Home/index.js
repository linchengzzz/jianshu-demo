import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { Action } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';

class Home extends PureComponent {

    componentDidMount() {
        const { getHomeData } = this.props;
        getHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        this.removeEvents();
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
        const { changeScrollTopShow } = this.props;
        window.addEventListener('scroll', changeScrollTopShow);
    }

    removeEvents() {
        const { changeScrollTopShow } = this.props;
        window.removeEventListener('scroll', changeScrollTopShow);
    }

    render() {
        const { showScroll } = this.props;
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className={'banner-img'} src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    {showScroll ? (<BackTop onClick={() => this.handleScrollTop()}>回到顶部</BackTop>) : null}
                </HomeWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatchToProps = (dispatch) => ({
    getHomeData() {
        dispatch(Action.getHomeData());
    },
    changeScrollTopShow() {
        const scrollTop = document.documentElement.scrollTop;
        dispatch(Action.toggleTopShow(scrollTop > 400));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);