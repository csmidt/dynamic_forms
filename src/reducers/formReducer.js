const DefaultState = {
	formFields : []
}

export default function(state=DefaultState, action) {
	switch(action.type) {
		case 'GET_FORMFIELDS':
			return {...state, formFields: action.formFields}
		default:
			return state
	}
}