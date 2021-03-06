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
        this.onUploadImageClickHandler = this.onUploadImageClickHandler.bind(this);
    }

    //------------------------------------------------------------------------------------------------------------------
    handleTopTextChange(e) {
        this.props.actions.setTopText(e.target.value);
    }

    handleBottomTextChange(e) {
        this.props.actions.setBottomText(e.target.value);
    }

    handleTextSizeChange(e) {
        let textSize = parseInt(e.target.value) || 0;
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

    onUploadImageClickHandler() {
        let inputField = this.refs.uploadImage;
        inputField.click();
    }

    //------------------------------------------------------------------------------------------------------------------
    renderTitle() {
        let titleText = this.getText('TITLE_TEXT');
        let description = this.getText('DESCRIPTION');
        return (
            <div className="root-container-title">
                {titleText} - {description}
            </div>
        );
    }

    renderInputs() {
        let uploadImage = this.getText('UPLOAD_IMAGE');
        let topText = this.getText('TOP_TEXT');
        let bottomText = this.getText('BOTTOM_TEXT');
        let textSizeText = this.getText('TEXT_SIZE');
        let defaultTextSize = MainConstants.DEFAULT_TEXT_SIZE;

        return (
            <div className="inputs-section">
                <div className="inputs-section__file-custom" onClick={this.onUploadImageClickHandler}>
                    {uploadImage}
                </div>
                <input ref="uploadImage" className="inputs-section__file" type="file" accept=".png,.jpg,.jpeg,.bmp" onChange={this.handleImageChange} />
                <input className="inputs-section__top-text" type="text" defaultValue={topText} onChange={this.handleTopTextChange} />
                <input className="inputs-section__bottom-text" type="text" defaultValue={bottomText} onChange={this.handleBottomTextChange} />
                <input className="inputs-section__text-size-value" type="number" defaultValue={defaultTextSize} onChange={this.handleTextSizeChange} />
                <label className="inputs-section__text-size-label" >{textSizeText}</label>
            </div>
        );
    }

    renderCanvas(topText) {
        let backgroundImage = this.props.state.backgroundImage;
        if (!backgroundImage) {
            return null;
        }
        let imageWidth = backgroundImage.width;
        let imageHeight = backgroundImage.height;
        let canvasWidth = MainConstants.DEFAULT_CANVAS_WIDTH;
        let canvasHeight = MainConstants.DEFAULT_CANVAS_HEIGHT;
        if (!imageWidth || !imageHeight) {
            return null;
        }
        if (imageWidth >= imageHeight) {
            canvasHeight = canvasWidth * (imageHeight / imageWidth);
        } else {
            canvasWidth = canvasHeight * (imageWidth / imageHeight);
        }

        return (
            <div className="canvas-section">
                <CanvasComponent
                    className='canvas-component'
                    ref='canvasComponent'
                    width={canvasWidth}
                    height={canvasHeight}
                    topText={topText || this.props.state.topText}
                    bottomText={this.props.state.bottomText}
                    textSize={this.props.state.textSize}
                    backgroundImage={this.props.state.backgroundImage}
                    onMemGenerated={this.handleMemGenerated}
                />
            </div>
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