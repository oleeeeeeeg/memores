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
            startX = 0;
            startY = 0;
            width = this.props.width;
            height = this.props.height;

            ctx.drawImage(backgroundImage, startX, startY, width, height);
            ctx.textAlign = 'center';
            ctx.font = `${textSize}px Impact`;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(topText, width / 2, textSize);
            ctx.strokeText(topText, width / 2, textSize);
            ctx.fillText(bottomText, width / 2, height - textSize / 5);
            ctx.strokeText(bottomText, width / 2, height - textSize / 5);

            let memImage = this.refs.canvas.toDataURL('image/png');
            this.props.onMemGenerated(memImage);
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
    className: PropTypes.string,
    style: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    backgroundImage: PropTypes.object,
    textSize: PropTypes.number.isRequired,
    onMemGenerated: PropTypes.func.isRequired
};