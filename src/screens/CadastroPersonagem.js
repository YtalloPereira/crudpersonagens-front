import React from 'react';
import './CadastroPersonagem.css';
import {withRouter} from 'react-router-dom';
import { showErrorMessage, showSuccessMessage } from '../components/Toastr';
import PersonagemApiService from '../services/PersonagemApiService';

class CadastroPersonagem extends React.Component{

    state = {
      nome: '',
      classe: '',
      hp: ''
    }

    constructor(){
      super();
      this.service = new PersonagemApiService();
    }
  
    validate = () =>{
      const errors = [];

      if(!this.state.nome){
        errors.push('Campo nome é obrigário');
      }

      if(!this.state.classe){
        errors.push('Campo classe é obrigário');
      }

      if(!this.state.hp){
        errors.push('Campo Hp é obrigário');
      }

      return errors;
    }

    create = () => {

      const errors = this.validate();

      if(errors.length > 0){
        errors.forEach((message, index) => {
          showErrorMessage(message);
        });
        return false;
      }

      this.service.create(
          {
            nome: this.state.nome,
            classe: this.state.classe,
            hp: this.state.hp
          }
      ).then(response => 
          {
            console.log(response);
            showSuccessMessage(`Personagem de nome ${this.state.nome} criado`)
          }
      ).catch(error =>
          {
            console.log(error.response);
          }
      )

    }
 
    cancel = () =>{
      this.props.history.push('/');
    }

    render() {
      return (
        <div className="CadastroPersonagem">
          
          <header>Criação de Personagem</header>
          
          <div className="form-group">
            <label className="col-form=laber mt-4" htmlFor="nome">Nome:</label>
            <input type="text" className="form-control" placeholder="nome" id="nome" 
            value={this.state.nome} onChange={(e)=> this.setState({nome: e.target.value})}/>
          </div>
  
          <br/>
            <div className="form-group">
              <label className="col-form=laber mt-4" htmlFor="classe">Classe:</label>
              <input type="text" className="form-control" placeholder="Classe" id="classe" 
              value={this.state.classe} onChange={(e)=> this.setState({classe: e.target.value})}/>
            </div>
  
          <br/>
            <div className="form-group">
              <label className="col-form=laber mt-4" htmlFor="hp">Hp:</label>
              <input type="number" className="form-control" placeholder="Hp" id="hp" 
              value={this.state.hp} onChange={(e)=> this.setState({hp: e.target.value})}/>
            </div>
  
          <br/>
            <button type="submit" className="btn btn-primary" onClick={this.create}>Salvar</button>
            <button type="button" className="btn btn-primary" onClick={this.cancel}>Cancelar</button>
         </div>
      );
    }
  }
  export default withRouter(CadastroPersonagem);