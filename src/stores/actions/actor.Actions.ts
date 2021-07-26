import { ApiConstants } from "../../constants";
import { api } from "../../helpers";
import { Dispatch } from "redux"
import *  as TYPES from "../constants/actor.Constants";
import { NotifyHelper } from "../../helpers/NotifyHelper/notify-helper";

// Get list
export const actor_getlist = () => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.GETLIST_ACTOR_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'GET',
			url: `${ApiConstants.actor}`
		})
		dispatch({
			type: TYPES.GETLIST_ACTOR_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.GETLIST_ACTOR_ERROR,
			message: error
		})
		NotifyHelper.error(response.message, `Failure`)
	}
}

// Get by ID
export const actor_getbyid = (id: any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.GETBYID_ACTOR_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'GET',
			url: `${ApiConstants.actor}/${id}`
		})
		dispatch({
			type: TYPES.GETBYID_ACTOR_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.GETBYID_ACTOR_ERROR,
			message: error
		})
		NotifyHelper.error(response.message, `Failure`)
	}
}

// Insert
export const actor_insert = (data: any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.INSERT_ACTOR_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'POST',
			url: `${ApiConstants.actor}`,
			data
		})
		console.log(response)
		dispatch({
			type: TYPES.INSERT_ACTOR_SUCCESS,
			data: response.data
		})
		NotifyHelper.success(`New id: ${response.data.actor_id}`, `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.INSERT_ACTOR_ERROR,
			message: error
		})
		NotifyHelper.error(error.message, `Failure`)
	}
}


// Update
export const actor_update = (id:any, data: any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.UPDATE_ACTOR_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'PATCH',
			url: `${ApiConstants.actor}/${id}`,
			data
		})
		dispatch({
			type: TYPES.UPDATE_ACTOR_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.UPDATE_ACTOR_ERROR,
			message: error
		})
		NotifyHelper.error(response.message, `Failure`)
	}
}


// delete
export const actor_delete = (id:any) => async (dispatch: Dispatch) => {
	let response = {
		message: ""
	}
	try {
		dispatch({
			type: TYPES.DELETE_ACTOR_REQUEST
		})
		NotifyHelper.info("", "Processing")
		const response = await api.request({
			method: 'DELETE',
			url: `${ApiConstants.actor}/${id}`
		})
		dispatch({
			type: TYPES.DELETE_ACTOR_SUCCESS,
			data: response.data
		})
		NotifyHelper.success("", `Success`)
	} catch (error) {
		dispatch({
			type: TYPES.DELETE_ACTOR_ERROR,
			message: error
		})
		NotifyHelper.error(error.message, `Failure`)
	}
}
