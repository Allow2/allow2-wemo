import { handleActions } from 'redux-actions';
import actions from '../actions';

export default handleActions({
    [actions.deviceUpdate]: (state, action) => {
        return { ...state, ...action.payload };
    },

    [actions.deviceActive]: (state, action) => {
        let newState = Object.assign({}, state);
        var device = newState[action.payload.UDN];
        if (device) {
            device.active = action.payload.active;
            newState[action.payload.UDN] = device;
        }
        return newState;
    },

    [actions.deviceInit]: (state, action) => {
        return Object.keys(state).reduce(function(memo, key) {
            console.log(key);
            let device = Object.assign({}, state[key]);
            device.active = false;
            memo[key] = device;
            return memo;
        }, {});
    }

}, {});
