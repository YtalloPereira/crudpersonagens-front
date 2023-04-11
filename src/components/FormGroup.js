import React from "react";

export default class FormGroup extends React.Component{
   render(){
        return(
        <div className="form-group">
            <label className = {this.props.className} > htmlFor={this.props.htmlFor}</label>
            <input type = {this.props.type} className = {this.props.className} 
            placeholder= {this.props.placeholder} id= {this.props.id} input/>
        </div>
        )
    }
}