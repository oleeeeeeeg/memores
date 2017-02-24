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
        ctx.clearRect(0, 0, this.props.width, this.props.height);
        ctx.fillText(topText, 100, 100);
        ctx.fillText(bottomText, 100, 400);
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
    bottomText: PropTypes.string.isRequired
};