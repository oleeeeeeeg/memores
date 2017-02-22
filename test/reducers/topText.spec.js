import reducer from '../../src/reducers/topText';
import * as ActionTypes from '../../src/constants/ActionTypes';

describe('topText reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            'Top text'
        );
    });

    it('should handle SET_TOP_TEXT', () => {
        expect(
            reducer({}, {
                type: ActionTypes.SET_TOP_TEXT,
                value: 'Run the tests'
            })
        ).toEqual(
            'Run the tests'
        );
    });
});