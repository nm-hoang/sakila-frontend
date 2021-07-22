import { ApiConstants } from "../../constants";
import { api } from "../../helpers";
import { Dispatch } from "redux"
import *  as TYPES from "../constants/houseForRent.Constants";

// Get list
export const houseforrent_getlist = (data: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: TYPES.GETLIST_REQUEST
		})
		const response = await api.request({
			method: 'GET',
			url: `${ApiConstants.houseforrent_getlist}
			search=${data.search}
			&provinceid=${data.provinceid}
			&districtid=${data.districtid}
			&wardid=${data.wardid}
			&roadaxisid=${data.roadaxisid}
			&username=${data.username}
			&offset=${data.offset}
			&pagesize=${data.pagesize}`
		})
		dispatch({
			type: TYPES.GETLIST_SUCCESS,
			data: response.data
		})
	} catch (error) {
		dispatch({
			type: TYPES.GETLIST_ERROR,
			message: error
		})
	}
}
