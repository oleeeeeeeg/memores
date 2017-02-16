import BaseContainer from './base/BaseContainer';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RootContainer extends BaseContainer {





    renderTitle() {
        let titleText = this.getText('TITLE_TEXT');
        return (
            <div className="root-container-title">
                {titleText}
            </div>
        );
    }

    render() {
        // const { store } = this.props;


        return (
            <div className="root-container">
                {this.renderTitle()}
            </div>
        );
    }
}

RootContainer.propTypes = {

};

function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer);