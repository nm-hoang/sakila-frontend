import * as TYPES from "../constants/houseForRent.Constants";
const initialState = {
	requesting: false,
	success: false,
	obj_data: null,
	list_data: [],
	message: null,
} as any;
interface InitialStateI{
	requesting ?: boolean,
	success ?: boolean,
	obj_data?: any,
	list_data?:any,
	message ?: any,
}

const houseForRentReducers = (state = initialState, payload: any) => {
	switch (payload.type) {
		case "HOUSE_FOR_RENT_INSERT":
			return {
				...state,
				requesting: true,
				data: payload.data,
			};
		case TYPES.GETLIST_REQUEST:
			return {
				...state,
				requesting: true,
			};
		case TYPES.GETLIST_SUCCESS:
			return {
				...state,
				requesting: false,
				success: true,
				list_data: payload.data,
			};
		case TYPES.GETLIST_ERROR:
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

export default houseForRentReducers;
