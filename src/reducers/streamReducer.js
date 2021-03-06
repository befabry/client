import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS
} from "../actions/types";

import mapKeys from "../helpers/mapKeys";
import omit from "../helpers/omit";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
        case EDIT_STREAM:
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return omit(state, [action.payload]);
        case FETCH_STREAMS:
            return { ...state, ...mapKeys(action.payload, (val) => val.id) };
        default:
            return state;
    }
};
