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

const style = {
  margin: 12,
  button: {
    backgroundColor: "#428BCA"  
  }
}
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
        formFields: appState.formFields
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
  update: function(e) {
    var obj = {}
    var id = e.target.id
    var value = e.target.value
    obj[id] = value
    this.setState(obj)
  },
	render: function() {
		return (
	      <div className="dynamicForm">
	      	<h3>Sign Up For My Web App </h3>
            {this.props.formFields.map(field => {
              if (field.type === "text") {
                return <TextField
                       key={`i + ${field.id}`}
                       id="fname"
                       fullWidth={true}
                       value={field.label}  
                       onChange={this.update}    
                        />
                }else if (field.type === "select") {
                  return <SelectField
                       floatingLabelText="Select Language"
                       value={field.label}
                       
                          >
                       <MenuItem value={field.options.value} primaryText={field.options.label} />
                       <MenuItem value={field.options.value} primaryText={field.options.label} />
                       <MenuItem value={field.options.value} primaryText={field.options.label} />
                       <MenuItem value={field.options.value} primaryText={field.options.label} />
                       <MenuItem value={field.options.value} primaryText={field.options.label} />
                     </SelectField>
                } else if (field.type = "tel") {
                  return <TextField
                       key={`i + ${field.id}`}
                       id="fname"
                       fullWidth={true}
                       value={field.label}
                       onChange={this.update}       
                        />
                } else if (field.type === "email"){
                  return <TextField
                       key={`i + ${field.id}`}
                       id="fname"
                       fullWidth={true}
                       value={field.label}
                       onChange={this.update}       
                        />        
                } else if (field.type === "textarea") {
                  return <TextField
                        key={`i + ${field.id}`}
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        onChange={this.update} 
                      />

                }
 
                
              
            })}
               	      		   
	      	<footer className="footer">
            <div className="footerButton">
              <RaisedButton type="submit" label="Submit" primary={true} style={style.button} onClick={this.update}/>
            </div>
          </footer>
	      	
	      </div>
   	)
	}    
})  
export default DynamicFormContainer

// <TextField
//                       key={`i + ${field.id}`}
//                       id="fname"
//                       fullWidth={true}
//                       value={field.label}      
//                 />
               
//             ))}  