import reducer from '../../src/reducers/backgroundImage';
import * as ActionTypes from '../../src/constants/ActionTypes';

describe('backgroundImage reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            new Image()
        );
    });

    it('should handle SET_BACKGROUND_IMAGE', () => {
        let img0 = new Image();
        img0.src = 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        let img1 = new Image();
        img1.src = 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        expect(
            reducer({}, {
                type: ActionTypes.SET_BACKGROUND_IMAGE,
                value: img0
            })
        ).toEqual(
            img1
        );
    });
});