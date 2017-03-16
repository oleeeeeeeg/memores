import BaseContainer from './base/BaseContainer';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as memoResActions from './../actions/index';
import CanvasComponent from './../components/CanvasComponent';
import * as MainConstants from './../constants/MainConstants';

class RootContainer extends BaseContainer {
    constructor() {
        super();
        this.handleTopTextChange = this.handleTopTextChange.bind(this);
        this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleTextSizeChange = this.handleTextSizeChange.bind(this);
        this.handleMemGenerated = this.handleMemGenerated.bind(this);
    }

    //------------------------------------------------------------------------------------------------------------------
    handleTopTextChange(e) {
        this.props.actions.setTopText(e.target.value);
    }

    handleBottomTextChange(e) {
        this.props.actions.setBottomText(e.target.value);
    }

    handleTextSizeChange(e) {
        let textSize = parseInt(e.target.value);
        this.props.actions.setTextSize(textSize);
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
            };
        }
    }

    handleMemGenerated(e) {
        this.props.actions.setMemImage(e);
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
        let textSizeText = this.getText('TEXT_SIZE');
        let defaultTextSize = MainConstants.DEFAULT_TEXT_SIZE;

        return (
            <div>
                <input type="file" onChange={this.handleImageChange} />
                <div>
                    <input type="text" defaultValue={topText} onChange={this.handleTopTextChange} />
                    <input type="text" defaultValue={bottomText} onChange={this.handleBottomTextChange} />
                    <input type="number" defaultValue={defaultTextSize} onChange={this.handleTextSizeChange} />
                    <label>{textSizeText}</label>
                </div>
            </div>
        );
    }

    renderCanvas(topText) {
        return (
            <CanvasComponent
                ref='canvasComponent'
                width='600'
                height='600'
                topText={topText || this.props.state.topText}
                bottomText={this.props.state.bottomText}
                textSize={this.props.state.textSize}
                backgroundImage={this.props.state.backgroundImage}
                onMemGenerated={this.handleMemGenerated}
            />
        );
    }

    renderSave() {
        let saveText = this.getText('SAVE_TEXT');
        let imageText = this.getText('IMAGE_TEXT');
        if (!this.refs.canvasComponent) {
            return null;
        }

        let image = this.props.state.memImage;

        return (
            <a
                className="save-button"
                href={image}
                download={imageText}
                onClick={null}
            >
                {saveText}
            </a>
        );
    }

    render() {
        return (
            <div className="root-container">
                {this.renderTitle()}
                {this.renderInputs()}
                {this.renderCanvas()}
                {this.renderSave()}
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
        actions: bindActionCreators(memoResActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer);