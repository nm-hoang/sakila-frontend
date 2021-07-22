import { ApiConstants } from "../../constants";
import { api } from "../../helpers";
import { Dispatch } from "redux"
import *  as TYPES from "../constants/actor.Constants";

// Get list
export const actor_getlist = (data: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: TYPES.GETLIST_ACTOR_REQUEST
		})
		const response = await api.request({
			method: 'GET',
			url: `url`})
		dispatch({
			type: TYPES.GETLIST_ACTOR_SUCCESS,
			data: response.data
		})
	} catch (error) {
		dispatch({
			type: TYPES.GETLIST_ACTOR_ERROR,
			message: error
		})
	}
}
