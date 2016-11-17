import React from 'react';
import { Link } from 'react-router'
import * as actions from 'actions'
import store from 'store'
import { getFormFields } from 'api/dynamicFormApi'
//material UI
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'


const DynamicFormContainer = React.createClass({
  getInitialState: function() {
    return {
      formFields: []
    }
	},
  componentWillMount: function () {
    getFormFields()
    this.unsubscribe = store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        formFields: appState
      })
    }) 
  }, 
  componentWillUnmount: function () {
    this.unsubscribe()
  },
  render: function () {
    return (
      <DynamicFormView formFields={this.state.formFields} />
    )
  }
})
const DynamicFormView = React.createClass ({
	render: function() {
		return (
	      <div className="form">
	      	<header> Sign Up For My Web App </header>
            {this.props.formFields.map(field => (
               <TextField
                      id="fname"
                      hintText="Add Image url here"
                      floatingLabelText="Add image URL here."
                      fullWidth={true}
                      value={this.state.value}
                      onChange={this.update}
                />
            ))}	      		   
	      	<footer> </footer>
	      	
	      </div>
   	)
	}    
})  
export default DynamicFormContainer