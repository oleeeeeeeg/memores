import reducer from '../../src/reducers/bottomText';
import * as ActionTypes from '../../src/constants/ActionTypes';

describe('bottomText reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            'Bottom text'
        );
    });

    it('should handle SET_BOTTOM_TEXT', () => {
        expect(
            reducer({}, {
                type: ActionTypes.SET_BOTTOM_TEXT,
                value: 'New text'
            })
        ).toEqual(
            'New text'
        );
    });
});