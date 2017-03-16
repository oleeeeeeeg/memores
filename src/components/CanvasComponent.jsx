import React, { Component, PropTypes } from 'react';

export default class CanvasComponent extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        let topText = this.props.topText || '';
        let bottomText = this.props.bottomText || '';
        let textSize = this.props.textSize || 0;
        let backgroundImage = this.props.backgroundImage;
        ctx.clearRect(0, 0, this.props.width, this.props.height);
        if (backgroundImage) {
            let startX, startY, width, height;
            if (backgroundImage.width >  backgroundImage.height) {
                startX = 0;
                width = Number(this.props.width);
                startY = 0;
                height = Number(this.props.height * (backgroundImage.height / backgroundImage.width));
            } else {
                width = Number(this.props.width * (backgroundImage.width /  backgroundImage.height));
                startX = Number((this.props.width / 2) - (width / 2));
                startY = 0;
                height = Number(this.props.height);
            }
            ctx.drawImage(backgroundImage, startX, startY, width, height);
            ctx.textAlign = 'center';
            ctx.font = `${textSize}px Arial`;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(topText, 300, textSize);
            ctx.strokeText(topText, 300, textSize);
            ctx.fillText(bottomText, 300, height - textSize / 5);
            ctx.strokeText(bottomText, 300, height - textSize / 5);

            let memImage = this.refs.canvas.toDataURL('image/png');
            this.props.onMemGenerated(memImage)
        }

    }

    render() {
        return (
            <canvas
                ref="canvas"
                className={this.props.className || 'canvas-component'}
                style={this.props.style}
                width={this.props.width}
                height={this.props.height}
            >
            </canvas>
        );
    }
}

CanvasComponent.propTypes = {
    className: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    textSize: PropTypes.number.isRequired,
    onMemGenerated: PropTypes.func.isRequired
};