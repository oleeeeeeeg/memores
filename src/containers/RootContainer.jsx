import BaseContainer from './base/BaseContainer';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as memoRooshActions from './../actions/index';
import CanvasComponent from './../components/CanvasComponent';

class RootContainer extends BaseContainer {
    constructor() {
        super();
        this.handleTopTextChange = this.handleTopTextChange.bind(this);
        this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    //------------------------------------------------------------------------------------------------------------------
    handleTopTextChange(e) {
        this.props.actions.setTopText(e.target.value);
    }

    handleBottomTextChange(e) {
        this.props.actions.setBottomText(e.target.value);
    }

    handleImageChange(e) {
        let imageFile = e.target.files[0];
        if (imageFile) {
            let reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onloadend = (e) => {
                let imageBase64String = e.target.result;
                let image = new Image();
                image.onload = () => {
                    this.props.actions.setBackgroundImage(image);
                };
                image.src = imageBase64String;
            }
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    renderTitle() {
        let titleText = this.getText('TITLE_TEXT');
        return (
            <div className="root-container-title">
                {titleText}
            </div>
        );
    }

    renderInputs() {
        let topText = this.getText('TOP_TEXT');
        let bottomText = this.getText('BOTTOM_TEXT');
        return (
            <div>
                <input type="text" defaultValue={topText} onChange={this.handleTopTextChange} />
                <input type="text" defaultValue={bottomText} onChange={this.handleBottomTextChange} />
                <input type="file" onChange={this.handleImageChange} />
            </div>
        );
    }

    renderCanvas(topText) {
        return (
            <CanvasComponent
                width='1000'
                height='600'
                topText={topText || this.props.state.topText}
                bottomText={this.props.state.bottomText}
                backgroundImage={this.props.state.backgroundImage}
            />
        );
    }

    render() {
        return (
            <div className="root-container">
                {this.renderTitle()}
                {this.renderInputs()}
                {this.renderCanvas()}
            </div>
        );
    }
}

RootContainer.propTypes = {

};

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memoRooshActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer);