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
        // getlist
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
            
        // get by id
        case TYPES.GETBYID_ACTOR_REQUEST:
            return {
                ...state,
                requesting: true,
                obj_data: null,
            };
        case TYPES.GETBYID_ACTOR_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                obj_data: payload.data,
            };
        case TYPES.GETBYID_ACTOR_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message,
            };

        // insert
        case TYPES.INSERT_ACTOR_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case TYPES.INSERT_ACTOR_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                obj_data: payload.data,
            };
        case TYPES.INSERT_ACTOR_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message,
            };
            
        // update
        case TYPES.UPDATE_ACTOR_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case TYPES.UPDATE_ACTOR_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                obj_data: payload.data,
            };
        case TYPES.UPDATE_ACTOR_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message,
            };

        // delete
        case TYPES.DELETE_ACTOR_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case TYPES.DELETE_ACTOR_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                message: payload.data,
            };
        case TYPES.DELETE_ACTOR_ERROR:
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
