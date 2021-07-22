import * as TYPES from '../constants/actor.Constants'

interface InitialStateI {
    requesting?: boolean,
    success?: boolean,
    obj_data?: any,
    list_data?: any,
    message?: any
}

const initialState: InitialStateI = {
    requesting: false,
    success: false
}
const actorReducers = (state: InitialStateI = initialState, payload: any) => {
    switch (payload.type) {
        case TYPES.GETLIST_ACTOR_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case TYPES.GETLIST_ACTOR_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                list_data: payload.data,
            };
        case TYPES.GETLIST_ACTOR_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message,
            };
        default:
            return state;
    }
};

export default actorReducers;
