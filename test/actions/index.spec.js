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
    it('should create an action to change text size', () => {
        const value = 42;
        const expectedAction = {
            type: ActionTypes.SET_TEXT_SIZE,
            value
        };
        expect(actions.setTextSize(value)).toEqual(expectedAction);
    });
    it('should create an action to change background image', () => {
        const value = new Image;
        value.src = 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        const expectedAction = {
            type: ActionTypes.SET_BACKGROUND_IMAGE,
            value
        };
        expect(actions.setBackgroundImage(value)).toEqual(expectedAction);
    });
    it('should create an action to change mem image', () => {
        const value = 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        const expectedAction = {
            type: ActionTypes.SET_MEM_IMAGE,
            value
        };
        expect(actions.setMemImage(value)).toEqual(expectedAction);
    });
});
