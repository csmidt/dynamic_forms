import axios from 'axios'
import store from 'store'
import * as actions from 'actions'
import { hashHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getFormFields() {
	return axios.get("formFields").then(resp => {
		store.dispatch ({
			type: 'GET_FORMFIELDS',
			fields: resp.data
		})
	})
}