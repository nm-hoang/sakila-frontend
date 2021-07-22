import * as TYPES from '../constants/customer.Constants'

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
const customerReducers = (state: InitialStateI = initialState, payload: any) => {
    switch (payload.type) {
        case TYPES.GETLIST_CUSTOMER_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case TYPES.GETLIST_CUSTOMER_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                list_data: payload.data,
            };
        case TYPES.GETLIST_CUSTOMER_ERROR:
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

export default customerReducers;
