import * as actions from './../../src/actions/index';
import * as ActionTypes from './../../src/constants/ActionTypes';

describe('actions', () => {
    it('should create an action to change top text', () => {
        const value = 'Hello';
        const expectedAction = {
            type: ActionTypes.SET_TOP_TEXT,
            value
        };
        expect(actions.setTopText(value)).toEqual(expectedAction);
    });
    it('should create an action to change bottom text', () => {
        const value = 'Hello';
        const expectedAction = {
            type: ActionTypes.SET_BOTTOM_TEXT,
            value
        };
        expect(actions.setBottomText(value)).toEqual(expectedAction);
    });
});
