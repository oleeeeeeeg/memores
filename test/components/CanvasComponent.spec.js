import React from 'react';
import { shallow } from 'enzyme';
import CanvasComponent from '../../src/components/CanvasComponent';

function setup() {
    const props = {
        setTopText: jest.fn(),
        className: 'canvas-component',
        width: '',
        height: '600',
        style: '',
        topText: '',
        bottomText: '',
        textSize: 60,
        onMemGenerated: function () {
            return null;
        }
    };

    const enzymeWrapper = shallow(<CanvasComponent {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('CanvasComponent', () => {
        it('should render canvas', () => {
            const { enzymeWrapper } = setup();

            expect(enzymeWrapper.find('canvas').hasClass('canvas-component')).toBe(true);
            expect(enzymeWrapper.find('canvas').props().height).toBe('600');

        });
    });
});