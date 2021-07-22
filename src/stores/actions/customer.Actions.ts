import { ApiConstants } from "../../constants";
import { api } from "../../helpers";
import { Dispatch } from "redux"
import *  as TYPES from "../constants/customer.Constants";

// Get list
export const customer_getlist = (data: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: TYPES.GETLIST_CUSTOMER_REQUEST
		})
		const response = await api.request({
			method: 'GET',
			url: `url`})
		dispatch({
			type: TYPES.GETLIST_CUSTOMER_SUCCESS,
			data: response.data
		})
	} catch (error) {
		dispatch({
			type: TYPES.GETLIST_CUSTOMER_ERROR,
			message: error
		})
	}
}
