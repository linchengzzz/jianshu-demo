import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Action } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends PureComponent {
    render() {
        const { list, page, handleGetMore } = this.props
        return (
            <div className={'list-wrapper'}>
                {
                    list.map((item, index) => (
                        <Link key={index} to={`/detail/${item.get('id')}`}>
                            <ListItem key={index}>
                                <img className={'list-pic'} src={item.get('imgUrl')} alt=""/>
                                <ListInfo>
                                    <h3 className={'title'}>{item.get('title')}</h3>
                                    <p className={'desc'}>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => handleGetMore(page)}>阅读更多</LoadMore>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});
const mapDispatchToProps = (dispatch) => ({
    handleGetMore(page) {
        dispatch(Action.getMore(page))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);