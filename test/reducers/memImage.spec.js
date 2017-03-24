import reducer from '../../src/reducers/memImage';
import * as ActionTypes from '../../src/constants/ActionTypes';

describe('memImage reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            ''
        );
    });

    it('should handle SET_MEM_IMAGE', () => {
        expect(
            reducer({}, {
                type: ActionTypes.SET_MEM_IMAGE,
                value: 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            })
        ).toEqual(
            'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        );
    });
});