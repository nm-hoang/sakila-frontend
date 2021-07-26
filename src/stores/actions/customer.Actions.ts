import { ApiConstants } from "../../constants";
import { api } from "../../helpers";
import { Dispatch } from "redux"
import *  as TYPES from "../constants/customer.Constants";
import { NotifyHelper } from "../../helpers/NotifyHelper/notify-helper";

// Get list
export const customer_getlist = () => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.GETLIST_CUSTOMER_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'GET',
			url: `${ApiConstants.customer}`
		})
		dispatch({
			type: TYPES.GETLIST_CUSTOMER_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.GETLIST_CUSTOMER_ERROR,
			message: error
		})
		NotifyHelper.error(response.message, `Failure`)
	}
}

// Get by ID
export const customer_getbyid = (id: any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.GETBYID_CUSTOMER_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'GET',
			url: `${ApiConstants.customer}/${id}`
		})
		dispatch({
			type: TYPES.GETBYID_CUSTOMER_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.GETBYID_CUSTOMER_ERROR,
			message: error
		})
		NotifyHelper.error(response.message, `Failure`)
	}
}

// Insert
export const customer_insert = (data: any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.INSERT_CUSTOMER_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'POST',
			url: `${ApiConstants.customer}`,
			data
		})
		dispatch({
			type: TYPES.INSERT_CUSTOMER_SUCCESS,
			data: response.data
		})
		NotifyHelper.success(`New id: ${response.data.customer_id}`, `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.INSERT_CUSTOMER_ERROR,
			message: error
		})
		NotifyHelper.error(response.message, `Failure`)
	}
}


// Update
export const customer_update = (id:any, data: any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.UPDATE_CUSTOMER_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'PATCH',
			url: `${ApiConstants.customer}/${id}`,
			data
		})
		dispatch({
			type: TYPES.UPDATE_CUSTOMER_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.UPDATE_CUSTOMER_ERROR,
			message: error
		})
		NotifyHelper.error(error.message, `Failure`)
	}
}


// delete
export const customer_delete = (id:any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.DELETE_CUSTOMER_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'DELETE',
			url: `${ApiConstants.customer}/${id}`
		})
		dispatch({
			type: TYPES.DELETE_CUSTOMER_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.DELETE_CUSTOMER_ERROR,
			message: error
		})
		NotifyHelper.error(error.message, `Failure`)
	}
}
