import React from "react";

export default class FormGroup extends React.Component{
   render(){
        return(
        <div className="form-group">
            <label className = {this.props.className} > htmlFor={this.props.htmlFor}</label>
        </div>
        )
    }
}