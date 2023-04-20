import React from 'react';
import './DeletarPersonagem.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { showSuccessMessage,showErrorMessage } from '../components/Toastr';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

class DeletarPersonagem extends React.Component{

    state = {
      id: '',
    }

    validate = () =>{
      const errors = [];

      if(!this.state.nome){
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

        axios.delete(`http://localhost:8080/api/personagem/${this.state.id}`,
            {
              
            }
        ).then(response => 
            {
              console.log(response);
              showSuccessMessage('Personagem Deletado')
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
        <div className="DeletarPersonagem">
          
          <header>Deletar Personagem</header>
          
          <div className="form-group">
            <label className="col-form=laber mt-4" htmlFor="id">Id do Personagem:</label>
            <input type="number" className="form-control" placeholder="Id do Personagem" id="id" 
            value={this.state.id} onChange={(e)=> this.setState({id: e.target.value})}/>
          </div>
          
          <br/>
            <button type="submit" className="btn btn-primary" onClick={this.delete}>Deletar</button>
            <button type="button" className="btn btn-primary" onClick={this.cancel}>Cancelar</button>
         </div>
      );
    }
  }
  export default withRouter(DeletarPersonagem);