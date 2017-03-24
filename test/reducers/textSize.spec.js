import reducer from '../../src/reducers/textSize';
import * as ActionTypes from '../../src/constants/ActionTypes';

describe('textSize reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            50
        );
    });

    it('should handle SET_TEXT_SIZE', () => {
        expect(
            reducer({}, {
                type: ActionTypes.SET_TEXT_SIZE,
                value: 70
            })
        ).toEqual(
            70
        );
    });
});