import React from 'react';
import './DeletarHabilidade.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { showSuccessMessage , showErrorMessage } from '../components/Toastr';
import EntitiesApiService from '../services/HabilidadeApiService';

class DeletarHabilidade extends React.Component{

    state = {
      id: '',
    }

    constructor(){
      super();
      this.service = new EntitiesApiService();
    }
  
    validate = () =>{
      const errors = [];

      if(!this.state.id){
        errors.push('Campo id é obrigário');
      }

      return errors;
    }
  
    delete = () => {

        const errors = this.validate();

        if(errors.length > 0){
          errors.forEach((message, index) => {
            showErrorMessage(message);
          });
          return false;
        }

        this.service.delete(this.state.id,
            {
              
            }
        ).then(response => 
            {
              console.log(response);
              showSuccessMessage('Habilidade Deletada')
            }
        ).catch(error =>
            {
              console.log(error.response);
            }
        );
  
      }
 
    cancel = () =>{
      this.props.history.push('/');
    }

    render() {
      return (
        <div className="DeletarHabilidade">
          
          <header>Deletar Habilidade</header>
          
          <div className="form-group">
            <label className="col-form=laber mt-4" htmlFor="id">Id da Habilidade:</label>
            <input type="number" className="form-control" placeholder="Id da Habilidade" id="id" 
            value={this.state.id} onChange={(e)=> this.setState({id: e.target.value})}/>
          </div>
          
          <br/>
            <button type="submit" className="btn btn-primary" onClick={this.delete}>Deletar</button>
            <button type="button" className="btn btn-primary" onClick={this.cancel}>Cancelar</button>
         </div>
      );
    }
  }
  export default withRouter(DeletarHabilidade);