import * as actionType from '../actions/types';

const initialState = {
    weather: [],
    error: null
};

function weather(state = initialState, action) {
    switch (action.type) {
        case actionType.LIVEWEATHER_SAVE_START:
            return { ...state, loading: true, error: null };

        case actionType.LIVEWEATHER_SAVE_SUCCESS:
            return { ...state, loading: false, error: null, list: action.value };
        
            case actionType.LIVEWEATHER_SAVE_FAILURE:
            return { ...state, loading: false, error: action.value };

        default:
            return state;
    }
}

export default weather;