import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from './store';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component {
    componentDidMount() {
        const { getDetail, match } = this.props;
        getDetail(match.params.id);
    }
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        );
    }
}

const mapState = state => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
})
const mapDispatch = dispatch => ({
    getDetail(id) {
        dispatch(Action.getDetailData(id))
    }
})
export default connect(mapState, mapDispatch)(Detail);